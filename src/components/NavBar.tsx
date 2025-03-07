import Button from "./Button";
import { Link } from "react-router";
import { FaRobot } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className=" px-4 md:px-8 py-4 bg-white shadow flex justify-between items-center">
      <Link to={"/"} className="flex items-center gap-2">
        <FaRobot className="text-blue-600 text-2xl" />
        <h1 className="font-bold text-3xl cursor-pointer text-gray-800">
          RoboMaze
        </h1>
      </Link>
      <div className="flex gap-3">
        <Button
          text="GitHub"
          href="https://github.com/AghilesTMA/robomaze"
          icon="Src Code"
          className="bg-gray-200 text-gray-700 hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default NavBar;
