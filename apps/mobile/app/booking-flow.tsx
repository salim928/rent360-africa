import { View, Text, ScrollView, Pressable, TextInput, StyleSheet } from 'react-native';
import { Stack, router } from 'expo-router';
import { useState } from 'react';

export default function BookingFlowScreen() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const listing = {
    title: 'Modern 2BR Apartment in East Legon',
    price: 2500,
    currency: 'GHS',
  };

  const calculateTotal = () => {
    // Simple calculation - should be based on actual dates
    const nights = 30; // Assume 1 month
    const subtotal = listing.price;
    const serviceFee = listing.price * 0.1;
    const total = subtotal + serviceFee;
    return { subtotal, serviceFee, total, nights };
  };

  const totals = calculateTotal();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit booking
      router.push('/booking-confirmation');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.back();
    }
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Complete Booking',
          headerStyle: { backgroundColor: '#F97316' },
          headerTintColor: '#fff',
        }} 
      />
      <ScrollView style={styles.container}>
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${(step / 3) * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>Step {step} of 3</Text>
        </View>

        {/* Step 1: Dates & Guests */}
        {step === 1 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Select Dates & Guests</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Check-in Date</Text>
              <TextInput
                style={styles.input}
                placeholder="mm/dd/yyyy"
                value={bookingData.checkIn}
                onChangeText={(text) => setBookingData({ ...bookingData, checkIn: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Check-out Date</Text>
              <TextInput
                style={styles.input}
                placeholder="mm/dd/yyyy"
                value={bookingData.checkOut}
                onChangeText={(text) => setBookingData({ ...bookingData, checkOut: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Number of Guests</Text>
              <View style={styles.guestSelector}>
                <Pressable 
                  style={styles.guestButton}
                  onPress={() => {
                    const current = parseInt(bookingData.guests) || 1;
                    if (current > 1) {
                      setBookingData({ ...bookingData, guests: String(current - 1) });
                    }
                  }}
                >
                  <Text style={styles.guestButtonText}>-</Text>
                </Pressable>
                <Text style={styles.guestCount}>{bookingData.guests}</Text>
                <Pressable 
                  style={styles.guestButton}
                  onPress={() => {
                    const current = parseInt(bookingData.guests) || 1;
                    setBookingData({ ...bookingData, guests: String(current + 1) });
                  }}
                >
                  <Text style={styles.guestButtonText}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}

        {/* Step 2: Personal Info */}
        {step === 2 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Your Information</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="John"
                value={bookingData.firstName}
                onChangeText={(text) => setBookingData({ ...bookingData, firstName: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Doe"
                value={bookingData.lastName}
                onChangeText={(text) => setBookingData({ ...bookingData, lastName: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="your@email.com"
                keyboardType="email-address"
                value={bookingData.email}
                onChangeText={(text) => setBookingData({ ...bookingData, email: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="+233 XX XXX XXXX"
                keyboardType="phone-pad"
                value={bookingData.phone}
                onChangeText={(text) => setBookingData({ ...bookingData, phone: text })}
              />
            </View>
          </View>
        )}

        {/* Step 3: Payment & Confirmation */}
        {step === 3 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Payment & Confirmation</Text>
            
            {/* Booking Summary */}
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryTitle}>Booking Summary</Text>
              <Text style={styles.listingTitle}>{listing.title}</Text>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Dates:</Text>
                <Text style={styles.summaryValue}>
                  {bookingData.checkIn} - {bookingData.checkOut}
                </Text>
              </View>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Guests:</Text>
                <Text style={styles.summaryValue}>{bookingData.guests}</Text>
              </View>
            </View>

            {/* Price Breakdown */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceTitle}>Price Details</Text>
              
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>
                  {listing.currency} {listing.price} x {totals.nights} nights
                </Text>
                <Text style={styles.priceValue}>
                  {listing.currency} {totals.subtotal.toLocaleString()}
                </Text>
              </View>
              
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>Service fee</Text>
                <Text style={styles.priceValue}>
                  {listing.currency} {totals.serviceFee.toLocaleString()}
                </Text>
              </View>
              
              <View style={[styles.priceRow, styles.totalRow]}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>
                  {listing.currency} {totals.total.toLocaleString()}
                </Text>
              </View>
            </View>

            {/* Payment Method */}
            <View style={styles.paymentContainer}>
              <Text style={styles.paymentTitle}>Payment Method</Text>
              
              <Pressable style={styles.paymentOption}>
                <Text style={styles.paymentOptionText}>💳 Mobile Money</Text>
                <Text style={styles.paymentRadio}>○</Text>
              </Pressable>
              
              <Pressable style={styles.paymentOption}>
                <Text style={styles.paymentOptionText}>🏦 Bank Transfer</Text>
                <Text style={styles.paymentRadio}>○</Text>
              </Pressable>
              
              <Pressable style={styles.paymentOption}>
                <Text style={styles.paymentOptionText}>💰 Pay on Arrival</Text>
                <Text style={styles.paymentRadio}>○</Text>
              </Pressable>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Navigation Footer */}
      <View style={styles.footer}>
        <Pressable style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
        <Pressable style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {step === 3 ? 'Confirm & Pay' : 'Next'}
          </Text>
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
  progressContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginBottom: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#F97316',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  stepContainer: {
    padding: 16,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  guestSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  guestButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F97316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guestButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  guestCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    minWidth: 40,
    textAlign: 'center',
  },
  summaryContainer: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  listingTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '500',
  },
  priceContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 16,
    marginBottom: 20,
  },
  priceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  priceValue: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  totalRow: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  paymentContainer: {
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 12,
  },
  paymentOptionText: {
    fontSize: 16,
    color: '#1a1a1a',
  },
  paymentRadio: {
    fontSize: 20,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  backButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#F97316',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
