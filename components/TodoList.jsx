//import Post from "./post"
import Todos from "./todos"
import Addtodos from "./addtodos"
import {useRouter} from "next/navigation"
async function getData(){
let req= await fetch("https://json-api-swart.vercel.app/api/todo/list")
/* {method: 'GET',
mode: 'no-cors',}) */


//http://localhost:3001/api/todo/list
//https://jsonplaceholder.typicode.com/posts
//https://json-api-swart.vercel.app/api/todo/list
console.log(req)

return req.json()

}
export default async function TodoList(){

let posted= await getData()
return(
    <div>
        <h1>Todo List</h1>
       
        <Addtodos/>
        {   

    posted.todos.map((p)=>(
     <li key={p.id}> 
     <Todos  todo={p} />
     </li>
        ) 
    )
    }</div>
    )}