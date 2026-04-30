import { Image, StyleSheet, Text, View } from 'react-native';
import { SocialButton } from '@/components/landing/SocialButton';

const logo = require('@/assets/images/DashNomadLogo.jpeg');

const SOCIAL_LINKS = [
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@DashNomad',
    url: 'https://www.youtube.com/@DashNomad',
    icon: '▶',
    gradient: ['#FF0000', '#CC0000'],
    bgColor: 'rgba(255, 0, 0, 0.1)',
    borderColor: 'rgba(255, 0, 0, 0.35)',
    accentColor: '#FF4444',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    handle: '@DashNomad',
    url: 'http://tiktok.com/@DashNomad',
    icon: '♪',
    bgColor: 'rgba(0, 230, 210, 0.08)',
    borderColor: 'rgba(0, 230, 210, 0.3)',
    accentColor: '#00E6D2',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@dashnomad',
    url: 'https://www.instagram.com/dashnomad',
    icon: '◎',
    bgColor: 'rgba(228, 64, 95, 0.1)',
    borderColor: 'rgba(228, 64, 95, 0.35)',
    accentColor: '#E4405F',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'DashNomad',
    url: 'https://www.facebook.com/DashNomadTravel/',
    icon: 'f',
    bgColor: 'rgba(24, 119, 242, 0.1)',
    borderColor: 'rgba(24, 119, 242, 0.35)',
    accentColor: '#1877F2',
  },
  {
    id: 'x-twitter',
    label: 'X (Twitter)',
    handle: '@dashnomad_',
    url: 'https://x.com/dashnomad_',
    icon: '𝕏',
    bgColor: 'rgba(255, 255, 255, 0.06)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    accentColor: '#E7E9EA',
  },
];

export function SocialLinks() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>Follow the Journey</Text>
      <View style={styles.divider} />

      <View style={styles.stack}>
        {SOCIAL_LINKS.map((link) => (
          <SocialButton key={link.id} {...link} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  sectionLabel: {
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '700',
    color: '#4A5A7A',
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 107, 0, 0.2)',
    marginBottom: 24,
  },
  stack: {
    gap: 12,
  },
});
