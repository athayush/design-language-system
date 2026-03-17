import { useState } from "react";
import { Drawer } from "./Drawer";
import type { ComponentProps } from "react";

type DrawerProps = ComponentProps<typeof Drawer>;

function DrawerWithState(props: Omit<DrawerProps, "open" | "onOpenChange">) {
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      {...props}
      open={open}
      onOpenChange={setOpen}
    >
      {props.children}
    </Drawer>
  );
}

export {DrawerWithState}