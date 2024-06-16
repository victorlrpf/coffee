import Link from "next/link";
import Carrosel from "./_components/carrosel";
import HeaderPrincipal from "./_components/header";
import ProductList from "./_components/product-list";
import Search from "./_components/search";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "./_components/ui/button";

export default function Home() {
  return (
    <>
    <header className="pt-6 px-5">
      <HeaderPrincipal/>
      <Search />
    </header>
    <main className="pt-6 ">
      <div className="px-5">
        <Carrosel/>
      </div>
      
      <div className="pt-6">
        <div className="flex justify-between px-5">
          <h2 className="text-lg font-semibold">Bebidas</h2>
          <Button
          variant="ghost"
          className="h-fit p-0 text-primary hover:bg-transparent"
          asChild
          >
            <Link href="/restaurants/recommended">
              Ver todos
              <ChevronRightIcon size={16} />
            </Link>          
          </Button>
        </div>
        <ProductList />
      </div>
      
      <div className="pt-6">
      <div className="flex justify-between px-5">
        <h2 className="text-lg font-semibold">Salgados</h2>
        <Button
          variant="ghost"
          className="h-fit p-0 text-primary hover:bg-transparent"
          asChild
          >
            <Link href="/restaurants/recommended">
              Ver todos
              <ChevronRightIcon size={16} />
            </Link>          
          </Button>
      </div>
        <ProductList />
      </div>
      
      <div className="pt-6">
        <div className="flex justify-between px-5">
          <h2 className="text-lg font-semibold">Doces</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
            asChild
            >
              <Link href="/restaurants/recommended">
                Ver todos
                <ChevronRightIcon size={16} />
              </Link>          
            </Button>
        </div>
        <ProductList />
      </div>
      
    </main>
    </>
  );
}
