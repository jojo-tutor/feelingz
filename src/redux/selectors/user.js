import { createSelector } from 'reselect'

export default createSelector(
  state=> state.user,
  state=> state.error,
  (user, error)=> {
    return {
      user: {
        data: user.data,
        list: user.list
      },
      error: error.data
    }
  }
)
