import { Store } from "@/stores"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import './admin.scss'
export default function Admin() {
    const [menuState, setMenuState] = useState(false);
    const userStore = useSelector((store: Store) => store.userStore);
    useEffect(() => {
        if (!userStore.data) {
            window.location.href = "/"
        }
    }, [userStore])
    return (
        <>
            {
                userStore.data?.role == "admin" ? (
                    <div style={{color: 'black'}} className='admin_page'>
                        <Navbar menuState={menuState} setMenuState={setMenuState}/>
                        <Container menuState={menuState}/>
                    </div>
                ) : (
                    <span>Không có quyền truy cập</span>
                )
            }

        </>
    )
}
