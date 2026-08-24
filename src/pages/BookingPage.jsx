import PageHeader from "../components/PageHeader";
import Booking from "../components/Booking";

export default function BookingPage() {
  return (
    <>
      <PageHeader crumb="Booking" title="Reserve Your Bay" />
      <Booking />
    </>
  );
}
