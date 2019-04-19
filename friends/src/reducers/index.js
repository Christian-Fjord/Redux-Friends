import { FETCHING_FRIENNDS  } from '../actions'

const initialState = {
  friends: [] ,
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true
      }

    default: 
      return state
  }
}