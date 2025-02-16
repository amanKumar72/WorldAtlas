import Footer from "./Footer"
import Header from "./Header"
import {Outlet} from 'react-router-dom'
const AppLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout
