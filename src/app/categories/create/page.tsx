"use client"
import FileInput from "@/components/FileInput"
import Input from "@/components/Input"
import TextArea from "@/components/TextArea"
import { Autocomplete, Checkbox, FormControlLabel, TextField } from "@mui/material"

const CategoriesId: React.FC = () => {
    const option1 = [
        { label: 'Лот на Альфалот', id: 0 },
        { label: 'Лот через форму', id: 1 },
    ];
    const option2 = [
        { label: 'В работе', id: 0 },
        { label: 'Архив', id: 1 },
    ];
    return (
        <div>
            <h3 className="mt-4">Добавление нового лота</h3>
            <div>
                <div className="flex-row gap-5 border-b-2 pb-4 md:flex">
                    <div className="w-full">
                            <Input placeholder="Название лота" />
                            <Input placeholder="Цена" />
                            <Input placeholder="Должник" />
                            <FileInput label="Прикрепить фото" />
                            <TextArea placeholder="Описание" rows={10} />
                            <FileInput label="Прикрепить документы" multiple />
                    </div>
                    <div className="min-w-64">
                        <div>
                            <h4 className="mb-2">
                                Укажите категории лота
                            </h4>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <FormControlLabel
                                        label="Транспорт"
                                        control={<Checkbox defaultChecked={false}/>}
                                    />
                                    <FormControlLabel
                                        label="Земельный участок"
                                        control={<Checkbox defaultChecked={false} />}
                                    />
                                    <FormControlLabel
                                        label="Недвижимость"
                                        control={<Checkbox defaultChecked={false} />}
                                    />
                                    <FormControlLabel
                                        label="Имущественные права"
                                        control={<Checkbox defaultChecked={false} />}
                                    />
                                    <FormControlLabel
                                        label="Оборудование"
                                        control={<Checkbox defaultChecked={false} />}
                                    />
                                    <FormControlLabel
                                        label="Имущественный комплекс"
                                        control={<Checkbox defaultChecked={false} />}
                                    />
                                    <FormControlLabel
                                        label="Финансовое имущество"
                                        control={<Checkbox defaultChecked={false} />}
                                    />
                                    <FormControlLabel
                                        label="Сельское хозяство"
                                        control={<Checkbox defaultChecked={false} />}
                                    />
                                    <FormControlLabel
                                        label="Прочее"
                                        control={<Checkbox defaultChecked={false} />}
                                    />
                                </div>
                                <div>
                                    <h4>Выберите формат</h4>
                                    <Autocomplete
                                        options={option1}
                                        className="[&>.MuiOutlinedInput-root]:py-0"
                                        renderInput={(params) => <TextField {...params}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    paddingTop: 0,
                                                    paddingBottom: 0,
                                                    //   '& fieldset': {
                                                    //     // border: 'none', // Remove bottom line
                                                    //   }
                                                    '& input': {
                                                        paddingTop: "0 !important",
                                                        paddingBottom: "0 !important",
                                                    }
                                                },
                                            }}
                                        />}
                                    />
                                </div>
                                <TextArea placeholder="Укажите ссылку" rows={3} />
                                <div>
                                    <h4>Выберите статус</h4>
                                    <Autocomplete
                                        options={option2}
                                        className="[&>.MuiOutlinedInput-root]:py-0"
                                        renderInput={(params) => <TextField {...params}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    paddingTop: 0,
                                                    paddingBottom: 0,
                                                    //   '& fieldset': {
                                                    //     // border: 'none', // Remove bottom line
                                                    //   }
                                                    '& input': {
                                                        paddingTop: "0 !important",
                                                        paddingBottom: "0 !important",
                                                    }
                                                },
                                            }}
                                        />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex gap-2">
                    <button className="mt-5 ml-auto">Сохранить</button>
                </div>
            </div>
        </div>
    )
}
export default CategoriesId