import React from 'react';
import styles from './TaskStyle.modules.scss';
import classnames from "classnames/bind"
import { ThemeContext } from '../ThemeContext';

const cx = classnames.bind(styles)

const Task = (props) => {
  return (
    <div>
      <ThemeContext.Consumer>
        {theme => (
          <div className={cx("tasks", `tasks-theme-${theme}`)}>
            <div className={cx("name")}>{props.name}</div>
            <div>{props.description}</div>
            <div>Completed: {String(props.completed)}</div>
            <button className={cx("button", `button-theme-${theme}`)} onClick={props.onClick}>Complete</button>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

export default Task;