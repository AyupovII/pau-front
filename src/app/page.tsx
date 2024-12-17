import { Pagination } from "@mui/material";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">
        Каталог банкротного имущества:<br />
        от автомобилей до участков
      </h1>
      <div className="flex place-content-between mb-4">
        <p className="text-gray-500">Найдено: 117 лотов</p>
        <p className="text-gray-500">Сортировать: по новизне</p>
      </div>
      <div className="flex flex-col gap-2">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex place-content-between border-2 border-gray-200">
            <div className="flex w-full">
              <div className="min-w-[150px] min-h-[150px] bg-gray-100 flex items-center justify-center">
                Изображение
              </div>
              <div className="flex flex-col p-2 justify-between grow">
                <p>
                  Производственный комплекс АО ДКМП (недвижимое имущесто, коммуникации и оборудование), находящееся в залоге АО РСХБ и нелоговое
                </p>
                <div className="text-sm">
                  <p>
                    Должник: Акционерное общество "Дюртюлинский комбинат молочных продуктов"
                  </p>
                  <p>
                    Категории: Недвижимость, Оборудование
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 h-full p-2 min-w-64">
                <div className="bg-gray-200 flex flex-col items-center grow justify-center">
                  <p>
                    Цена:
                  </p>
                  <p>
                    {(333322100000).toLocaleString('ru-RU')}&nbsp;рублей
                  </p>
                </div>
                <button className="btn w-full">Подробнее</button>
              </div>
            </div>
          </div>))}
      </div>
      <div className="flex justify-end my-4">
        <Pagination count={10} className="float-right" />
      </div>
    </div>
  );
}