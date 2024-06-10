'use client';

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const Serch = () => {
    const router = useRouter;
    const [search, setSearch] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleSearchSubmit: FormEventHandler<HTMLFormControlsCollection> = (e) => {
        e.preventDefault();

        if(!search) {
            return;
        }

    }

    return ( 
        <form className="flex gap-2 pt-2" onSubmit={handleSearchSubmit}>
            <Input
            placeholder="Bucar Item"
            className="border-none"
            onChange={handleChange}
            value={search}
            />
            <Button size='icon' type="submit">
                <SearchIcon/>
            </Button>            
        </form>
     );
}
 
export default Serch;