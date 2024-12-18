const Card: React.FC = () => {
    return (
        <div className="flex place-content-between border-2 border-gray-200">
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
                            {`${(333322100000).toLocaleString('ru-RU')}`}&nbsp;рублей
                        </p>
                    </div>
                    <button className="w-full">Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default Card