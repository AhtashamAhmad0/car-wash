import PageHeader from "../components/PageHeader";
import Packages from "../components/Packages";
import CTABanner from "../components/CTABanner";

export default function PackagesPage() {
  return (
    <>
      <PageHeader crumb="Packages" title="Packages" />
      <Packages />
      <CTABanner />
    </>
  );
}
