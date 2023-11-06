import { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  console.log(foods);

  return (
    <div>
      <h1 className="text-center my-10 text-3xl font-bold">Featured Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8 my-8">
        {foods.map((food) => (
          <div key={food._id}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-80" src={food.img} alt="Food" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{food.name}</h2>
                <p>{food.notes}</p>
                <div className="card-actions justify-between">
                  <div className="w-32 rounded-full">{food.donatorImg}</div>
                  <div className="badge badge-outline p-3">{food.donator}</div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center items-center gap-2">
                    <AiOutlineClockCircle></AiOutlineClockCircle>
                    <p>{food.expires}Hours</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <BsPeople></BsPeople>
                    <p>{food.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CiLocationOn></CiLocationOn>
                  <p>{food.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
