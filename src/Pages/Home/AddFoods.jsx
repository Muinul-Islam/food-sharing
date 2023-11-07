import Swal from "sweetalert2";

const AddFoods = () => {
  const handleAddFoods = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const date = form.date.value;
    const notes = form.notes.value;
    const status = form.status.value;

    const data = {
      name,
      img,
      quantity,
      location,
      date,
      notes,
      status,
    };
    console.log(data);

    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Successfully Added The Food",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <div className="bg-green-600 text-white m-10 rounded-xl p-4 md:p-24">
        <h1 className="text-2xl md:text-4xl text-black font-bold ">
          Add A Food Here
        </h1>

        <form onSubmit={handleAddFoods}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-black text-xl">Food Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Food Name"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-black text-xl">
                  Food Image
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="img"
                  placeholder="Food Image"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-black text-xl">
                  Food Quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Food Quantity"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-xl text-black">
                  Pick Up Location
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="location"
                  placeholder="Pick Up Location"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl">
                  Expired In
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="date"
                  placeholder="Hours"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>

            <div className="form-control w-3/4 mx-auto">
              <label className="label">
                <span className="label-text text-xl text-black">
                  Additional Notes
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="notes"
                  placeholder="Additional Notes"
                  className="input input-bordered w-full text-black"
                />
              </label>
            </div>
          </div>
          <div className="form-control mx-auto mb-4">
            <label className="label">
              <span className="label-text text-black text-xl">
                Foods Status
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="status"
                placeholder="Foods Status"
                className="input input-bordered w-full text-black"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add Food"
            className="btn btn-block mb-8 bg-red-600 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddFoods;
