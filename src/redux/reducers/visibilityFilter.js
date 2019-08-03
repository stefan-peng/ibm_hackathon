import { VisibilityFilters } from '../../const'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'DO_SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
    }
}

export default visibilityFilter
