import { useEffect } from "react"

const MenuList: React.FC<{ openMenu?: boolean }> = ({ openMenu = false }) => {

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
    useEffect(() => {
        document.body.style.overflow = openMenu ? 'hidden' : 'auto'
    }, [openMenu])
    return (
        <ul className="flex flex-col gap-2">
            {categorylist.map((item) => (
                <li key={item.id} className="flex gap-1">
                    <a href={item.url}>{item.title}</a>
                    <p className="">{item.count}</p>
                </li>
            ))}
        </ul>
    )
}
export default MenuList