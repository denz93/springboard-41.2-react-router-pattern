import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
export default function Error() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  })
  return <div>Page not found</div>
}