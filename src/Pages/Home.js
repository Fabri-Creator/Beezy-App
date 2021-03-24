import Header from "./../Components/Header";
import Footer from "./../Components/Footer";
import Banner from "./../Components/Banner";
import MarvelEvent from "./../Components/MarvelEvent";
import Characters from "./../Components/Characters";

import "./Pages.scss";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <Banner />
      <MarvelEvent />
      <Characters />
      <Footer />
    </div>
  );
};

export default Home;
