import {NavigationMenuLink} from "@/components/ui/navigation-menu";
import {Button} from "@/components/ui/button";

interface NavBarItemProps {
  name: string;
  href: string;
}

const NavBarItem = ({name, href}: NavBarItemProps) => {
  return (
    <NavigationMenuLink
      href={href}
      className="text-gray-800 font-medium hover:text-red-500 transition-colors"
    >
      {name}
    </NavigationMenuLink>
  );
};

const NavBarButton = ({name, href}: NavBarItemProps) => {
  return (
    <NavigationMenuLink
      href={href}>
        <Button>{name}</Button>
    </NavigationMenuLink>
  );
};

export { NavBarItem, NavBarButton };