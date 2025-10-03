import statistic from "./Statistics.module.css"
import {StatisticsItem} from "../StatisticsItem/StatisticsItem"

export const Statistics = ({ title }) => { 
    return (
        <section className={statistic.statistics}>
            <h2 className={statistic.title}>{title}</h2>

            <ul className={statistic.statList }>
                <StatisticsItem />
            </ul>
        </section>
    );
}