export const getDiffultyLevel = (apiData) => {
  const mapLevelToDifficulty = {
    0: 'Beginner',
    1: 'Intermediate',
    2: 'Advanced',
    3: 'Expert'
  }

  return mapLevelToDifficulty[apiData.level]
}

export const getExerciseSide = (side) => {
  if (side.startsWith('left')) {
    return ' (L)'
  }

  if (side.startsWith('right')) {
    return ' (R)'
  }

  return ''
}
