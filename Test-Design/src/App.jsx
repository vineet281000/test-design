import Sidebar from './components/main/Sidebar'
import Contact from './components/contact/Contact'


function App() {
 

  return (
    <>
     <div className="App">
        <Sidebar />
        <div className='content'>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
