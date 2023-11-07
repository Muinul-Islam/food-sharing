import error from "../../assets/img/404.jpg";
import NavBar from "../../Shared/NavBar";
const Error = () => {
  return (
    <div>
      <NavBar></NavBar>
      <img className="w-3/4 mx-auto" src={error} alt="" />
    </div>
  );
};

export default Error;
