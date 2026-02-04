import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Settings from './pages/settings'
import User from './pages/user'
import Login from './pages/login'
import Privateroute from './components/Privateroute'


const App = () => {
  return (
  
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route element={<Privateroute/>}>
                    <Route path='/settings' element={<Settings/>}></Route>
                    <Route path='/user/kiruthick' element={<User/>}></Route>
                </Route>

            </Routes>
         </BrowserRouter>
 
  )
}

export default App
