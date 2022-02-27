

export const deleteItem = (id, shown, activeTodos, setActiveTodos, deletedTodos, setDeletedTodos, completedTodos, setCompletedTodos, setListOfTodos) => {
  const delList = deletedTodos.slice();
  if (shown === "active") {
    const actlist = activeTodos.slice();
    const delItem = actlist.splice(id, 1)[0];
    setListOfTodos(actlist);
    setActiveTodos(actlist);
    delList.push(delItem);
    setDeletedTodos(delList);
    localStorage.setItem("active", JSON.stringify(actlist));
    localStorage.setItem("deleted", JSON.stringify(delList));
  }
  else if (shown === "deleted") {

    delList.splice(id, 1);
    setDeletedTodos(delList);
    setListOfTodos(delList);
    localStorage.setItem("deleted", JSON.stringify(delList));
  }
  else {
    const compList = completedTodos.slice();
    compList.splice(id, 1);
    setCompletedTodos(compList);
    setListOfTodos(compList);
    localStorage.setItem("completed", JSON.stringify(compList));
  }
}

export const completeItem = (id, shown, activeTodos, setActiveTodos, deletedTodos, setDeletedTodos, completedTodos, setCompletedTodos, setListOfTodos) => {
  const actList = activeTodos.slice();
  const compList = completedTodos.slice();

  if (shown === "active") {
    const compItem = actList.splice(id, 1)[0];
    setListOfTodos(actList);
    setActiveTodos(actList);
    compList.push(compItem);
    setCompletedTodos(compList);
    localStorage.setItem("active", JSON.stringify(actList));
    localStorage.setItem("completed", JSON.stringify(compList));
  }
  else if (shown === "deleted") {
    const delList = deletedTodos.slice();

    const resumeItem = delList.splice(id, 1)[0];
    setDeletedTodos(delList);
    setListOfTodos(delList);
    actList.push(resumeItem);
    setActiveTodos(actList);
    localStorage.setItem("active", JSON.stringify(actList));
    localStorage.setItem("deleted", JSON.stringify(delList));
  }
  else {
    const resumeItem = compList.splice(id, 1)[0];
    actList.push(resumeItem);
    setActiveTodos(actList);
    setCompletedTodos(compList);
    setListOfTodos(compList);
    localStorage.setItem("active", JSON.stringify(actList));
    localStorage.setItem("completed", JSON.stringify(compList));
  }
}

export const setLists = (setLOT, setAT, setDT, setCT) => { 
if (localStorage["active"]) {
  setLOT(JSON.parse(localStorage["active"]));
  setAT(JSON.parse(localStorage["active"]));
}
if (localStorage["deleted"])
  setDT(JSON.parse(localStorage["deleted"]));
if (localStorage["completed"])
  setCT(JSON.parse(localStorage["completed"]));
}
