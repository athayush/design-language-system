import { CircleUserRound, Clock, Home, Search } from "lucide-react";
import { Navbar, NavbarItem } from "./Navbar";
import { useState } from "react";

function AthCareNavbar() {
  const [active, setActive] = useState("home");

  return (
    <Navbar>
      <NavbarItem icon={Home} isActive={active === "home"} onClick={() => setActive("home")}>
        Home
      </NavbarItem>
      <NavbarItem icon={Search} isActive={active === "search"} onClick={() => setActive("search")}>
        Search
      </NavbarItem>
      <NavbarItem icon={Clock} isActive={active === "tracker"} onClick={() => setActive("tracker")}>
        Tracker
      </NavbarItem>
      <NavbarItem icon={CircleUserRound} isActive={active === "profile"} onClick={() => setActive("profile")}>
        Profile
      </NavbarItem>
    </Navbar>
  );
}

export { AthCareNavbar };

// import { type LucideIcon } from "lucide-react";
// import { Navbar, NavbarItem } from "./Navbar";

// type NavItem = {
//   label: string;
//   icon: LucideIcon;
//   href: string;
//   isActive?: boolean;
// }

// type AthCareNavbarProps  ={
//   items: NavItem[];
// }

// export function AthCareNavbar({ items }: AthCareNavbarProps) {
//   return (
//     <Navbar>
//       {items.map((item) => (
//         <NavbarItem
//           key={item.href}
//           href={item.href}
//           icon={item.icon}
//           isActive={item.isActive}
//         >
//           {item.label}
//         </NavbarItem>
//       ))}
//     </Navbar>
//   );
// }