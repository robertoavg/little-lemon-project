import CallToAction from "../../components/CallToAction/CallToAction";
import Specials from "../../components/Specials/Specials";
import CustomersSay from "../../components/CustomersSay/CustomersSay";
import About from "../../components/About/About";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <CallToAction />
      <Specials />
      <CustomersSay />
      <About />
    </div>
  );
}
