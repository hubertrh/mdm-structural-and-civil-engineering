import AboutUs from "../components/organisms/AboutUs";
import ContactUs from "../components/organisms/ContactUs";
import Hero from "../components/organisms/Hero";
import Projects from "../components/organisms/Projects";
import Services from "../components/organisms/Services";
import Welcome from "../components/organisms/Welcome";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <AboutUs />
      <Projects />
      <ContactUs />
    </>
  );
}
