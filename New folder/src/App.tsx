import Route from '@/routes/Route'
import { useEffect } from 'react'
import { api } from './services/apis'
import { useDispatch } from 'react-redux'
import { userAction } from './stores/slices/user.slice'
export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      api.userApi.getData()
      .then(res => {
        dispatch(userAction.setData(res.data.data))
      })
    }catch(err) {
      localStorage.removeItem("token")
    }
  }, [])
  return ( 
    <Route/>
  )
}
