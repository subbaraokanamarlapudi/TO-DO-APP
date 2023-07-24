import { useState } from 'react';
import './App.css';

function App() {
  let [todoInput , updateInput] = useState('')

  let [todoList, updateTodos] = useState([
    // {
    //   id: 1,
    //   title: 'learn react.',
    // },
    // {
    //   id: 2,
    //   title: 'learn Angular.',
    // }
  ]);

  function addNewTodo() {
    if(todoInput === "")
    {
      alert("Please enter todo")
    }

    else{
      let newTodo = {
        id: todoList.length + 1,
        title: todoInput,
      };
  
      let newList = [...todoList, newTodo];
  
      updateTodos(newList);
      updateInput("")
    }
  }


  function deleteTodo(id)
  {
    let newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    });

    updateTodos(newTodoList);
  }

  
  return (
    <div className='Wrapper'>
          <div className="container mt-5 w-50">

          <h2 className="text-center">Todo App using React</h2>

      <div className="input-group">

        <input className="form-control" onChange={(e) => {
          let title = e.target.value;
          updateInput(title)
        }}type="text"  value={todoInput}/>

        <button onClick={addNewTodo} className="btn btn-primary">
          Add
        </button>

      </div>

      <h3 className='text-left'> TODAY WORK :</h3>

      <ul className="list-group mt-4">
        {todoList.map((todo) => {
          return (
          <li className="list-group-item" key={todo.id}>
            <p>{todo.title}</p>
            <button onClick={() => {
              deleteTodo(todo.id)
            }}className="btn">❌</button>

          </li>

        )})}
        
      </ul>
    </div>
    </div>
  );
}

export default App;




// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [todoInput, updateInput] = useState('');
//   const [todoList, updateTodos] = useState([]);

//   function addNewTodo() {
//     if (todoInput === '') {
//       alert('Please enter a todo');
//     } else {
//       const newTodo = {
//         id: todoList.length + 1,
//         title: todoInput,
//       };

//       const newList = [...todoList, newTodo];

//       updateTodos(newList);
//       updateInput('');
//     }
//   }

//   function deleteTodo(id) {
//     const newTodoList = todoList.filter((todo) => todo.id !== id);
//     updateTodos(newTodoList);
//   }

//   return (
//     <div className="container mt-5 w-50">
//       <h2 className="text-center">Todo App using React</h2>

//       <div className="input-group">
//         <input
//           className="form-control"
//           onChange={(e) => updateInput(e.target.value)}
//           type="text"
//           value={todoInput}
//         />
//         <button onClick={addNewTodo} className="btn btn-primary">
//           Add
//         </button>
//       </div>

//       <ul className="list-group mt-4">
//         {todoList.map((todo) => (
//           <li className="list-group-item" key={todo.id}>
//             <p>{todo.title}</p>
//             <button onClick={() => deleteTodo(todo.id)} className="btn">
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
