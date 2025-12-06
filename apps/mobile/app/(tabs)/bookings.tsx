import { View, Text, StyleSheet } from "react-native";

export default function BookingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
      <Text style={styles.text}>View and manage your bookings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#666",
  },
});
