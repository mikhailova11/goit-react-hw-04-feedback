import React from "react";
import s from './Notification.module.css';
import PropTypes from "prop-types";

const Notification = ({message}) => {
    return (
        <div>
            <h3 className={s.message}>{message}</h3>
        </div>

    )
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string,

};