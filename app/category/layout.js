import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";

export default function CategoryLayout({ children }) {
  return (
    <div>
      <Banner />
      {children}
      <GetInTouch />
      <Footer />
    </div>
  );
}
