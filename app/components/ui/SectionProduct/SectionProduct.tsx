import { ReactElement } from "react";

import Card from "@/components/ui/Card/Card";

import { Product } from "@/entities/Product";

interface SectionProductProps {
  title: string;
  products: Product[];
  onClick: (product: Product) => void;
  renderIcon: (product: Product) => ReactElement;
}

const SectionProduct = ({
  title,
  products,
  onClick,
  renderIcon,
}: SectionProductProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-4 gap-8 items-center justify-center">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            icon={renderIcon(product)}
            value={product}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionProduct;
