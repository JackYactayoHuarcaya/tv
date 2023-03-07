import {createBrowserRouter} from 'react-router-dom'
import TvVivo from './screen/Tv'
import App from './App'
let router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/TV-VIVO",
    element:<TvVivo/>
  }
])
export default router