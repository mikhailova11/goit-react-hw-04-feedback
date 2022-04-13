import React from "react";
import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={s.listText}>
                <span className={s.text}>Good: {good}</span>
                <span className={s.text}>Neutral: {neutral}</span>
                <span className={s.text}>Bad: {bad}</span>
                <span className={s.text}>Total: {total()}</span>
                <span className={s.text}>Positive feedback: {positivePercentage()} %</span>
        </div>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
};
