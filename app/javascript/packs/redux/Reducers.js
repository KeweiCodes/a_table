import { combineReducers } from 'redux';

function filters(state = {}, action) {
  switch (action.type) {
    case 'EDIT_FILTER':
      const { key, val } = action;
      return Object.assign({}, state, {
        [key]: val
      })
    default:
      return state
  }
}

function pageInfo(state = { page: 0, pageSize: 20 }, action){
  switch (action.type) {
    case 'CHANGE_PAGE':
      const { page, startCursor, endCursor } = action;
      let filterName = 'after';

      if (state.page > page) {
        filterName = 'before'
      }

      return Object.assign({}, state, {page, filterName, startCursor, endCursor})
    case 'CHANGE_PAGE_SIZE':
      const { pageSize } = action;
      return Object.assign({}, state, {pageSize, page: 0, startCursor: null, endCursor: null})
    case 'EDIT_FILTER':
      return Object.assign({}, state, {page: 0, startCursor: null, endCursor: null})
    default:
      return state
  }
}

export default combineReducers({
  filters,
  pageInfo
})