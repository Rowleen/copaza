import { FC } from "react";
import { Beer, GlassWater, Martini } from "lucide-react";

import Card from "@/components/ui/Card/Card";

import { ProductEnum, Product } from "@/entities/Product";

interface SelectProductProps {
  products: Product[];
  onSelectProductType: (product: ProductEnum) => void;
}

const SelectProduct: FC<SelectProductProps> = ({
  products,
  onSelectProductType,
}) => {
  const handleSelectProduct = (event: React.MouseEvent<HTMLDivElement>) => {
    const productType = event.currentTarget.dataset.productType as ProductEnum;

    onSelectProductType(productType);
  };

  const renderIcon = (product: Product) => {
    switch (product.type) {
      case ProductEnum.DRINK:
        return <Martini className="w-20 h-20" />;
      case ProductEnum.SHOT:
        return <Beer className="w-20 h-20" />;
      case ProductEnum.SODA:
        return <GlassWater className="w-20 h-20" />;
      case ProductEnum.BEER:
        return <Beer className="w-20 h-20" />;
      default:
        return <Martini className="w-20 h-20" />;
    }
  };

  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-2 gap-8 items-center justify-center">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            icon={renderIcon(product)}
            onClick={handleSelectProduct}
            dataProductType={product.type}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectProduct;
