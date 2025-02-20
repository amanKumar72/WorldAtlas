import Footer from "./Footer"
import Header from "./Header"
import {Outlet} from 'react-router-dom'
const AppLayout = () => {
  return (
    <div className="w-full h-full px-2 py-2 md:px-6 md:py-3 bg-black text-white">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
