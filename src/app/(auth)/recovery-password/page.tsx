"use client"
import Input from "@/components/Input"
import { ErrorMessage } from "@/enum/errorsMessage"
import { useRouter } from "next/navigation"
import { Resolver, SubmitHandler, useForm } from "react-hook-form"

const RecoveryPassword: React.FC = () => {
    type FormValues = {
        password: string;
        repeatPassword: string;
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
                Придумайте новый пароль
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-3xl min-w-[400px]">
                <div className="flex flex-col gap-2">
                    <Input
                        type="password"
                        {...register(
                            "password",
                            {
                                required: ErrorMessage.REQUIRED,
                                minLength: { value: 6, message: ErrorMessage.MIN_LENGTH },
                            })}
                        placeholder="Введите новый пароль*"
                        error={errors.password?.message as string}
                    />
                    <Input
                        type="password"
                        {...register(
                            "repeatPassword",
                            {
                                required: ErrorMessage.REQUIRED,
                                minLength: { value: 6, message: ErrorMessage.MIN_LENGTH },
                                validate: (value) => value === getValues('password') || ErrorMessage.CONFIRM_PASSWORD
                            })}
                        placeholder="Повторите пароль*"
                        error={errors.repeatPassword?.message as string}
                    />

                </div>
                <button type="submit" className="btn">Отправить</button>
                <p> Уже есть аккаунт? <span className="font-bold underline cursor-pointer" onClick={() => router.push('/auth')}>Войти</span></p>
            </form>
        </div>
    )
}

export default RecoveryPassword