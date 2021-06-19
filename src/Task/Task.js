import React from 'react';
import styles from './TaskStyle.modules.scss';
import classnames from "classnames/bind"
import { connect } from 'react-redux'
import { CompletedStatusButton } from './CompletedStatusButton';

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const taskComp = ({ id, name, description, completed, theme }) => {
  const nameT = 'Name: ' + name
  const descriptionT = 'Description: ' + description
  const completedT = 'Status: ' + completed
  return (
    <div className={cx('tasks', `tasks-theme-${theme}`, { [`tasks-theme-${theme}-completed`]: completed })}>
          <div>{nameT}</div>
          <div>{descriptionT}</div>
          <div>{completedT}</div>
          <div className={cx('button')}>
            <CompletedStatusButton taskId={id} taskCompleted={completedT} />
          </div>
    </div>
  )
}

export const Task = connect(mapStateToProps)(taskComp);
