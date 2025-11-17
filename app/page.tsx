import { Circle, BadgeEuro } from "lucide-react";
import Card from "@/components/ui/Card/Card";

export default function Home() {
  return (
    <section className="min-h-screen w-[1024px] flex items-center justify-center">
      <Card title="Copa" icon={<Circle />} onClick={() => {}} />
      <Card title="Card" icon={<Circle />} onClick={() => {}} />
    </section>
  );
}
