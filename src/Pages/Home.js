import Header from "./../Components/Header";
import Footer from "./../Components/Footer";
import Banner from "./../Components/Banner";

import "./Pages.scss";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
