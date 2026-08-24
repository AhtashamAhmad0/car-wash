import PageHeader from "../components/PageHeader";
import HowItWorks from "../components/HowItWorks";
import CTABanner from "../components/CTABanner";

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader crumb="How It Works" title="Our Process" />
      <HowItWorks />
      <CTABanner />
    </>
  );
}
