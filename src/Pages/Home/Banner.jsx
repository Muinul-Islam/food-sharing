import { Link } from "react-router-dom";
import banner from "../../assets/img/banner1.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen rounded-xl"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to the Share<span className="text-red-600">Food</span>.{" "}
            </h1>
            <p className="mb-5">
              Welcome to our community-driven Food Sharing and Surplus Reduction
              Platform! Join us in the mission to share food, reduce waste, and
              strengthen our local communities through acts of generosity and
              sustainability.
            </p>
            <Link
              to="/availableFoods"
              className="btn bg-green-700 text-white border-none"
            >
              See Available Foods
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
