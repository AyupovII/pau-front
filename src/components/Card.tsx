
import catImg from "../assets/img/cat.jpg"
import Image from "next/image"
import Link from "next/link";


const Card: React.FC = () => {
    return (
        <div className="flex place-content-between border-2 border-gray-200 rounded-2xl overflow-hidden">
            <div className="flex w-full flex-col lg:flex-row">
                <Image src={catImg} alt="cat"
                    className=" bg-gray-100 flex items-center justify-center object-cover self-center min-w-full min-h-[200px] lg:min-w-[150px]  md:min-w-full md:h-200"
                />
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
                <div className="flex flex-col gap-2 h-40 p-2 lg:min-w-64  md:h-full">
                    <div className="bg-gray-200 flex flex-col items-center grow justify-center">
                        <p>
                            Цена:
                        </p>
                        <p>
                            {`${(333322100000).toLocaleString('ru-RU')}`}&nbsp;рублей
                        </p>
                    </div>
                    <Link href="/categories/1">
                        <button className="w-full">Подробнее</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Card