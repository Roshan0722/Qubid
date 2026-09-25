import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhyQubid from "./pages/WhyQubid";
import Product from "./pages/Product";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Enquire from "./pages/Enquire";
import { useHashRoute } from "./hooks/useHashRoute";

const PAGES: Record<string, React.ComponentType> = {
  "/why-qubid": WhyQubid,
  "/product": Product,
  "/solutions": Solutions,
  "/resources": Resources,
  "/pricing": Pricing,
  "/sign-in": SignIn,
  "/sign-up": SignUp,
  "/enquire": Enquire,
};

export default function App() {
  const route = useHashRoute();
  const Page = PAGES[route] ?? Home;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Nav route={route} />
      <main id="top" key={route} className="page-in">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
