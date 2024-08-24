import NavBar from "../../Components/NavBar/NavBar";
import { Header, Intro } from "./HomeStyle";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header>Welcome!</Header>
      <Intro>
        My name is Benjie Friedman. It&apos;s nice to meet you! Please accept my
        application for the position of <b>Junior Software Engineer</b> with
        Roulettech Inc. I am a big fan of birding and rock climbing, so have
        created API endpoints for birds and rock climbs. Please use the icons
        above to navigate to and from the relevant data tables. Thank you for
        taking the time to check out my submission - I really appreaciate it!
      </Intro>
    </>
  );
};

export default Home;
