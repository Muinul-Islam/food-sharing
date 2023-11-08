import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import Question from "./Question";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <Slider></Slider>
      <Question></Question>
    </div>
  );
};

export default Home;
