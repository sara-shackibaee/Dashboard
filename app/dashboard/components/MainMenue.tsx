import { Avatar } from "@/components/ui/avatar";
import MenuItem from "./menue-item";
import MenueTitle from "./MenueTitle";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";


export default function MainMenue() {
    return (<>


        <nav className="bg-muted overflow-auto p-4 flex flex-col">
            <header className="border-b dark:border-b-black border-b-zinc-300">
                <MenueTitle />
            </header>
            <ul className="py-4 grow">

                <MenuItem href="/dashboard" >My dashboard</MenuItem>
                <MenuItem href="/dashboard/teams" >Teams</MenuItem>
                <MenuItem href="/dashboard/employees" >Employees</MenuItem>
                <MenuItem href="/dashboard/account" >Account</MenuItem>
            </ul>
            <footer className="flex gap-2 items-center">
                <Avatar>
                    <AvatarFallback className="bg-pink-300 dark:bg-pink-800">SM</AvatarFallback>
                </Avatar>
                <Link href='/'>Logout</Link>
                {/* <LightDarkToggle /> */}

            </footer>
        </nav>
    </>)
}