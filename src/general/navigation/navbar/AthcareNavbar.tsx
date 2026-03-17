import { CircleUserRound, Clock, Home, Store, HeartHandshake } from "lucide-react";
import { Navbar, NavbarItem } from "./Navbar";
import { useState } from "react";

function AthCareNavbar() {
  const [active, setActive] = useState("home");

  return (
    <Navbar>
      <NavbarItem icon={Home} isActive={active === "home"} onClick={() => setActive("home")}>
        Home
      </NavbarItem>
      <NavbarItem icon={Store} isActive={active === "store"} onClick={() => setActive("store")}>
        Store
      </NavbarItem>
      <NavbarItem icon={HeartHandshake} isActive={active === "care"} onClick={() => setActive("care")}>
        Care
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

