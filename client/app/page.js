import Head from "next/head";

import LikeButton from "./like-button";
import NavBar from "./navbar";
import HeroSection from "./hero-section";
import Partner from "./partners";
import Services from "./services.section";
import WhyChooseUS from "./why-choose-us.section";
import CaseStudies from "./case-studies-section"
import Testimonial from "./testimonial-section";
import Blog from "./blog-section"
import AboutUs from "./about-us-section";
import Inqury from "./inqury-section";
import Footer from "./footer"

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

import indexStyles from "./styles/index.css";

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {




  return (


    <div className={indexStyles.mainPageContainer}>

      
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        </Head>
      



      <NavBar />
      <HeroSection />
      <Partner />
      <Services />

      <WhyChooseUS />
      <CaseStudies />
      <Testimonial />
      <Blog />
      <AboutUs />
      <Inqury />
      {/* <Footer /> */}
    </div>

  );
}