import AboutStats from "../components/AboutPageComp/AboutStats";
import ClientAbout from "../components/AboutPageComp/ClientAbout";
import HeaderPage from "../components/AboutPageComp/HeaderPage";
import MeetOurTeam from "../components/AboutPageComp/MeetOurTeam";
import VideoPage from "../components/AboutPageComp/VideoPage";
import Footer from "../components/Footer";

import Header from "../components/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <HeaderPage />
      <AboutStats />
      <VideoPage />
      <MeetOurTeam />
      <ClientAbout />
      <Footer />
    </>
  );
};

export default AboutPage;
