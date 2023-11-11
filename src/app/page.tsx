import AboutUs from "../components/home/about/AboutUs";
import ContactUs from "../components/home/contact/ContactUs";
import Hero from "../components/home/hero/Hero";
import Projects from "../components/home/projects/Projects";
import Services from "../components/home/services/Services";
import Welcome from "../components/home/welcome/Welcome";

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
