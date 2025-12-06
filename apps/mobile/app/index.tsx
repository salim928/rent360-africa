import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-blue-600 px-4 pb-8 pt-12">
        <Text className="text-3xl font-bold text-white">Rent360 Africa</Text>
        <Text className="mt-2 text-white/90">
          Your Pan-African Rental Marketplace
        </Text>
      </View>

      {/* Search Section */}
      <View className="px-4 -mt-6">
        <View className="rounded-lg bg-white p-4 shadow-lg">
          <TextInput
            placeholder="What are you looking for?"
            className="mb-3 rounded-md border border-gray-300 p-3"
          />
          <TextInput
            placeholder="Location"
            className="mb-3 rounded-md border border-gray-300 p-3"
          />
          <Pressable className="rounded-md bg-blue-600 p-4">
            <Text className="text-center font-semibold text-white">Search</Text>
          </Pressable>
        </View>
      </View>

      {/* Categories */}
      <View className="mt-8 px-4">
        <Text className="mb-4 text-2xl font-bold">Browse by Category</Text>
        <View className="flex-row flex-wrap gap-4">
          {[
            { name: "Properties", emoji: "🏠", count: "5,000+" },
            { name: "Vehicles", emoji: "🚗", count: "2,500+" },
            { name: "Equipment", emoji: "🔧", count: "1,200+" },
            { name: "Events", emoji: "🎉", count: "800+" },
          ].map((category) => (
            <Pressable
              key={category.name}
              className="w-[48%] rounded-lg border border-gray-200 bg-white p-4"
            >
              <Text className="mb-2 text-3xl">{category.emoji}</Text>
              <Text className="text-lg font-semibold">{category.name}</Text>
              <Text className="text-sm text-gray-600">
                {category.count} listings
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Features */}
      <View className="mt-8 bg-gray-50 p-4">
        <Text className="mb-4 text-2xl font-bold">Why Choose Us?</Text>
        <View className="gap-4">
          {[
            {
              title: "Verified Listings",
              description: "All listings verified for your safety",
              emoji: "✅",
            },
            {
              title: "Instant Booking",
              description: "Book instantly with streamlined process",
              emoji: "⚡",
            },
            {
              title: "AI-Powered Pricing",
              description: "Get the best deals with smart pricing",
              emoji: "🤖",
            },
            {
              title: "Pan-African Coverage",
              description: "Find rentals across Africa",
              emoji: "🌍",
            },
          ].map((feature) => (
            <View
              key={feature.title}
              className="flex-row items-center rounded-lg bg-white p-4"
            >
              <Text className="mr-4 text-3xl">{feature.emoji}</Text>
              <View className="flex-1">
                <Text className="text-lg font-semibold">{feature.title}</Text>
                <Text className="text-sm text-gray-600">
                  {feature.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* CTA */}
      <View className="mx-4 my-8 rounded-lg bg-blue-600 p-8">
        <Text className="mb-2 text-center text-2xl font-bold text-white">
          Ready to Start Renting?
        </Text>
        <Text className="mb-6 text-center text-white/90">
          Join thousands across Africa
        </Text>
        <View className="gap-3">
          <Pressable className="rounded-md bg-white p-4">
            <Text className="text-center font-semibold text-blue-600">
              Browse Listings
            </Text>
          </Pressable>
          <Pressable className="rounded-md border-2 border-white p-4">
            <Text className="text-center font-semibold text-white">
              Become a Host
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
