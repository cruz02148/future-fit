// styles
import './styles.scss'

const SearchExercises = ({ onChange, value }) => (
  <div className='exercises__search'>
    <input
      onChange={onChange}
      placeholder='Search Exercises...'
      type='text'
      value={value}
    />
  </div>
)

export default SearchExercises
