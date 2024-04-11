import { useState } from 'react'
import Input from './components/Input'


function App() {

  const [id, setId] = useState(0)
  const [text, setText] = useState('')

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="left-side">
            <h2>To Do List</h2>
          </div>
          <div className="right-side">
            <h3>Add a new task:</h3>
            <form>
                <Input label='Todo ID' value={id} placeholder='Enter the todo id...' /><br/>
                <Input label='Todo Text' value={text} placeholder='Enter the todo text...' />
                <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
