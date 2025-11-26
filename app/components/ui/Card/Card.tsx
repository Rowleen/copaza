import { ReactElement } from "react";

import { Product } from "@/entities/Product";

interface CardProps {
  title: string;
  icon: ReactElement;
  value: Product;
  onClick: (value: Product) => void;
}

const Card = ({ title, icon, value, onClick }: CardProps) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <div
      className="bg-zinc-800 w-full h-60 rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-zinc-700 transition-colors"
      onClick={handleClick}
    >
      {icon}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default Card;
