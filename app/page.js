import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <GetInTouch />
      <Footer />
    </div>
  );
}
