import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiBowlOfRice } from "react-icons/gi";
import { TbToolsKitchen3 } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

 const Categories = [
  {
    id : 1,
    name : 'All',
    icon :<TiThSmallOutline className="w-15 h-15  text-[#eb5e28] " />
  },
  {
    id : 2,
    name : 'breakfast',
    icon :<MdOutlineFreeBreakfast className="w-15 h-15 text-[#eb5e28] " />
  },
  {
    id : 3,
    name : 'soups',
    icon :<LuSoup className="w-15 h-15 text-[#eb5e28] " />
  },
  {
    id : 4,
    name : 'pasta',
    icon :<GiBowlOfRice className="w-15 h-15 text-[#eb5e28] " />
  },
  {
    id : 5,
    name : 'main_course',
    icon :<TbToolsKitchen3 className="w-15 h-15 text-[#eb5e28] " />
  },
  {
    id : 6,
    name : 'pizza',
    icon :<GiFullPizza className="w-15 h-15 text-[#eb5e28] " />
  },
  {
    id : 7,
    name : 'burger',
    icon :<GiHamburger className="w-15 h-15 text-[#eb5e28] " />
  },
  
]
export default Categories