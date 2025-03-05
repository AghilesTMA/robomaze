import { FaGithub } from "react-icons/fa";
import { VscRobot } from "react-icons/vsc";
import { TbTargetArrow } from "react-icons/tb";

const Icon = ({name,className}:{name:string,className?:string}) => {
  switch (name) {
    case "github":
      return <FaGithub className={className} />
    case "robot":
      return <VscRobot className={className} />
    case "target":
      return <TbTargetArrow className={className} />
    default:
      return <></>
  }
}

export default Icon