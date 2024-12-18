'use client'
import CategorySwiper from "@/components/CategorySwiper";
import InfoTabs from "@/components/InfoTabs";

import 'swiper/css';

const CategoriesId: React.FC = () => {

    return (
        <div>
            <h3>
                Производственный комплекс АО ДКМП (недвижимое имущество, коммуникации и оборудование), находящееся в залоге АО РСХБ и незалоговое
            </h3>
            <div className="flex gap-5 flex-col lg:flex-row">
                <CategorySwiper />
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-2.5">
                        <div className="flex gap-3">
                            <p className="min-w-20">
                                Лот:
                            </p>
                            <p>
                                0011
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <p className="min-w-20">
                                Должник:
                            </p>
                            <p>
                                Акционерное общество "Дюртюлинский комбинат молочных продуктов"
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <p className="min-w-20">
                                Категории:
                            </p>
                            <p>
                                Недвижимость, Оборудование
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <p className="min-w-20">
                                Цена:
                            </p>
                            <p>
                                444 657 100,00 рублей
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <p className="min-w-20">
                                Дата:
                            </p>
                            <p>
                                12.12.24
                            </p>
                        </div>

                    </div>
                    <div className="flex gap-2.5">
                        <button>Участвовать в торгах</button>
                        <button>Редактировать лот</button>
                    </div>
                </div>
            </div>
            <InfoTabs />
        </div>
    )
}
export default CategoriesId