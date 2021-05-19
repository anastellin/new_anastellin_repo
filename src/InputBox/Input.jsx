import React from 'react';
import classnames from "classnames/bind"
import { ThemeContext } from "../ThemeContext"
import styles from "./Input.modules.scss"

const cx = classnames.bind(styles)

const Input = (props) => {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <input
            className={cx("input", `input-theme-${theme}`)}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            name={props.name} />
        )}
      </ThemeContext.Consumer>
    )
  }

export default Input