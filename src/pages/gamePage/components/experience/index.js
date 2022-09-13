import './index.css'
import {useInterval} from "../../../../utils/hooks";
import {useState} from "react";

export default function Experience({ exp, maxExp }) {
    const maxPercentages = exp / (40 / 100)
    const [percentages, setPercentages] = useState(0)

    useInterval(() => {
        if (percentages < maxPercentages) {
            setPercentages(percentages + 2)
        }
    },percentages < maxPercentages ? 500 : null)
    return (
        <div className="experience">
            <div className="experience-numbers">
                {exp}/{maxExp}
            </div>
        </div>

    )
}