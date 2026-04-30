import Head from 'expo-router/head';
import { ScrollView, View } from 'react-native';

import { Hero } from '@/components/landing/Hero';
import { SocialLinks } from '@/components/landing/SocialLinks';
import { Footer } from '@/components/landing/Footer';

export default function Index() {
  return (
    <>
      <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4N0D23ZN3R" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4N0D23ZN3R');
            `,
          }}
        />

        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Primary SEO */}
        <title>DashNomad | Daily Global Travel Shorts</title>
        <meta
          name="description"
          content="DashNomad explores the world in a blink. Catch daily high-energy travel shorts, hidden gems, and nomadic adventures from across the globe."
        />
        <meta
          name="keywords"
          content="DashNomad, Travel Shorts, YouTube Shorts Travel, Daily Travel Videos, Global Nomad, Adventure Travel, Travel Hacks, Ireland Travel"
        />
        <link rel="canonical" href="https://dashnomad.com/" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DashNomad | Daily Global Travel Shorts" />
        <meta
          property="og:description"
          content="DashNomad explores the world in a blink. Catch daily high-energy travel shorts, hidden gems, and nomadic adventures from across the globe."
        />
        <meta property="og:url" content="https://dashnomad.com/" />
        <meta property="og:site_name" content="DashNomad" />
        <meta property="og:image" content="https://dashnomad.com/og-image.jpg" />

        {/* Twitter/X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dashnomad_" />
        <meta name="twitter:title" content="DashNomad | Daily Global Travel Shorts" />
        <meta
          name="twitter:description"
          content="DashNomad explores the world in a blink. Catch daily high-energy travel shorts, hidden gems, and nomadic adventures from across the globe."
        />
        <meta name="twitter:image" content="https://dashnomad.com/og-image.jpg" />

        {/* Theme */}
        <meta name="theme-color" content="#0A0E1A" />
      </Head>

      <View style={{ flex: 1, backgroundColor: '#0A0E1A' }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Hero />
          <SocialLinks />
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}
