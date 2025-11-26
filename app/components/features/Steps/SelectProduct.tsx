import { FC } from "react";
import { Beer, GlassWater, Martini, TestTube } from "lucide-react";

import Card from "@/components/ui/Card/Card";

import { ProductEnum } from "@/entities/Product";

interface SelectProductProps {
  onSelectProduct: (product: ProductEnum) => void;
}

const SelectProduct: FC<SelectProductProps> = ({ onSelectProduct }) => {
  const handleSelectProduct = (event: React.MouseEvent<HTMLDivElement>) => {
    const productType = event.currentTarget.dataset.productType as ProductEnum;

    onSelectProduct(productType);
  };

  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-2 gap-8 items-center justify-center">
        <Card
          title="Copa"
          icon={<Martini className="w-20 h-20" />}
          onClick={handleSelectProduct}
          dataProductType={ProductEnum.COPA}
        />

        <Card
          title="Cerveza"
          icon={<Beer className="w-20 h-20" />}
          onClick={handleSelectProduct}
          dataProductType={ProductEnum.CERVEZA}
        />

        <Card
          title="Refresco / Agua"
          icon={<GlassWater className="w-20 h-20" />}
          onClick={handleSelectProduct}
          dataProductType={ProductEnum.REFRESCO}
        />

        <Card
          title="Chupito"
          icon={<TestTube className="w-20 h-20" />}
          onClick={handleSelectProduct}
          dataProductType={ProductEnum.CHUPITO}
        />
      </div>
    </section>
  );
};

export default SelectProduct;
