import { useEffect, useState } from 'react'

// utils
import classNames from 'classnames'
import { get, isEmpty } from 'lodash'
import { getDiffultyLevel } from '../../utils'

// styles
import './styles.scss'

const ExerciseDetail = ({ exercise }) => {
  const [isDifficultyLoading, setDifficultyLoading] = useState(false)
  const [difficultyData, setDifficulty] = useState({
    level: null,
    max_level: null,
    prediction_confidence: null
  })

  useEffect(() => {
    if (isEmpty(exercise.id)) return
    const url = `https://candidate.staging.future.co/sandbox/api/exercises/${exercise.id}/predictions`
    const fetchExerciseDifficulty = async () => {
      setDifficultyLoading(true)
      const rawDifficultyData = await fetch(url)
      const difficultyJson = await rawDifficultyData.json()
      setDifficulty((difficultyState) => ({
        ...difficultyState,
        level: get(difficultyJson, ['skill_level', 'level']),
        max_level: get(difficultyJson, ['skill_level', 'max_level']),
        prediction_confidence: Math.round(get(difficultyJson, ['skill_level', 'prediction_confidence']) * 100)
      }))
      setDifficultyLoading(false)
    }

    fetchExerciseDifficulty()
  }, [exercise.id])

  if (isEmpty(exercise)) {
    return (
      <div className='exercise-detail exercise-detail__empty'>
        <p>Please select an exercise from the list to view some more information about it!</p>
      </div>
    )
  }

  return (
    <div className='exercise-detail'>
      <video
        autoPlay
        className={classNames('exercise-detail__video', { 'exercise-detail__video--flipped': exercise.video.is_flipped })}
        loop
        muted
        src={exercise.video.url}
      />
      <div className='exercise-detail__description'>
        <h3>Exercise Description:</h3>
        <p>{exercise.description}</p>
      </div>
      <div className='exercise-detail__difficulty'>
        {isDifficultyLoading
          ? 'Loading...'
          : (
            <div>
              <h4>Difficulty:</h4>
              <p>{getDiffultyLevel(difficultyData)}</p>
              <h4>Confidence Level:</h4>
              <p>{difficultyData.prediction_confidence}%</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ExerciseDetail
