'use client'
import { useState } from "react";
import MenuList from "./MenuList";

const SideBar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <div className={`flex flex-col bg-blueColor sticky top-0 h-[100vh] z-10 px-2 ${isHidden ? 'w-10' : 'w-[290px]'} transition-all hidden md:flex`}>
      <div className="h-[70px]">
        logo
      </div>
      <button onClick={() => setIsHidden(!isHidden)}>ntcn</button>
      <div className="mt-2">
        {!isHidden && <MenuList />}
      </div>
    </div>
  );
}

export default SideBar