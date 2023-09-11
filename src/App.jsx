import AppRouter from "./AppRouter"
import Sidebar from "./components/Sidebar/Sidebar"

import "./App.css" 
const App = () => {

  return (
    <div className="main-container">
      <Sidebar/>
      <AppRouter/>
    </div>
  )
}

export default App
