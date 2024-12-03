
import { Outlet, useLoaderData } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {




  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <Outlet></Outlet>
      </section>


    </div>
  )
}

export default App
