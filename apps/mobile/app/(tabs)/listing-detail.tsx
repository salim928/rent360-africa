import { View, Text, ScrollView, Image, Pressable, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';

export default function ListingDetailScreen() {
  const params = useLocalSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample listing data - replace with API call
  const listing = {
    id: params.id || '1',
    title: 'Modern 2BR Apartment in East Legon',
    location: 'East Legon, Accra, Ghana',
    price: 2500,
    currency: 'GHS',
    period: 'month',
    rating: 4.8,
    reviews: 24,
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    images: [
      'https://via.placeholder.com/400x300?text=Image+1',
      'https://via.placeholder.com/400x300?text=Image+2',
      'https://via.placeholder.com/400x300?text=Image+3',
    ],
    description: 'Beautiful modern apartment in the heart of East Legon. Fully furnished with contemporary amenities, perfect for professionals or small families.',
    amenities: ['WiFi', 'Air Conditioning', '24/7 Security', 'Parking', 'Kitchen'],
    host: {
      name: 'Kwame Mensah',
      verified: true,
      responseRate: 98,
      responseTime: 'within an hour',
    },
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: '',
          headerStyle: { backgroundColor: '#F97316' },
          headerTintColor: '#fff',
        }} 
      />
      <ScrollView style={styles.container}>
        {/* Image Gallery */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: listing.images[currentImageIndex] }}
            style={styles.mainImage}
          />
          <View style={styles.imageIndicators}>
            {listing.images.map((_, index) => (
              <Pressable
                key={index}
                onPress={() => setCurrentImageIndex(index)}
                style={[
                  styles.indicator,
                  currentImageIndex === index && styles.activeIndicator
                ]}
              />
            ))}
          </View>
        </View>

        {/* Listing Info */}
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{listing.title}</Text>
              <Text style={styles.location}>📍 {listing.location}</Text>
            </View>
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✓ Verified</Text>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {listing.rating}</Text>
            <Text style={styles.reviews}>({listing.reviews} reviews)</Text>
          </View>

          {/* Property Details */}
          <View style={styles.detailsContainer}>
            <View style={styles.detail}>
              <Text style={styles.detailIcon}>🛏️</Text>
              <Text style={styles.detailText}>{listing.bedrooms} bedrooms</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailIcon}>🚿</Text>
              <Text style={styles.detailText}>{listing.bathrooms} bathrooms</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailIcon}>👥</Text>
              <Text style={styles.detailText}>{listing.guests} guests</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{listing.description}</Text>
          </View>

          {/* Amenities */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Amenities</Text>
            <View style={styles.amenitiesContainer}>
              {listing.amenities.map((amenity, index) => (
                <View key={index} style={styles.amenityChip}>
                  <Text style={styles.amenityText}>{amenity}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Host Info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hosted by {listing.host.name}</Text>
            <View style={styles.hostInfo}>
              <View style={styles.hostAvatar}>
                <Text style={styles.hostInitial}>{listing.host.name.charAt(0)}</Text>
              </View>
              <View style={styles.hostDetails}>
                <Text style={styles.hostName}>{listing.host.name}</Text>
                {listing.host.verified && (
                  <Text style={styles.hostVerified}>✓ Verified Host</Text>
                )}
                <Text style={styles.hostStat}>Response rate: {listing.host.responseRate}%</Text>
                <Text style={styles.hostStat}>Response time: {listing.host.responseTime}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Booking Footer */}
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceAmount}>
            {listing.currency} {listing.price.toLocaleString()}
          </Text>
          <Text style={styles.pricePeriod}>/{listing.period}</Text>
        </View>
        <Pressable 
          style={styles.bookButton}
          onPress={() => router.push('/booking-flow')}
        >
          <Text style={styles.bookButtonText}>Reserve</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  mainImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#e0e0e0',
  },
  imageIndicators: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  activeIndicator: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  verifiedBadge: {
    backgroundColor: '#2C7A7B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  verifiedText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  reviews: {
    fontSize: 14,
    color: '#666',
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailIcon: {
    fontSize: 20,
  },
  detailText: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  amenityChip: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  amenityText: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  hostInfo: {
    flexDirection: 'row',
    gap: 12,
  },
  hostAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F97316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hostInitial: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  hostDetails: {
    flex: 1,
  },
  hostName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  hostVerified: {
    fontSize: 14,
    color: '#2C7A7B',
    marginBottom: 4,
  },
  hostStat: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  pricePeriod: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  bookButton: {
    backgroundColor: '#F97316',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
