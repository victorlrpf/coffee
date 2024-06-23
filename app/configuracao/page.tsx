import HeaderPrincipal from "../_components/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../_components/ui/accordion";

const PageConfig = () => {
    return ( 
        <>
        <header className="pt-6 px-5">
            <HeaderPrincipal/>
        </header>
        <main className="pt-6 px-5">
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>O que acontece se houver desperdicio de comida?</AccordionTrigger>
            <AccordionContent>
            Sempre que tem algum desperdicio, combramos uma taxa.
            </AccordionContent>
            <AccordionContent>
            Caso seja um desperdicio absurdo é feito uma marmita para, pessoas em situação de vulnerabilidade
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>Horario de Funcionamento</AccordionTrigger>
            <AccordionContent>
            De segunda à sabado das 05:00 às 23:00
            </AccordionContent>
            <AccordionContent>
            Aos domingos das 06:00 às 16:00
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger>Reclamações ou Sugestões </AccordionTrigger>
            <AccordionContent>
            thecoffee@gmail.com
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        </main>
        </>
     );
}
 
export default PageConfig;