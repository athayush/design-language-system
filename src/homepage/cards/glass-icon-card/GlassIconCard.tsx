import GlassIcons from "@/components/ui/GlassIcons"; 
import { ChartNoAxesColumn, Cloud, File, Heart, NotebookText, SquarePen } from "lucide-react";

const items = [
  { icon: <File />, color: 'blue', label: 'Files' },
  { icon: <NotebookText /> , color: 'purple', label: 'Books' },
  { icon: <Heart />, color: 'red', label: 'Health' },
  { icon: <Cloud />, color: 'indigo', label: 'Weather' },
  { icon: <SquarePen />, color: 'orange', label: 'Notes' },
  { icon: <ChartNoAxesColumn />, color: 'green', label: 'Stats' },
];

function GlassIconCard(){
    return (
<div style={{ height: '600px', position: 'relative' }}>
  <GlassIcons items={items} className="custom-class"/>
</div>

    )
}

export {GlassIconCard}