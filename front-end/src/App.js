import React, { useReducer, useContext, useState, useEffect } from 'react';
import Task from './components/Task'

const API = 'http://127.0.0.1:8080/api'


const initialState = {
  loading: true,
  error: '',
  taksList: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        erorr: '',
        taksList: action.payload
      }
    case "ADD-TASK":
      return {
        ...state,
        taksList: [...state.taksList, { id: Date.now(), title: action.payload }]
      }

    case "REMOVE-TASK":
      const temp = state.taksList
      console.log('debugging temp:------', temp);
      return {
        ...state,
        taksList: temp.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}

const Context = React.createContext();


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(resp => dispatch({ type: 'FETCH_SUCCESS', payload: resp }))
  }, [])

  return (
    < Context.Provider value={dispatch}>
      <div className="w-screen mt-20 grid place-items-center">
        <div className="w-2/3 p-8 shadow-lg">
          <h1 className="m-10">TODO LIST</h1>
          <input
            type="text"
            placeholder="read a book"
            className="shadow p-3 mx-4"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button
            className="mb-10 px-6 py-2  shadow-lg bg-gray-50"
            onClick={() => {
              dispatch({ type: 'ADD-TASK', payload: inputValue })
              setInputValue('')
            }}
          >Add Task</button>
          {/* {state.loading ? 'Loading' : JSON.stringify(state, null, 2)} */}
          {console.log('current state: ', state)}
          {state.loading ? 'Loading' : <TaskList items={state.taksList} />}
        </div>
      </div>
    </Context.Provider>
  );
}
export default App;



const TaskList = ({ items }) => {
  return items.map(item => <Task key={item.id} context={Context} {...item} />)

}

