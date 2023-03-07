import tvScreen from '../imgs/tv.svg'
import { Link } from 'react-router-dom'
let PlayerTv = () => {
  return <>
    <div className='bottom-container-tv'>
      <Link to={"/TV-VIVO"}> 
        <img src={tvScreen} alt="" style={{ zIndex: "100" }} />
      </Link>
    </div>
  </>
}
export default PlayerTv