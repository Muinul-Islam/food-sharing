import { useLoaderData } from "react-router-dom";
("use client");

const ManageFoods = () => {
  const allFoods = useLoaderData();
  console.log(allFoods);

  return (
    <div className="my-12">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Food Name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Expires In
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allFoods.map((food) => {
              <tr
                key={food.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {food.name}
                </th>
                <td className="px-6 py-4 w-8 rounded-full">{food.img}</td>
                <td className="px-6 py-4">{food.date}Hours</td>
                <td className="px-6 py-4">{food.quantity}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFoods;
