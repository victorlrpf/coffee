import { BoltIcon, HomeIcon, MenuIcon, MicIcon, PersonStandingIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { AlertDialogContent } from "@radix-ui/react-alert-dialog";


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
                        <AlertDialog>
                            <AlertDialogTrigger>Chamar Atendente</AlertDialogTrigger>
                            <AlertDialogContent className=" absolute left-0 right-3 top-[22rem]">
                                <AlertDialogHeader>
                                    <AlertDialogTitle>O Atendente foi chamado</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        O atendente foi chamado e logo estará com você.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Foi engano (Cencelar) </AlertDialogCancel>
                                    <AlertDialogAction>Muito Obrigado</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
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
                        <Link href={'/configuracao'}>
                            <span className="block">Configurações</span>
                        </Link>
                    </Button>

                </SheetContent>
                </Sheet>
            </span>
        </span>

     );
}
 
export default HeaderPrincipal;