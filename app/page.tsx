import PageLoader from "@/component/PageLoader";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import About from "@/component/About";
import StatsBar from "@/component/StatsBar";
import Why from "@/component/Why";
import Courses from "@/component/Courses";
import Levels from "@/component/Levels";
import Method from "@/component/Method";
import Testimonials from "@/component/Testimonials";
import Gallery from "@/component/Gallery";
import Faq from "@/component/Faq";
import Blog from "@/component/Blog";
import Pricing from "@/component/Pricing";
import { RegisterProvider, RegisterSection } from "@/component/Register";
import Contact from "@/component/Contact";
import MapSection from "@/component/MapSection";
import Newsletter from "@/component/Newsletter";
import Footer from "@/component/Footer";
import { VideoProvider } from "@/component/VideoModal";

export default function Home() {
  return (
    <>
      <PageLoader />
      <VideoProvider>
        <RegisterProvider>
          <a href="#main" className="skip-link">
            Aller au contenu principal
          </a>
          <Header />
          <main id="main">
            <Hero />
            <StatsBar />
            <About />
            <Why />
            <Courses />
            <Levels />
            <Method />
            <Testimonials />
            <Gallery />
            <Faq />
            <Blog />
            <Pricing />
            <RegisterSection />
            <Contact />
            <MapSection />
            <Newsletter />
          </main>
          <Footer />
        </RegisterProvider>
      </VideoProvider>
    </>
  );
}
