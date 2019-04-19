import { 
  FETCHING_FRIENNDS ,
  FETCHING_SUCCESS ,
  FETCHING_FAILURE 
} from '../actions'

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

function reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true ,
        error: "This is an Error."
      }
    case FETCHING_SUCCESS: 
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        error: ""
      }
    case FETCHING_FAILURE: 
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      }

    default: 
      return state
  }
}

export default reducer;