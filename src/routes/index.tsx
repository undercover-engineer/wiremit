import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/header";
import HeroSection from "../components/hero";
import { Adverts } from "../components/adverts";
import Footer from "../components/footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Adverts />
      <Footer />
    </div>
  );
}
