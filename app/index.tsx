import { Link, router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Trainer</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Start New Session"
          // Fixed TS2345: Cast to 'any' to bypass strict route checking temporarily
          onPress={() => router.push("/tracker" as any)}
        />
      </View>

      {/* Fixed TS2322: Cast href to 'any' */}
      <Link href={"/tracker" as any} style={styles.link}>
        Quick Start
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20 },
  buttonContainer: { marginBottom: 20, width: "50%" },
  link: { color: "blue", marginTop: 10 },
});
