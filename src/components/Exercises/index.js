import { useState } from 'react'

// components
import Exercise from './Exercise'
import SearchExercises from './SearchExercises'

const Exercises = ({ exercises, selectedExercise, setSelectedExercise }) => {
  const [filteredExercises, setFilteredExercises] = useState([])
  const [searchText, setSearchText] = useState('')

  const handleSearch = (e) => {
    setSearchText(e.target.value)
    const filteredList = exercises.filter((exercise) => {
      return exercise.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredExercises(filteredList)
  }

  const renderExercises = () => {
    const exerciseListToRender = searchText !== '' ? filteredExercises : exercises
  
    return exerciseListToRender.map((exercise) => {
      const isSelected = selectedExercise.id === exercise.id
      return (
        <ul className='exercises__list' key={exercise.id}>
          <Exercise
            exercise={exercise}
            isSelected={isSelected}
            setSelectedExercise={setSelectedExercise}
          />
        </ul>
      )
    })
  }

  return (
    <div className='exercises'>
      <SearchExercises onChange={handleSearch} value={searchText} />
      {renderExercises()}
    </div>
  )
}

export default Exercises
