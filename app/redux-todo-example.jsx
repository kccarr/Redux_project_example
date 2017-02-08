var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  searchText: "",
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);

var action = {
  type: "CHANGE_SEARCH_TEXT",
  searchText: "dog"
};

store.dispatch(action);
console.log("SearchText should be dog", store.getState());

// general rule of thumb for application names is thumbnail-transitio
// that they are uppercase and use _ for in between spaces
