'use client'
import { useState } from "react";

const SideBar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false)
  console.log(isHidden)
  const categorylist = [
    {
      id: 1,
      name: "transport",
      title: "Транспорт",
      url: "/",
      count: 0,
    },
    {
      id: 2,
      name: "land",
      title: "Земельный участок",
      url: "/",
      count: 2,
    },
    {
      id: 3,
      name: "estate",
      title: "Недвижимость",
      url: "/",
      count: 2,
    },
    {
      id: 4,
      name: "property",
      title: "Имущественные права",
      url: "/",
      count: 0,
    },
    {
      id: 5,
      name: "equipment",
      title: "Оборудование",
      url: "/",
      count: 0,
    },
    {
      id: 6,
      name: "finances",
      title: "Финансовые имущество",
      url: "/",
      count: 6,
    },
  ]
  return (
    <div className={`flex flex-col bg-green-600 sticky top-0 h-[100vh] z-10 px-2 ${isHidden ? 'w-10' : 'w-[290px]'} transition-all hidden md:flex`}>
      <div className="h-[70px]">
        logo
      </div>
      <button className="btn" onClick={() => setIsHidden(!isHidden)}>ntcn</button>
      <div className="mt-2">
        {!isHidden && <ul className="flex flex-col gap-2">
          {categorylist.map((item) => (
            <li key={item.id} className="flex gap-1">
              <a href={item.url}>{item.title}</a>
              <p className="">{item.count}</p>
            </li>
          ))}
        </ul>}
      </div>
    </div>
  );
}

export default SideBar