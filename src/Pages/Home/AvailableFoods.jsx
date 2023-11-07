import { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  console.log(foods);

  return (
    <div>
      <div>
        <h1 className="text-center my-10 text-3xl font-bold">
          Available Foods
        </h1>
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
                  <div className="card-actions justify-between items-center">
                    <div className="text-xl ">{food.donator}</div>
                    <div className="w-20">
                      <img
                        className="rounded-full"
                        src={food.donatorImg}
                        alt=""
                      />
                    </div>
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
                <Link to={`/foods/${food._id}`} className="p-4">
                  <button className="bg-green-600 py-2 rounded-xl text-white w-full ">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-10">
          <button className="btn bg-green-600 text-white hover:text-black">
            See All Foods
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
