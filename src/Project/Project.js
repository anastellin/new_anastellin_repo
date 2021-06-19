import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classnames from 'classnames/bind'
import styles from './AddProject.modules.scss'

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  theme: state.theme.theme
})

const ProjectsComp = ({ theme, id, name }) => {
  const projectPath = `/projects/${id}/`
  return (
      <div>
          <Link className={cx('header', `header-theme-${theme}`)} to={projectPath}>{name}</Link>
      </div>
  )
}

export const Project = connect(mapStateToProps)(ProjectsComp);