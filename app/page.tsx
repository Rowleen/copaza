"use client";

import { useState } from "react";
import { Beer as BeerIcon, GlassWater, Martini, TestTube } from "lucide-react";

import SectionProduct from "@/components/ui/SectionProduct/SectionProduct";
import Card from "@/components/ui/Card/Card";

import { ProductEnum, Product } from "@/entities/Product";
import { AzAccounting } from "@/types/AzAccounting";

import productsData from "@/data/products.json";
import drinksData from "@/data/drinks.json";

enum StepEnum {
  SELECT_PRODUCT = "SELECT_PRODUCT",
  SELECT_DRINK = "SELECT_DRINK",
  SELECT_SODE = "SELECT_SODE",
  SELECT_PAYMENT = "SELECT_PAYMENT",
  ADD_PRODUCT = "ADD_PRODUCT",
}

export default function Home() {
  const [step, setStep] = useState<StepEnum>(StepEnum.SELECT_PRODUCT);
  const [product, setProduct] = useState<Product | null>(null);
  const [drink, setDrink] = useState<Product | null>(null);
  const [soda, setSoda] = useState<Product | null>(null);
  const [beer, setBeer] = useState<Product | null>(null);
  const [azAccounting, setAzAccounting] = useState<AzAccounting | null>(null);

  const renderIcon = (product: Product) => {
    switch (product.type) {
      case ProductEnum.DRINK:
        return <Martini className="w-20 h-20" />;
      case ProductEnum.SHOT:
        return <TestTube className="w-20 h-20" />;
      case ProductEnum.SODA:
        return <GlassWater className="w-20 h-20" />;
      case ProductEnum.BEER:
        return <BeerIcon className="w-20 h-20" />;
      default:
        return <Martini className="w-20 h-20" />;
    }
  };

  const handleProductTypeClick = (value: Product) => {
    setProduct(value);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-16">
      <h1 className="text-4xl font-bold text-center">Selecciona producto</h1>

      <section className="w-full h-full">
        {!product && (
          <div className="grid grid-cols-2 gap-8 items-center justify-center">
            {productsData.map((product) => (
              <Card
                key={product.id}
                title={product.name}
                icon={renderIcon(product as Product)}
                value={product as Product}
                onClick={handleProductTypeClick}
              />
            ))}
          </div>
        )}

        {product && product.type === ProductEnum.DRINK && (
          <>
            <SectionProduct
              title="Rum"
              products={drinksData.rum as Product[]}
              onClick={handleProductTypeClick}
              renderIcon={renderIcon}
            />

            <SectionProduct
              title="Gin"
              products={drinksData.gin as Product[]}
              onClick={handleProductTypeClick}
              renderIcon={renderIcon}
            />

            <SectionProduct
              title="Whiskey"
              products={drinksData.whiskey as Product[]}
              onClick={handleProductTypeClick}
              renderIcon={renderIcon}
            />

            <SectionProduct
              title="Vodka"
              products={drinksData.vodka as Product[]}
              onClick={handleProductTypeClick}
              renderIcon={renderIcon}
            />
          </>
        )}
      </section>
    </div>
  );
}
