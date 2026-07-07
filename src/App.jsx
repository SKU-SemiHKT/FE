import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RootLayout from "./layout/RootLayout"
import Home from './pages/home/Home';
import Betting from './pages/betting/Betting'
import Shop from './pages/shop/Shop'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element = {<RootLayout/>}>
          <Route path = "/" element ={<Home/>} />
          <Route path = "/Betting" element ={<Betting/>} />
          <Route path = "/Shop" element ={<Shop/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
} 