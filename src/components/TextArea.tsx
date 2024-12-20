import { useState } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string
}
const TextArea: React.FC<TextAreaProps> = ({ label, error, ...props }) => {
    return (
        <div className="flex flex-col">
            <div className="relative">
                <textarea
                    {...props}
                    placeholder={props.placeholder}
                />
            </div>
            <div className="w-full ">
                <p className="text-red-500 h-[15px] text-xs pl-1 pt-[2px]">
                    {error}
                </p>
            </div>
        </div>
    )
}

export default TextArea