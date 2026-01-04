import Link from "next/link";
import { Button } from "../ui/button";

const PublicNavBar=()=>{
    const navItems=[
        {name:"Home",href:"/"},
        {name:"About",href:"/about"},
        {name:"Services",href:"/services"},
        {name:"Contact",href:"/contact"}
    ]
    return (
        <header className="sticky top-0 z-50 flex h-16 border-b w-full items-center justify-around bg-background/95 px-4 shadow-md">
                <div>
                        <Link href="/" className="flex items-center justify-center text-xl font-bold text-primary">Auth AS</Link>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex gap-6">
                      {navItems.map((item)=>(
                        <li key={item.name}>
                            <Link href={item.href} className="text-md font-medium text-muted-foreground hover:text-primary">
                            {item.name}
                            </Link>
                        </li>
                      ))}
                    </ul>

                </nav>
                <div className="hidden md:block">
                    <Link href="/login" className="btn btn-border">
                    <Button>login</Button>
                    </Link>
                </div>
        </header>
    )
}

export default PublicNavBar;