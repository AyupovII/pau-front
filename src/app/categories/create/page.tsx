"use client"
import FileInput from "@/components/FileInput"
import Input from "@/components/Input"
import TextArea from "@/components/TextArea"
import { Autocomplete, Checkbox, FormControlLabel, TextField } from "@mui/material"

const CategoriesId: React.FC = () => {
    const top100Films = [
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 }]
    return (
        <div>
            <h3>Добавление нового лота</h3>
            <div className="flex flex-row gap-5">
                <div className="w-full">
                    <div>
                        <Input placeholder="Название лота" />
                        <Input placeholder="Цена" />
                        <Input placeholder="Должник" />
                        <FileInput label="Прикрепить фото" />
                        <TextArea placeholder="Описание" rows={10} />
                        <FileInput label="Прикрепить документы" multiple />
                    </div>
                    <button>Сохранить</button>
                </div>
                <div className="min-w-64">
                    <div>
                        <h4 className="mb-2">
                            Укажите категории лота
                        </h4>
                        <div className="flex flex-col">
                            <FormControlLabel
                                label="Транспорт"
                                control={<Checkbox defaultChecked={false} />}
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
                        <Autocomplete
                            disablePortal
                            options={top100Films}
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
    )
}
export default CategoriesId