'use client'
import { AuthorizationStatus } from "@/enum/auth";
import store from "@/store";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MenuList from "./MenuList";

const Header: React.FC = () => {
  const { authStore } = store;
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const control =
    <div className="flex items-center gap-3">
      {authStore.isAuth === AuthorizationStatus.Auth && <button onClick={() => router.push('/categories/create')}>Добавить лот</button>}
      <button onClick={() => (authStore.logout(), router.push('/auth'))}>{authStore.isAuth === AuthorizationStatus.Auth ? 'Выйти' : 'Войти'}</button>
    </div>

  useEffect(() => {
    if (localStorage.getItem('token'))
      authStore.setAuth(AuthorizationStatus.Auth)
    else
      authStore.setAuth(AuthorizationStatus.NoAuth)
  }, [authStore.isAuth])
  return (
    ///desktop
    <>
      <div className=" h-[70px] items-center px-5 border-b z-10 hidden md:flex">
        <div className="flex place-content-between w-full h-[50px]">
          <div className="items-center gap-5 h-full w-[50%] place-content-between flex">
            <input placeholder="Поиск по названию лота или ФИО должника" />
            <button>Найти</button>
          </div>
          <div className="flex items-center gap-3">
            {control}
          </div>
        </div>
      </div>
      {/* ////tablet */}
      <div className={`flex ${openSearch ? "h-[140px]" : "h-[70px]"}  px-5 border-b z-10 md:hidden`}>
        <div className="flex flex-col w-full h-[50px]">
          <div className="flex items-center gap-3 mt-2 justify-between">
            <button className={""} onClick={() => setOpenMenu(!openMenu)}>
              <div className={`burger ${openMenu ? "_open" : "_close"}`}>
                <span></span>
              </div>
            </button>
            <div className="flex items-center gap-3">

              {control}
              <button className="relative" onClick={() => setOpenSearch(!openSearch)}>
                <svg className="text-gray-600 h-5 w-5 absolute top-3.5 right-auto fill-current dark:text-gray-600"
                  x="0px" y="0px" viewBox="0 0 56.966 56.966">
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
          <div className={`items-center gap-3 h-full place-content-between flex w-full mt-3 ${openSearch ? "scale-y-100" : "scale-y-0"} transition-all`}>
            <input className="w-full" placeholder="Поиск по названию лота или ФИО должника" />
            <button>Найти</button>
          </div>
        </div>
      </div>
      {<div className={`absolute bg-white w-full h-[100dvh] top-[70px] p-5 ${openMenu ? "left-0" : "left-[-100%]"} transition-all`}>
        <MenuList openMenu={openMenu} />
      </div>}
    </>
  );
}

export default observer(Header)