import Button from "./Button";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className=" px-8 py-4 bg-white shadow flex justify-between items-center ">
      <h1 className=" font-bold text-3xl cursor-pointer">
        <Link to={"/"}>RoboMaze</Link>
      </h1>
      <Button
        text="Src Code"
        href="https://github.com/AghilesTMA/robomaze"
        icon="github"
      />
    </div>
  );
};

export default NavBar;
