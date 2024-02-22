function solution(todo_list, finished) {
    const todoArr = todo_list.map((el,i) =>{ return  {todo : el, finish : finished[i]}})
    
    return todoArr.filter((el) => el.finish === false).map((el) => {return el.todo});
}