import { FC, ReactElement } from "react";

interface CardProps {
  title: string;
  icon: ReactElement;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ title, icon, onClick }) => {
  return (
    <div
      className="bg-zinc-800 rounded-lg p-4 flex items-center gap-2 cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default Card;
