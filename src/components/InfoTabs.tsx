"use client"

import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import HiddenText from "./HiddenText";

const InfoTabs: React.FC = () => {
    const [value, setValue] = useState(0);
    const discriptionArray = [
        {
            id: 0,
            label: "Описание",
            text: "ЛАДА 217030 PRIORA, Год выпуска: 2011, г/н А392ОТ18, Идентификационный номер (VIN): XTA217030B0288765, Номер кузова (кабины): XTA217030B0288765, Цвет кузова: СЕРО-СИНЕ-ЗЕЛЕНЫЙ, Рабочий объем (см³): 1596, Мощность (кВт/л.с.): 72/97.9. Тип транспортного средства: Легковой седан. Ключи в наличии, документов нет (увед. №439 от 13.11.2024) Имущество продается в том виде, комплектности и состоянии, в каком оно есть у Продавца. За скрытые дефекты имущества Продавец ответственности не несет."
        },
        {
            id: 1,
            label: "Документы",
            text: "ЛАДА, Цвет кузова: СЕРО-СИНЕ-ЗЕЛЕНЫЙ, Рабочий объем (см³): 1596, Мощность (кВт/л.с.): 72/97.9. Тип транспортного средства: Легковой седан. Ключи в наличии, документов нет (увед. №439 от 13.11.2024) Имущество продается в том виде, комплектности и состоянии, в каком оно есть у Продавца. За скрытые дефекты имущества Продавец ответственности не несет."
        }
    ]
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
            >
                {discriptionArray.map(item => {
                    return (
                        <Tab
                            key={item.id}
                            value={item.id}
                            label={item.label}
                            wrapped
                        />
                    )
                })}
            </Tabs>
            <div>
                <HiddenText text={discriptionArray[value].text} />
            </div>

        </div>
    )
}

export default InfoTabs