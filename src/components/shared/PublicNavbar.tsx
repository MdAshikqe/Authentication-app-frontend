import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Menu } from "lucide-react";

const PublicNavBar=()=>{
    const navItems=[
        {name:"Home",href:"/"},
        {name:"About",href:"/about"},
        {name:"Services",href:"/services"},
        {name:"Contact",href:"/contact"}
    ]
    return (
        <header className="sticky top-0 z-50 flex h-16 border-b w-full items-center justify-around bg-background/95 px-4 shadow-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                        <Link href="/" className="flex items-center justify-center text-xl font-bold text-primary">Auth AS</Link>
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
            </div>
            {/* mobile menu button */}
            <div className="md:hidden">
                <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu></Menu></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
            </div>
        </header>
    )
}

export default PublicNavBar;