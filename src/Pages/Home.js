import Header from "./../Components/Header";
import Footer from "./../Components/Footer";
import Banner from "./../Components/Banner";
import MarvelEvent from "./../Components/MarvelEvent";

import "./Pages.scss";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <Banner />
      <MarvelEvent />
      <Footer />
    </div>
  );
};

export default Home;
