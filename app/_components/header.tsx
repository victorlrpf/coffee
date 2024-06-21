import { BoltIcon, HomeIcon, MenuIcon, MicIcon, PersonStandingIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import Link from "next/link";


const HeaderPrincipal = () => {
    return ( 
        <span className="flex gap-20 justify-evenly ">
            <Link href='/'>
                <h2 className=" text-xl">THE COFFE</h2>
            </Link>
            
            <span >
                <Button variant='ghost' size='sm'>
                <SearchIcon />
                </Button>
                <Button variant='ghost' size='sm'>
                <ShoppingCartIcon/>
                </Button>
                <Sheet>
                <SheetTrigger asChild>
                    <Button
                    size='icon'
                    variant='outline'
                    className="border-none bg-transparent"
                    >
                    <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>

                    <div className="py-6">
                        <Separator />
                    </div>

                    <div className="space-y-2">
                    <Button
                        variant="ghost"
                        className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                    >
                        <HomeIcon size={16} />
                        <span className="block">Início</span>
                    </Button>
                    
                    <Button
                        variant="ghost"
                        className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                    >
                        <PersonStandingIcon size={16} />
                        <span className="block">Gerente</span>
                    </Button>
                    
                    <Button
                        variant="ghost"
                        className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                    >
                        <MicIcon size={16} />
                        <span className="block">Chamar atendente</span>
                    </Button>

                    </div>

                    <div className="py-6 ">
                        <Separator />
                    </div>
                    <Button
                        variant="ghost"
                        className="w-full justify-start space-x-3 rounded-full text-sm font-normal"
                    >
                        <BoltIcon size={16}/>
                        <span className="block">Configurações</span>
                    </Button>

                </SheetContent>
                </Sheet>
            </span>
        </span>

     );
}
 
export default HeaderPrincipal;