// export default function ToDo({ task, isDone, time }) {
//     if (isDone) {
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     return <li>To be done: {task}</li>
// }
// export default function ToDo({ task, isDone, time }) {
//   return isDone && <li>Done: {task} , Duration: {time}</li>
// }
// export default function ToDo({ task, isDone, time }) {
//   return isDone || <li>Pending: {task}</li>
// }

export default function ToDo({ task, isDone, time }) {
    let listItem ;
    const displayTime = time ? time :100;
    if (isDone) {
        listItem = <li>Done: {task} Duration: {displayTime}</li>
    }
    else {
        listItem = <li>To be done: {task}</li>
    } 
    return listItem;
}