import React from 'react';
import styles from './TaskStyle.modules.scss';
import classnames from "classnames/bind"
import { connect } from 'react-redux'
import { CompletedStatusButton } from './CompletedStatusButton'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const taskComp = ({ id, name, description, completed, theme, projectId }) => {
  const nameT = 'Name: ' + name
  const descriptionT = 'Description: ' + description
  const completedT = 'Status: ' + completed
  return (
    <div className={cx('task', `tasks-theme-${theme}`)}>
          <div>{nameT}</div>
          <div>{descriptionT}</div>
          <div>{completedT}</div>
          <div className={cx('button')}>
            <CompletedStatusButton projectId={projectId} taskId={id} taskCompleted={completedT} />
          </div>
    </div>
  )
}

export const Task = connect(mapStateToProps)(taskComp);
