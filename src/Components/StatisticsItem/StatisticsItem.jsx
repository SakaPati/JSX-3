import statistic from "../Statistic/Statistics.module.css"
import data from "../../Data/data.json"

export const StatisticsItem = () => {
    return (
        data.map((data) => ( 
            <li className={statistic.item}>
                <span>{data.label}</span>
                <span className={statistic.percentage}>{data.percentage}%</span>
            </li>
        ))
    );
}