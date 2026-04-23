import { Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

interface SocialButtonProps {
  id: string;
  label: string;
  handle: string;
  url: string;
  icon: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
}

export function SocialButton({
  label,
  handle,
  url,
  icon,
  bgColor,
  borderColor,
  accentColor,
}: SocialButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    if (Platform.OS === 'web') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      Linking.openURL(url);
    }
  };

  const isActive = hovered || pressed;

  return (
    <Pressable
      onPress={handlePress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      accessibilityRole="link"
      accessibilityLabel={`Follow DashNomad on ${label}`}
      style={[
        styles.button,
        {
          backgroundColor: isActive ? bgColor : 'rgba(19, 25, 58, 0.6)',
          borderColor: isActive ? accentColor : borderColor,
          transform: [{ scale: isActive ? 1.02 : 1 }],
          shadowColor: isActive ? accentColor : 'transparent',
          shadowOpacity: isActive ? 0.35 : 0,
          shadowRadius: isActive ? 16 : 0,
          shadowOffset: { width: 0, height: 4 },
          elevation: isActive ? 8 : 0,
        },
      ]}
    >
      {/* Icon badge */}
      <View
        style={[
          styles.iconBadge,
          {
            backgroundColor: isActive ? accentColor : 'rgba(255,255,255,0.07)',
            borderColor: isActive ? 'transparent' : borderColor,
          },
        ]}
      >
        <Text
          style={[
            styles.iconText,
            { color: isActive ? '#FFFFFF' : accentColor },
          ]}
        >
          {icon}
        </Text>
      </View>

      {/* Labels */}
      <View style={styles.textGroup}>
        <Text style={[styles.platformName, { color: isActive ? accentColor : '#FFFFFF' }]}>
          {label}
        </Text>
        <Text style={styles.handleText}>{handle}</Text>
      </View>

      {/* Arrow */}
      <Text style={[styles.arrow, { color: isActive ? accentColor : '#3A4A6A', opacity: isActive ? 1 : 0.6 }]}>
        →
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 14,
    // Web transition is handled via inline style — RN doesn't support CSS transitions,
    // but the scale/shadow change on hover gives a snappy feel.
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
  textGroup: {
    flex: 1,
    gap: 2,
  },
  platformName: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  handleText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    color: '#4A5A7A',
  },
  arrow: {
    fontSize: 18,
    fontWeight: '600',
  },
});
