import Navbar from "../../components201/Navbar/Navbar";
import Footer from "../../components201/Footer/Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;