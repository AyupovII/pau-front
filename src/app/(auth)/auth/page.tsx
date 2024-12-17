"use client"
import Input from "@/components/Input"
import { ErrorMessage } from "@/enum/errorsMessage"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const Auth: React.FC = () => {
    type FormValues = {
        email: string;
        password: string;
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
                Авторизация
            </h2>
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
                    <Input
                        type="password"
                        {...register(
                            "password",
                            {
                                required: { value: true, message: ErrorMessage.REQUIRED },
                                minLength: { value: 6, message: ErrorMessage.MIN_LENGTH }
                            })}
                        placeholder="Password"
                        error={errors.password?.message as string}
                    />
                </div>
                <button type="submit" className="btn">Submit</button>
                <p className="underline cursor-pointer" onClick={() => router.push('/recovery-password')}>Забыли пароль?</p>
            </form>
        </div>
    )
}

export default Auth