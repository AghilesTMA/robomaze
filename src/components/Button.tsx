import Icon from "./Icon";

const Button = ({
  text,
  icon,
  action,
  className,
  href,
}: {
  text: string;
  icon?: string;
  action?: () => void;
  className?: string;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className={` flex cursor-pointer items-center gap-1 justify-center border shadow rounded hover:bg-slate-200 transition duration-100 px-4 py-2 active:scale-95 ${className}`}
      onClick={action}
      target="_blank"
    >
      {icon && <Icon name={icon} className=" text-xl" />}
      {text}
    </a>
  );
};

export default Button;
