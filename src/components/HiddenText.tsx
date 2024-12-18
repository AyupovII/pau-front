import { useState } from "react"

const HiddenText: React.FC<{ text: string }> = ({ text }) => {
    const [isHiddenText, SetIsHiddenText] = useState(true)
    return (
        <div>
            <div className={`hidden-text ${isHiddenText ? "" : "block after:hidden "}`}>
                <p className="text-xl">
                    {text}
                </p>
            </div>
            <p
                className="cursor-pointer transition-colors hover:text-gray-500"
                onClick={() => SetIsHiddenText(!isHiddenText)}>{isHiddenText ? "Развернуть..." : "Скрыть"}</p>
        </div>
    )
}

export default HiddenText