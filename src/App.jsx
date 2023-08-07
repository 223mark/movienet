
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='w-full bg-black  '>
    {/* <Header /> */}
      
      <Outlet />
      
    <Footer/>
    </div>
  )
}

export default App
