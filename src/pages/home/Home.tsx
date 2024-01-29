import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { Outlet } from "react-router-dom"
import './home.scss'
export default function Home() {
  return (
    <div className="home_page">
        <Navbar/>
        <div className="home_page_body">
            <div className="content">
                body
                <Outlet/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
