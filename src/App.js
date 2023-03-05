
import "./App.css"

import Home from "./components/Home"
import Whysafe from "./components/Whysafe"
import Secure from "./components/Secure"
import Get from "./components/Get"
import Footer from "./components/Footer"

function App() {
  return (
    <div className=' w-full overflow-hidden '>
      <Home />
      <Whysafe />
      <Secure />
      <Get />
      <Footer/>
    </div>
  )
}

export default App
