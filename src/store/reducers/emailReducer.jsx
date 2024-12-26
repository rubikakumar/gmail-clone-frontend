const initialState = {
  inbox: [],
  sent: [],
  trash: [],
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_INBOX':
      return { ...state, inbox: action.payload };
    case 'SEND_EMAIL':
      return { ...state, sent: [...state.sent, action.payload] };
    case 'DELETE_EMAIL':
      return { ...state, trash: [...state.trash, action.payload] };
    default:
      return state;
  }
};

export default emailReducer;
