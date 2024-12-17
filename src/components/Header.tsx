'use client'
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex h-[70px] items-center px-5 border-b">
      <div className="flex place-content-between w-full h-[50px]">
        <div className="flex items-center gap-5 h-full w-[50%] place-content-between">
          <input className="input" placeholder="Поиск по названию лота или ФИО должника" />
          <button className="btn">Найти</button>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn">Добавить лот</button>
          <button className="btn" onClick={() => router.push('/auth')}>Войти</button>
        </div>

      </div>
    </div>
  );
}

export default Header