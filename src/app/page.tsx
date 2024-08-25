import { Hero } from "./_components/Hero";
import News from "./_components/News";
import Reviews from "./_components/Reviews";
import { Services } from "./_components/Services";
import { CustomersSliderBar } from "./_components/CustomersSliderBar";
import HeaderSpacer from "./_global_components/HeaderSpacer";

export default function Home() {
  return (
    <>
      <HeaderSpacer />
      <Hero />
      <CustomersSliderBar />
      <Services />
      <News />
      <Reviews />
    </>

  );
}
