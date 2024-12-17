'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header: React.FC = () => {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false)
  return (
    ///desktop
    <>
      <div className=" h-[70px] items-center px-5 border-b z-10 hidden md:flex">
        <div className="flex place-content-between w-full h-[50px]">
          <div className="items-center gap-5 h-full w-[50%] place-content-between flex">
            <input className="input" placeholder="Поиск по названию лота или ФИО должника" />
            <button className="btn">Найти</button>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn">Добавить лот</button>
            <button className="btn" onClick={() => router.push('/auth')}>Войти</button>
          </div>
        </div>
      </div>
      {/* ////tablet */}
      <div className="flex h-[70px] items-center px-5 border-b z-10 md:hidden">
        <div className="flex flex-col w-full h-[50px]">
          <div className="flex items-center gap-3  justify-end">
            <button className="btn">Добавить лот</button>
            <button className="btn" onClick={() => router.push('/auth')}>Войти</button>
            <button className="btn relative" onClick={() => setOpenSearch(!openSearch)}>
              <svg className="text-gray-600 h-5 w-5 absolute top-3.5 right-auto fill-current dark:text-gray-600"
                x="0px" y="0px" viewBox="0 0 56.966 56.966">
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                </path>
              </svg>
            </button>
          </div>
          <div className={`items-center gap-3 h-full place-content-between flex w-full mt-3 ${openSearch ? "scale-y-100" : "scale-y-0"} transition-all`}>
            <input className="input w-full" placeholder="Поиск по названию лота или ФИО должника" />
            <button className="btn">Найти</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header