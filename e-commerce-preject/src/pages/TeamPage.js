import Footer from "../components/Footer";
import Header from "../components/Header";
import MeetOurTeamMain from "../components/TeamPageComp/MeetOurTeamMain";
import TeamCta from "../components/TeamPageComp/TeamCta";
import TeamHeader from "../components/TeamPageComp/TeamHeader";
import TeamHero from "../components/TeamPageComp/TeamHero";

const TeamPage = () => {
  return (
    <>
      <Header />
      <TeamHeader />
      <TeamHero />
      <MeetOurTeamMain />
      <TeamCta />
      <Footer />
    </>
  );
};

export default TeamPage;
