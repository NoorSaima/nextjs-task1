import React from 'react';
import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>AI-Driven Tools for Modern Teams</h1>
          <p className={styles.heroDescription}>
            Build amazing products with our platform. Simple, elegant, and powerful tools designed for the future.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/login" className={styles.primaryButton}>Start Building</Link>
            <Link href="/about" className={styles.secondaryButton}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Built for Modern Product Teams</h2>
        <p className={styles.sectionSubtitle}>Everything you need to build and scale your products</p>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Project Milestones</h3>
            <p>Track progress across custom flows for your team. Find the right balance for users and security.</p>
          </div>
          
          <div className={styles.featureCard}>
            <h3>Team Views</h3>
            <p>Collaborate seamlessly with your team. Real-time updates and instant notifications.</p>
          </div>
          
          <div className={styles.featureCard}>
            <h3>Advanced Search</h3>
            <p>Find anything instantly with our powerful search engine. Filter and sort with ease.</p>
          </div>
          
          <div className={styles.featureCard}>
            <h3>Flexible Workflows</h3>
            <p>Customize workflows to match your team's unique processes and requirements.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
        <p className={styles.ctaDescription}>Join thousands of teams already building with our platform</p>
        <Link href="/login" className={styles.primaryButton}>Get Started Now</Link>
      </section>
    </div>
  );
}
