import { useLoaderData } from "react-router-dom";

const Food = () => {
  const food = useLoaderData();
  console.log(food);
  const { name, img, quantity, expires } = food;

  const expirationDays = Math.floor(expires / 24);

  return (
    <div>
      <h1 className="text-center my-10 text-3xl font-bold">
        Food Details Are Here
      </h1>
      <div className="card card-compact m-4 bg-base-100 shadow-xl">
        <figure>
          <img className="rounded-xl" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-semibold">{name}</h2>
          <p className="card-title">{quantity} People Can Have The Meal.</p>
          <p className="text-xl">
            {expirationDays} {expirationDays === 1 ? "day" : "days"} to expire
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-green-600 text-white hover:text-black btn-block my-3">
              Request For Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
