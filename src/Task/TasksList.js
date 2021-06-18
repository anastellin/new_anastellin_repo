import { Task } from '../Task/Task';
import classnames from 'classnames/bind'
import styles from './TaskStyle.modules.scss';

const cx = classnames.bind(styles)

const TasksList = ({projectId, tasksById }) => {
    const tasks = Object.values(tasksById)
    return (
      <div className={cx('tasks')}>
        {
          tasks.map(it => <Task id={it.id} projectId={projectId} name={it.name} description={it.description} 
            completed={it.completed} key={it.id} />)
        }
      </div>
    )
  }

export default TasksList;