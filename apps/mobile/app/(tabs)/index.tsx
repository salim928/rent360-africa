import { View, Text, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Rent360 Africa</Text>
          <Text style={styles.subtitle}>Find Your Perfect Rental</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome to Rent360 Africa</Text>
          <Text style={styles.text}>
            Your Pan-African rental marketplace for properties, vehicles,
            equipment, and events.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categories}>
            <View style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>Properties</Text>
            </View>
            <View style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>Vehicles</Text>
            </View>
            <View style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>Equipment</Text>
            </View>
            <View style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>Events</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#F97316",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  categoryCard: {
    flex: 1,
    minWidth: 150,
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
});
