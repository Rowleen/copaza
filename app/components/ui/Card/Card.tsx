import { FC, ReactElement, MouseEvent } from "react";

import { ProductEnum } from "@/entities/Product";

interface CardProps {
  title: string;
  icon: ReactElement;
  dataProductType: ProductEnum;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const Card: FC<CardProps> = ({ title, icon, onClick, dataProductType }) => {
  return (
    <div
      className="bg-zinc-800 w-full h-60 rounded-lg p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-zinc-700 transition-colors"
      onClick={onClick}
      data-product-type={dataProductType}
    >
      {icon}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default Card;
