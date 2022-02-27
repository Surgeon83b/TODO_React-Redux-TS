export interface State {
  activeTodos: string[];
  deletedTodos: string[];
  completedTodos: string[];
  shown: Shown;
  listOfTodos: string[];
}

export enum ActionTypes {
  ADD_TODO = 'ADD_TASK',
  DELETE_TODO = 'DELETE_TASK',
  COMPLETE_TODO = 'COMPLETE_TASK',
  CHANGE_LIST = 'CHANGE_LIST',
}

export enum Shown {
  ACTIVE = "active",
  DELETED = "deleted",
  COMPLETED = "completed"
}

interface ActionADD_TODO {
  type: ActionTypes.ADD_TODO;
  id: number;
  item: string;
}

interface ActionDELETE_TODO {
  type: ActionTypes.DELETE_TODO;
  id: number;
  item: string;
}

interface ActionCOMPLETE_TODO {
  type: ActionTypes.COMPLETE_TODO;
  id: number;
  item: string;
}

interface ActionCHANGE_LIST {
  type: ActionTypes.CHANGE_LIST;
  shown: Shown;
}

export type Action = ActionADD_TODO | ActionDELETE_TODO | ActionCOMPLETE_TODO | ActionCHANGE_LIST;
