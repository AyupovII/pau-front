"use client"
import Input from "@/components/Input"
import { ErrorMessage } from "@/enum/errorsMessage"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const ForgotPassword: React.FC = () => {
    type FormValues = {
        email: string;
    };
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormValues>({})
    const router = useRouter()
    const onSubmit = (data: FormValues) => {
        console.log(errors)

    }
    console.log(errors)

    return (
        <div className="flex items-center justify-center h-full flex-col">
            <h2 className="text-5xl font-bold mb-5">
                Забыли пароль
            </h2>
            <p className="mb-2 text-sm">На этот адрес будет выслана ссылка для сброса пароля</p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-3xl min-w-[400px]">
                <div className="flex flex-col gap-2">
                    <Input
                        type="text"
                        {...register(
                            "email",
                            {
                                required: ErrorMessage.REQUIRED,
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: ErrorMessage.INVALID_EMAIL }
                            })}
                        placeholder="Email"
                        error={errors.email?.message as string}
                    />

                </div>
                <button type="submit" className="btn">Отправить</button>
                <p> Уже есть аккаунт? <span className="font-bold underline cursor-pointer" onClick={() => router.push('/auth')}>Войти</span></p>
            </form>
        </div>
    )
}

export default ForgotPassword