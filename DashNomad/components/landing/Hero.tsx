import { Image, StyleSheet, Text, View } from 'react-native';

const logo = require('@/assets/images/DashNomadLogo.jpeg');
const banner = require('@/assets/images/DashNomadBanner.jpeg');

export function Hero() {
  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.bannerWrapper}>
        <Image source={banner} style={styles.banner} resizeMode="cover" />
        {/* Gradient overlay */}
        <View style={styles.bannerOverlay} />
      </View>

      {/* Logo + Text */}
      <View style={styles.profileArea}>
        <View style={styles.logoRing}>
          <Image source={logo} style={styles.logo} resizeMode="cover" />
        </View>

        <Text style={styles.brandName}>DashNomad</Text>
        <Text style={styles.tagline}>The World in a Dash. Every Day.</Text>

        <View style={styles.pillRow}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>🌍 Travel</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>🎬 Shorts</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>✈️ Daily</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  bannerWrapper: {
    width: '100%',
    height: 200,
    position: 'relative',
    overflow: 'hidden',
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 14, 26, 0.55)',
  },
  profileArea: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 32,
    marginTop: -56,
  },
  logoRing: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 3,
    borderColor: '#FF6B00',
    overflow: 'hidden',
    backgroundColor: '#13193A',
    shadowColor: '#FF6B00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 12,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  brandName: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    marginTop: 16,
    letterSpacing: -0.5,
    textShadowColor: 'rgba(255, 107, 0, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 12,
  },
  tagline: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    color: '#A0AFCC',
    marginTop: 6,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  pillRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pill: {
    backgroundColor: 'rgba(255, 107, 0, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 0, 0.3)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  pillText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    color: '#FF8C38',
  },
});
