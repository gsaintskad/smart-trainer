import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TrainingSession, Waypoint } from "../constants/types";

export default function SummaryScreen() {
  const params = useLocalSearchParams();

  // Safe parsing with fallback
  const session: TrainingSession = params.session
    ? JSON.parse(params.session as string)
    : { id: "", created_at: new Date().toISOString(), waypoints: [] };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Training Summary</Text>

      {/* Fixed: created_at now exists on TrainingSession */}
      <Text style={styles.date}>
        Date: {new Date(session.created_at).toLocaleDateString()}
      </Text>

      <View style={styles.statsContainer}>
        <Text>Total Waypoints: {session.waypoints.length}</Text>
        {/* Fixed: typed parameter 'p' and photo_uri check */}
        <Text>
          Photos Taken:{" "}
          {session.waypoints.filter((p: Waypoint) => p.photo_uri).length}
        </Text>
      </View>

      <View style={styles.photosContainer}>
        {/* Fixed: typed parameter 'point' */}
        {session.waypoints.map((point: Waypoint, index: number) => {
          if (!point.photo_uri) return null;

          return (
            <View key={point.id || index} style={styles.photoWrapper}>
              <Image source={{ uri: point.photo_uri }} style={styles.photo} />
              <Text style={styles.timestamp}>
                {new Date(point.timestamp).toLocaleTimeString()}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  date: { fontSize: 16, marginBottom: 20 },
  statsContainer: { marginBottom: 20 },
  photosContainer: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  photoWrapper: { marginBottom: 15 },
  photo: { width: 100, height: 100, borderRadius: 8 },
  timestamp: { fontSize: 10, marginTop: 4 },
});
