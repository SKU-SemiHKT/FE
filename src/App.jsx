import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RootLayout from "./layout/RootLayout"
import Home from './pages/home/Home';
import BettingMain from './pages/betting/BettingMain'
import BettingDetail from "./pages/betting/BettingDetail";
import Shop from './pages/shop/Shop'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element = {<RootLayout/>}>
          <Route path = "/" element ={<Home/>} />
          <Route path = "/BettingMain" element ={<BettingMain/>} />
          <Route path = "/BettingMain/:bettingId" element ={<BettingDetail/>} />
          <Route path = "/Shop" element ={<Shop/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
} 