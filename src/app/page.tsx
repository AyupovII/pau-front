import Card from "@/components/Card";
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
          <Card key={i} />
        ))}
      </div>
      <div className="flex justify-end my-4">
        <Pagination count={10} className="float-right" />
      </div>
    </div>
  );
}