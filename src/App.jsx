import styles from './App.modules.scss';
import React from "react";
import MyTodoList from './Tasks/Tasks';
import classnames from "classnames/bind"
import { DEFAULT_THEME, ThemeContext } from "./ThemeContext"

const cx = classnames.bind(styles)


class App extends React.Component {
  state = {
    theme: DEFAULT_THEME
  }

  handleThemeChange = event => {
    this.setState({theme: event.target.value}
      )
  }

  render () {
    return (
      <div className={cx("container", `container-theme-${this.state.theme}`)}>
        <button
          className={cx("changeButton")}
          onClick={this.handleThemeChange}
          value='light'
          >
            Light Theme
        </button>
        <button 
          className={cx("changeButton")}
          onClick={this.handleThemeChange}
          value='dark'
        >
          Dark Theme
        </button>

        <ThemeContext.Provider value={this.state.theme}>
         <MyTodoList />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App;