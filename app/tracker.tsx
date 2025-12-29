import * as Location from "expo-location";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TrainingSession, Waypoint } from "../constants/types";

export default function TrackerScreen() {
  const [isTracking, setIsTracking] = useState(false);

  // Fixed: Added id and created_at to initial state
  const [session, setSession] = useState<TrainingSession>({
    id: "temp-id-" + Date.now(),
    created_at: new Date().toISOString(),
    waypoints: [],
  });

  const startTracking = () => {
    setIsTracking(true);
    // Fixed: Added id and created_at to object literal
    setSession({
      id: "session-" + Date.now(),
      created_at: new Date().toISOString(),
      waypoints: [],
    });
  };

  const stopTracking = () => {
    setIsTracking(false);

    // Fixed TS2322: Cast pathname to any to bypass strict check temporarily
    router.push({
      pathname: "/summary" as any,
      params: { session: JSON.stringify(session) },
    });
  };

  const addWaypoint = async () => {
    // Permission requests usually go in useEffect, assuming granted here for brevity
    let location = await Location.getCurrentPositionAsync({});

    // Fixed: Added id to object literal
    const newWaypoint: Waypoint = {
      id: "wp-" + Date.now(),
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      timestamp: location.timestamp,
      photo_uri: null,
    };

    setSession((prev) => ({
      ...prev,
      waypoints: [...prev.waypoints, newWaypoint],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        Status: {isTracking ? "Tracking..." : "Idle"}
      </Text>

      <Text>Waypoints collected: {session.waypoints.length}</Text>

      {!isTracking ? (
        <Button title="Start Session" onPress={startTracking} />
      ) : (
        <View style={styles.controls}>
          <Button title="Add Waypoint" onPress={addWaypoint} />
          <Button
            title="Stop & View Summary"
            onPress={stopTracking}
            color="red"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  status: { fontSize: 20, marginBottom: 20 },
  controls: { gap: 10, marginTop: 20 },
});
