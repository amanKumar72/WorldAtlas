import Footer from "./Footer"
import Header from "./Header"
import {Outlet} from 'react-router-dom'
const AppLayout = () => {
  return (
    <div className="w-full h-full  py-2 md:py-3 bg-black text-white">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
