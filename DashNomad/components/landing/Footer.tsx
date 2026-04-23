import { Image, StyleSheet, Text, View } from 'react-native';

const logo = require('@/assets/images/DashNomadLogo.jpeg');

export function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.topDivider} />

      <View style={styles.logoRow}>
        <View style={styles.logoWrapper}>
          <Image source={logo} style={styles.logo} resizeMode="cover" />
        </View>
        <Text style={styles.brandText}>DashNomad</Text>
      </View>

      <Text style={styles.tagline}>The World in a Dash. Every Day.</Text>

      <Text style={styles.copyright}>© 2026 DashNomad. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  topDivider: {
    width: 60,
    height: 2,
    backgroundColor: '#FF6B00',
    borderRadius: 1,
    marginBottom: 24,
    opacity: 0.5,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  logoWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 0, 0.4)',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  brandText: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  tagline: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    color: '#4A5A7A',
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  copyright: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '400',
    color: '#2A3550',
    letterSpacing: 0.2,
  },
});
