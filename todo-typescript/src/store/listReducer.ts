//import { ADD_TODO, CHANGE_LIST, DELETE_TODO, COMPLETE_TODO } from '../utils/constants';
import { State, Shown, ActionTypes, Action } from '../types/todo';

const initialState: State = {
  activeTodos: localStorage["active"] ? JSON.parse(localStorage["active"]) : [],
  deletedTodos: localStorage["deleted"] ? JSON.parse(localStorage["deleted"]) : [],
  completedTodos: localStorage["completed"] ? JSON.parse(localStorage["completed"]) : [],
  shown: Shown.ACTIVE,
  listOfTodos: localStorage["active"] ? JSON.parse(localStorage["active"]) : [],
}

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const newlist = state.activeTodos.slice();
      newlist.push(action.item);

      localStorage.setItem("active", JSON.stringify(newlist));
      return { ...state, activeTodos: newlist, listOfTodos: newlist }

    case ActionTypes.DELETE_TODO:
      const delList = state.deletedTodos.slice();
      if (state.shown === "active") {
        const actList = state.activeTodos.slice();
        const delItem = actList.splice(action.id, 1)[0];
        delList.push(delItem);

        localStorage.setItem("active", JSON.stringify(actList));
        localStorage.setItem("deleted", JSON.stringify(delList));
        return { ...state, listOfTodos: actList, activeTodos: actList, deletedTodos: delList }
      }
      else if (state.shown === "deleted") {
        delList.splice(action.id, 1);

        localStorage.setItem("deleted", JSON.stringify(delList));
        return { ...state, listOfTodos: delList, deletedTodos: delList }
      }
      else {
        const compList = state.completedTodos.slice();
        compList.splice(action.id, 1);

        localStorage.setItem("completed", JSON.stringify(compList));
        return { ...state, listOfTodos: compList, completedTodos: compList }
      }

    case ActionTypes.COMPLETE_TODO:
      const actList = state.activeTodos.slice();
      const compList = state.completedTodos.slice();

      if (state.shown === "active") {
        const compItem = actList.splice(action.id, 1)[0];
        compList.push(compItem);

        localStorage.setItem("active", JSON.stringify(actList));
        localStorage.setItem("completed", JSON.stringify(compList));
        return { ...state, listOfTodos: actList, activeTodos: actList, completedTodos: compList }
      }
      else if (state.shown === "deleted") {
        const delList = state.deletedTodos.slice();
        const resumeItem = delList.splice(action.id, 1)[0];
        actList.push(resumeItem);

        localStorage.setItem("active", JSON.stringify(actList));
        localStorage.setItem("deleted", JSON.stringify(delList));
        return { ...state, listOfTodos: delList, deletedTodos: delList, activeTodos: actList }
      }
      else {
        const resumeItem = compList.splice(action.id, 1)[0];
        actList.push(resumeItem);

        localStorage.setItem("active", JSON.stringify(actList));
        localStorage.setItem("completed", JSON.stringify(compList));
        return { ...state, listOfTodos: compList, completedTodos: compList, activeTodos: actList }
      }

    case ActionTypes.CHANGE_LIST:
      return {
        ...state,
        shown: action.shown,
        listOfTodos: action.shown === 'active' ? state.activeTodos : action.shown === 'deleted' ? state.deletedTodos : state.completedTodos
      }
    default:
      return state;
  }
}

export default reducer;
