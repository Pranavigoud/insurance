import React from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import FeatureList from "../components/FeatureList";
import CoverageOptions from "../components/CoverageOptions";
import CustomerReview from "../components/CustomerReview";
import PolicyInformation from "../components/PolicyInformation";
import Footer from "../components/Footer";

export const Route = {
  path: "/",
  component: () => (
    <>
      <Hero />
      <InfoSection />
      <FeatureList />
      <CoverageOptions />
      <CustomerReview />
      <PolicyInformation />
    </>
  ),
};
