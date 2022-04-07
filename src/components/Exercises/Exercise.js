// utils
import classNames from 'classnames'
import { getExerciseSide } from '../../utils'

// styles
import './styles.scss'

const Exercise = ({ exercise, isSelected, setSelectedExercise }) => {
  const exerciseStyles = classNames('exercises__item', { 'exercises__item--active': isSelected })
  return (
    <li
      className={exerciseStyles}
      onClick={() => setSelectedExercise(exercise)}
    >
      {exercise.name}
      {getExerciseSide(exercise.side)}
    </li>
  )
}

export default Exercise
