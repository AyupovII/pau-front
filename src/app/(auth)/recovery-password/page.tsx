"use client"
import { recoveryPassCheckCode, recoveryPassFinish } from "@/api/auth"
import Input from "@/components/Input"
import { ErrorMessage } from "@/enum/errorsMessage"
import store from "@/store"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useLayoutEffect } from "react"
import { Resolver, SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { toast } from "react-toastify"

const RecoveryPassword: React.FC = () => {
    type FormValues = {
        password: string;
        repeatPassword: string;
    };
    const router = useRouter()
    const searchParams = useSearchParams();
    const passwordRecoveryCode = searchParams.get("passwordRecoveryCode") ?? "";
    const userId = searchParams.get("userId") ?? "";
    const { authStore } = store;
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormValues>({})
    const { mutate: recoveryPassCheckCodeMutation } = useMutation(recoveryPassCheckCode, {
        onSuccess() {
            toast.success("Всё супер!");
        },
        onError(e) {
            toast.error(String(e))
        }
    })
    const { mutate: recoveryPassFinishMutation } = useMutation(recoveryPassFinish,
        {
            onSuccess() {
                toast.success("Вы успешно сменили пароль!");
                router.push('/')
            },
            onError(e) {
                toast.error(String(e))
            }
        }
    );
    const onSubmit = (data: FormValues) => {
        const { password } = data
        recoveryPassFinishMutation({ userId, passwordRecoveryCode, password })

    }
    useLayoutEffect(() => {
        recoveryPassCheckCodeMutation({ userId, passwordRecoveryCode })
    }, [])

    return (
        <div className="flex items-center justify-center h-full flex-col">
            <h2>
                Придумайте новый пароль
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-3xl min-w-full  md:min-w-[580px]">
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
                <button type="submit">Отправить</button>
                <p> Уже есть аккаунт? <span className="font-bold underline cursor-pointer" onClick={() => router.push('/auth')}>Войти</span></p>
            </form>
        </div>

    )
}
const Page: React.FC = () => {
    return (
        <Suspense >
            <RecoveryPassword />
        </Suspense>
    )
}

export default Page