import { useEffect, useState } from 'react'
import './styles/App.scss'

import Exercises from './components/Exercises'
import ExerciseDetail from './components/ExerciseDetail'

const EXERCISE_API_URL = 'https://candidate.staging.future.co/sandbox/api/exercises'

const App = () => {
  const [exerciseList, setExerciseList] = useState([])
  const [selectedExercise, setSelectedExercise] = useState({})

  useEffect(() => {
    const fetchExercises = async () => {
      const exerciseRawData = await fetch(EXERCISE_API_URL)
      const exerciseListJson = await exerciseRawData.json()
      setExerciseList(exerciseListJson)
    }

    fetchExercises()
  }, [])

  return (
    <div className='container'>
      <Exercises
        exercises={exerciseList}
        selectedExercise={selectedExercise}
        setSelectedExercise={setSelectedExercise}
      />
      <ExerciseDetail exercise={selectedExercise} />
    </div>
  )
}

export default App
