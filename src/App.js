import "./App.css";
import DownloadHero from "./components/DownloadHero/DownloadHero";
import Solution from "./components/FeatureHero/Feature";
import Footer from "./components/Footer/Footer";
import FormHero from "./components/FormHero/FormHero";
import Hero from "./components/Hero/Hero";
import InfoHero from "./components/InfoHero/InfoHero";
import Navbar from "./components/Navbar/Navbar";
import PeopleHero from "./components/PeopleHero/PeopleHero";
import FAQ from "./components/FAQs/FAQ";

function App() {

  return (
    <div className="japa-homepage">
      <div className="japa-container" id="section0">
        <Navbar />
        <Hero />
        <InfoHero />
        <Solution />
        {/* <PeopleHero />
        <FormHero />  */}
        <br />
        <FAQ/>
        <DownloadHero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
