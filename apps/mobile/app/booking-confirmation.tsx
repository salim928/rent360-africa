import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Stack, router } from 'expo-router';

export default function BookingConfirmationScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Booking Confirmed',
          headerStyle: { backgroundColor: '#F97316' },
          headerTintColor: '#fff',
          headerLeft: () => null, // Remove back button
        }} 
      />
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Success Icon */}
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>✓</Text>
          </View>

          <Text style={styles.title}>Booking Confirmed!</Text>
          <Text style={styles.subtitle}>
            Your reservation has been successfully confirmed.
          </Text>

          {/* Booking Reference */}
          <View style={styles.referenceContainer}>
            <Text style={styles.referenceLabel}>Booking Reference</Text>
            <Text style={styles.referenceNumber}>#RENT360-{Date.now().toString().slice(-6)}</Text>
          </View>

          {/* What's Next */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>What's Next?</Text>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📧</Text>
              <Text style={styles.infoText}>
                Check your email for booking confirmation and payment details
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>💬</Text>
              <Text style={styles.infoText}>
                The host will contact you shortly to finalize arrangements
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📱</Text>
              <Text style={styles.infoText}>
                You can view and manage your booking in the Bookings tab
              </Text>
            </View>
          </View>

          {/* Actions */}
          <View style={styles.actions}>
            <Pressable 
              style={styles.primaryButton}
              onPress={() => router.replace('/(tabs)/bookings')}
            >
              <Text style={styles.primaryButtonText}>View My Bookings</Text>
            </Pressable>
            
            <Pressable 
              style={styles.secondaryButton}
              onPress={() => router.replace('/(tabs)')}
            >
              <Text style={styles.secondaryButtonText}>Back to Home</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2C7A7B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  referenceContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 32,
    width: '100%',
  },
  referenceLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  referenceNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F97316',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 32,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  infoIcon: {
    fontSize: 24,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  actions: {
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#F97316',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  secondaryButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
});
