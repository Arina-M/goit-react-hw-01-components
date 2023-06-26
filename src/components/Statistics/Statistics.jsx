import PropTypes from 'prop-types'
import css from "./Statistics.module.css";
import { StatsItem } from './StatisticsStyles';

export const Statistics = ({title, stats}) => {
    return (<section className={css.statistics}>
        {title && (<h2 className={css.title}>{title}</h2>)}
        <ul className={css.statlist}>
            {stats.map(({
                id, label, percentage}) => (<StatsItem key={id} className={css.item}> 
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </StatsItem>))} 
  </ul>
</section>)
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}