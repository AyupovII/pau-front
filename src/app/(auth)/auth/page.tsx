"use client"
import { signIn } from "@/api/auth"
import Input from "@/components/Input"
import { AuthorizationStatus } from "@/enum/auth"
import { ErrorMessage } from "@/enum/errorsMessage"
import store from "@/store"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { toast } from "react-toastify"

const Auth: React.FC = () => {
    type FormValues = {
        login: string;
        password: string;
    };
    const {authStore} = store;
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormValues>({})
    const router = useRouter()
    const { mutate: signInMutation } = useMutation(signIn,
        {
            onSuccess() {
                toast.success("Вы успешно авторизованы!");
                authStore.setAuth(AuthorizationStatus.Auth)
                router.push('/')
            },
            onError(e) {
                toast.error(String(e))
            }

        }
    );
    const onSubmit = (data: FormValues) => {
        signInMutation({...data})

    }
    console.log(errors)

    return (
        <div className="flex items-center justify-center h-full flex-col">
            <h2>
                Авторизация
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-3xl min-w-full  md:min-w-[580px]">
                <div className="flex flex-col gap-2">
                    <Input
                        type="text"
                        {...register(
                            "login",
                            {
                                required: ErrorMessage.REQUIRED,
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: ErrorMessage.INVALID_EMAIL }
                            })}
                        placeholder="Email"
                        error={errors.login?.message as string}
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
                <button type="submit">Submit</button>
                <p className="underline cursor-pointer" onClick={() => router.push('/forgot-password')}>Забыли пароль?</p>
            </form>
        </div>
    )
}

export default Auth