import Card from "@/components/Card";
import CategorySwiper from "@/components/CategorySwiper";
import InfoTabs from "@/components/InfoTabs";
import Link from "next/link";
import { use } from "react";

interface Props {
    params: Promise<{ id: string }>
}

const CategoriesId: React.FC<Props> = ({ params }) => {
    const { id } = use(params);
    console.log(id)
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
                        <Link href={`/categories/${id}/edit`}>
                            <button>Редактировать лот</button>
                        </Link>
                    </div>
                </div>
            </div>
            <InfoTabs />
            <h3>Похожие лоты</h3>
            <div className="flex flex-col gap-2 lg:flex md:grid md:grid-cols-2">
                {[...Array(10)].map((_, i) => (
                    <Card key={i} />
                ))}
            </div>
        </div>
    )
}
export default CategoriesId