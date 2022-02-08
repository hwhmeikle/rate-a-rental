import { Hero } from "~/components/Hero";
import { Footer } from "~/components/Footer";

export default function Index() {
  return (
    <div className="h-screen px-4 flex flex-col justify-between">
      <Hero />
      <Footer />
    </div>
  );
}
