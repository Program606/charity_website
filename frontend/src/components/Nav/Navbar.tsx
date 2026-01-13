import {
  NavigationMenu,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
// import { href } from "react-router-dom";


import {NavBarItem, NavBarButton} from "@/components/Nav/NavBarItem";
const logoSrc = '/logo.avif'
export function Navbar() {
  const Links = [
    { name: "LEARN", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "WORKS", href: "#" },
    { name: "GET INVOLVED", href: "#" },
    { name: "GET IN TOUCH", href: "#" },
    { name: "DONATE", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold tracking-wide text-gray-900">
          <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-12">
            {Links.map((link) => {
              const isDonate = link.name === "DONATE";
              const Component = isDonate ? NavBarButton : NavBarItem;

              return (
                <NavigationMenuItem key={link.name}>
                  <Component name={link.name} href={link.href} />
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

