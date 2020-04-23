const initialState = {
  lang: "en_US",
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        lang: action.lang,
      }
    default:
      return state
  }
}
