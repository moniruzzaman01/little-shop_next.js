import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Sidebar from "@/components/Sidebar";

export default function CategoryLayout({ children }) {
  return (
    <div>
      <Banner bool={false} />
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <Sidebar />
        {children}
      </section>
      <GetInTouch />
      <Footer />
    </div>
  );
}
