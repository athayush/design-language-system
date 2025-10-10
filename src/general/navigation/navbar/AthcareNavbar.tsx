import { CirclePlus, CircleUserRound, Clock, House, Store } from "lucide-react";
import { Navbar, NavbarItem } from "./Navbar";

function AthCareNavbar(){
   return (
    <Navbar>
      <NavbarItem  icon={House}>
        Home
      </NavbarItem>
      <NavbarItem  icon={Store}>
        Store
      </NavbarItem>
      <NavbarItem icon={CirclePlus}>
        Booking
      </NavbarItem>
      <NavbarItem  icon={Clock}>
        Trackers
      </NavbarItem>
      <NavbarItem
       isActive
        icon={CircleUserRound}
      >
        Profile
      </NavbarItem>
    </Navbar>
  );
}

export {AthCareNavbar}