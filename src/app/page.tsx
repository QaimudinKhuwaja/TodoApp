import TodoApp from "./components/Todo";


export default function App(){
  return(
  <>
  <div className="bg-black h-[900px] w-full text-center">
    <h1 className="md:text-[40px] text-[30px] text-yellow-500 p-2">My Todo List</h1>

  <TodoApp/>
  </div>
 
  </>
   
  )
}