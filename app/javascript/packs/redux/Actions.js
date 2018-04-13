function editFilter(key, val){
  return {
    type: 'EDIT_FILTER',
    key,
    val
  }
}

function changePage(page, startCursor, endCursor){
  return {
    type: 'CHANGE_PAGE',
    page,
    startCursor,
    endCursor
  }
}

function changePageSize(pageSize){
  return {
    type: 'CHANGE_PAGE_SIZE',
    pageSize
  }
}

function pageLoaded(pageInfo){
  return {
    type: 'PAGE_LOADED',
    pageInfo
  }
}

export { editFilter, changePage, changePageSize, pageLoaded };