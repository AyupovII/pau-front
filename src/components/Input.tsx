import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}
const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex flex-col">
            <div className="relative">
                <input
                    {...props}
                    type={props.type === "password" && !showPassword ? "password" : "text"}
                    placeholder={props.placeholder}
                />
                {
                    props.type === "password" &&
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
                        {showPassword
                            ?
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.43748 5.64413C6.92941 5.74988 5.52991 6.28144 4.34754 6.92831L2.64766 5.22731C2.42829 5.00794 2.07223 5.00738 1.85229 5.22731C1.63291 5.44669 1.63235 5.80275 1.85229 6.02269L3.35473 7.52681C1.82866 8.53256 0.832476 9.58894 0.703101 9.72956C0.701976 9.73125 0.700851 9.73238 0.699726 9.7335C0.548413 9.90169 0.510726 10.1436 0.602976 10.35C0.637851 10.4265 4.71091 14.625 8.99998 14.625C13.568 14.625 17.2867 10.5086 17.2912 10.5036C17.402 10.3821 17.4538 10.2178 17.433 10.0541C17.4127 9.89213 15.7483 8.20575 14.1238 7.22363L15.8855 5.46019C16.1049 5.24025 16.1049 4.88419 15.8855 4.66481C15.6656 4.44488 15.309 4.44544 15.0896 4.66481L13.1023 6.65494C13.1 6.65663 13.0978 6.65887 13.0955 6.66112C12.0409 6.14475 10.841 5.74312 9.56248 5.64694V3.375C9.56248 3.0645 9.31048 2.8125 8.99998 2.8125C8.68948 2.8125 8.43748 3.0645 8.43748 3.375V5.64413ZM8.99041 6.75C9.01066 6.75 9.03091 6.75 9.05116 6.75056C10.8905 6.77813 12.375 8.27944 12.375 10.125C12.375 11.9874 10.8624 13.5 8.99998 13.5C7.13754 13.5 5.62498 11.9874 5.62498 10.125C5.62498 8.26538 7.13191 6.75563 8.99041 6.75ZM5.18566 7.73775C3.65229 8.51512 2.47273 9.55687 1.89898 10.1154C2.45698 10.6622 3.63654 11.7113 5.1761 12.4976C4.74748 11.8086 4.49998 10.9958 4.49998 10.125C4.49998 9.24806 4.75141 8.42962 5.18566 7.73775ZM12.8334 7.76869C13.2559 8.45381 13.5 9.261 13.5 10.125C13.5 10.9958 13.2525 11.8086 12.8239 12.4976C14.3437 11.7214 15.5126 10.6886 16.0802 10.1357C15.5239 9.59119 14.3572 8.55281 12.8334 7.76869Z" fill="#283851" />
                            </svg>
                            :
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3024_2468)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.24555 10.4685L2.73862 11.9771C2.51924 12.1971 2.51924 12.5531 2.73862 12.7725C2.95855 12.9924 3.31518 12.9919 3.53455 12.7725L5.23724 11.0676C6.41737 11.7139 7.8118 12.2454 9.3148 12.3546L9.3238 14.6271C9.32493 14.9376 9.57805 15.1884 9.88855 15.1873C10.1991 15.1862 10.4499 14.9331 10.4488 14.6226L10.4398 12.354C11.7229 12.2606 12.9266 11.859 13.9847 11.3415C13.9858 11.3426 13.9869 11.3437 13.9886 11.3449L15.9759 13.335C16.1959 13.5544 16.5519 13.5549 16.7719 13.335C16.9912 13.1156 16.9912 12.7596 16.7719 12.5396L15.0135 10.779C16.9344 9.61856 18.1691 8.25 18.1691 8.25C18.3761 8.01881 18.3564 7.66331 18.1252 7.45575C17.8941 7.24875 17.5386 7.26843 17.331 7.49962C17.331 7.49962 13.9954 11.2498 9.87505 11.2498C5.75474 11.2498 2.41912 7.49962 2.41912 7.49962C2.21155 7.26843 1.85605 7.24875 1.62487 7.45575C1.39368 7.66331 1.37399 8.01881 1.58099 8.25C1.58099 8.25 2.60812 9.3885 4.24555 10.4685Z" fill="#283851" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3024_2468">
                                        <rect width="18" height="18" fill="white" transform="translate(0.875)" />
                                    </clipPath>
                                </defs>
                            </svg>}
                    </button>}
            </div>
            <div className="w-full ">
                <p className="text-red-500 h-[15px] text-xs pl-1 pt-[2px]">
                    {error}
                </p>
            </div>
        </div>
    )
}

export default Input