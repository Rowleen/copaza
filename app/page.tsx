"use client";

import { useState } from "react";
import {
  Beer as BeerIcon,
  GlassWater,
  Martini,
  TestTube,
  ChevronLeft,
} from "lucide-react";

import SectionProduct from "@/components/ui/SectionProduct/SectionProduct";
import Card from "@/components/ui/Card/Card";

import {
  ProductEnum,
  Product,
  Drink,
  Shot,
  Soda,
  Beer,
  Other,
  SubTypeProduct,
} from "@/entities/Product";
import { AzAccounting } from "@/types/AzAccounting";

import productsData from "@/data/products.json";
import drinksData from "@/data/drinks.json";
import shotsData from "@/data/shots.json";
import sodasData from "@/data/sodas.json";
import beersData from "@/data/beers.json";

enum StepEnum {
  SELECT_PRODUCT = "SELECT_PRODUCT",
  SELECT_DRINK = "SELECT_DRINK",
  SELECT_SODA = "SELECT_SODA",
  SELECT_BEER = "SELECT_BEER",
  SELECT_SHOT = "SELECT_SHOT",
  SELECT_PAYMENT = "SELECT_PAYMENT",
  ADD_PRODUCT = "ADD_PRODUCT",
}

export default function Home() {
  const [step, setStep] = useState<StepEnum>(StepEnum.SELECT_PRODUCT);
  const [product, setProduct] = useState<Product | null>(null);
  const [drink, setDrink] = useState<Product | null>(null);
  const [soda, setSoda] = useState<Product | null>(null);
  const [beer, setBeer] = useState<Product | null>(null);
  const [shot, setShot] = useState<Product | null>(null);
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

  const handleBack = () => {
    if (step === StepEnum.SELECT_DRINK) {
      setStep(StepEnum.SELECT_PRODUCT);
    }

    if (
      step === StepEnum.SELECT_SODA &&
      (product?.type === SubTypeProduct.RUM ||
        product?.type === SubTypeProduct.GIN ||
        product?.type === SubTypeProduct.WHISKEY ||
        product?.type === SubTypeProduct.VODKA)
    ) {
      setStep(StepEnum.SELECT_DRINK);
    } else {
      setStep(StepEnum.SELECT_PRODUCT);
    }

    if (step === StepEnum.SELECT_SHOT || step === StepEnum.SELECT_BEER) {
      setStep(StepEnum.SELECT_PRODUCT);
    }
  };

  const handleSetStepByProductType = (value: Product) => {
    setProduct(value);

    if (value.type === ProductEnum.DRINK) {
      setStep(StepEnum.SELECT_DRINK);
    }

    if (
      value.type === SubTypeProduct.RUM ||
      value.type === SubTypeProduct.GIN ||
      value.type === SubTypeProduct.WHISKEY ||
      value.type === SubTypeProduct.VODKA
    ) {
      setStep(StepEnum.SELECT_SODA);
    }

    if (value.type === ProductEnum.SODA) {
      setStep(StepEnum.SELECT_SODA);
    }

    if (value.type === ProductEnum.BEER) {
      setStep(StepEnum.SELECT_BEER);
    }

    if (value.type === ProductEnum.SHOT) {
      setStep(StepEnum.SELECT_SHOT);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-16">
      <header className="w-full grid grid-cols-3 items-center">
        <div>
          <ChevronLeft className="w-10 h-10" onClick={handleBack} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center">CopAZo</h1>
        </div>
      </header>

      <section className="w-full h-full">
        {step === StepEnum.SELECT_PRODUCT && (
          <div className="grid grid-cols-2 gap-8 items-center justify-center">
            {productsData.map((product) => (
              <Card
                key={product.id}
                title={product.name}
                icon={renderIcon(product as Product)}
                value={product as Product}
                onClick={handleSetStepByProductType}
              />
            ))}
          </div>
        )}

        {step === StepEnum.SELECT_DRINK && (
          <>
            <SectionProduct
              title="Rum"
              products={drinksData.rum as Drink[]}
              onClick={handleSetStepByProductType}
              renderIcon={renderIcon}
            />

            <SectionProduct
              title="Gin"
              products={drinksData.gin as Drink[]}
              onClick={handleSetStepByProductType}
              renderIcon={renderIcon}
            />

            <SectionProduct
              title="Whiskey"
              products={drinksData.whiskey as Drink[]}
              onClick={handleSetStepByProductType}
              renderIcon={renderIcon}
            />

            <SectionProduct
              title="Vodka"
              products={drinksData.vodka as Drink[]}
              onClick={handleSetStepByProductType}
              renderIcon={renderIcon}
            />
          </>
        )}

        {step === StepEnum.SELECT_SODA && (
          <SectionProduct
            title="Soda"
            products={sodasData as Soda[]}
            onClick={handleSetStepByProductType}
            renderIcon={renderIcon}
          />
        )}

        {step === StepEnum.SELECT_BEER && (
          <SectionProduct
            title="Beer"
            products={beersData as Beer[]}
            onClick={handleSetStepByProductType}
            renderIcon={renderIcon}
          />
        )}

        {step === StepEnum.SELECT_SHOT && (
          <SectionProduct
            title="Shot"
            products={shotsData as Shot[]}
            onClick={handleSetStepByProductType}
            renderIcon={renderIcon}
          />
        )}
      </section>
    </div>
  );
}
