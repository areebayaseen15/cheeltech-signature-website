import { MenuItem } from "@/types/menu-d-t";
import MegaMenuThumb from "../../../public/assets/img/menu/menu-1.png";

const headerMenuData:MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "Home",
    pluseIncon: true,
    link: "/",
   
  },
  {
    id: 2,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "About",
    pluseIncon: true,
    link: "#about",
   
  },
  {
    id: 3,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "Services",
    pluseIncon: true,
    link: "#",
   
  },
  {
    id: 4,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "Projects",
    pluseIncon: true,
    link: "#",
   
  },
  {
    id: 5,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: true,
    title: "Blog",
    pluseIncon: true,
    link: "#",
    
  },
  {
    id: 6,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    children: true,
    title: "Contact",
    pluseIncon: true,
    link: "#",
    
  }
];
export default headerMenuData;

