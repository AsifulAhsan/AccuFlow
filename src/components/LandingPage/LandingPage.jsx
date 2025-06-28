import React from "react";
import Header from "./../Header/Header";
import Hero from "./../Hero/Hero";
import Banner from "./../Banner/Banner";
import FeatureSection from "./../FeatureSection/FeatureSection";
import CardSection from "./../CardSection/CardSection";
import IntegratesSection from "./../IntegratesSection/IntegratesSection";
import ComparisonSection from './../ComparisonSection/ComparisonSection';

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <FeatureSection />
      <CardSection />
      <IntegratesSection />
      <ComparisonSection/>
    </div>
  );
}

export default LandingPage;
