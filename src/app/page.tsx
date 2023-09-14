import Services from "@/components/services";
import Hero from "../components/hero";
import Promotion from "@/components/promotion";
import Catogery from "@/components/catogery";
import BestSelling from "@/components/bestSelling";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
<Hero/>
<Services/>
<Promotion/>
<Catogery/>
<BestSelling/>
    </main>
  )
}
