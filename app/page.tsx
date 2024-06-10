import Carrosel from "./_components/carrosel";
import HeaderPrincipal from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <>
    <header className="pt-6 px-5">
      <HeaderPrincipal/>
      <Search />
    </header>
    <main className="pt-6 px-5">
      <Carrosel/>
    </main>
    </>
  );
}
