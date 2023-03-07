import facebook from '../imgs/iconRedesS/facebook.svg'
import whatsapp from '../imgs/iconRedesS/whatsapp.svg'
import youtube from '../imgs/iconRedesS/youtube.svg'

let RedesSociales = () => {
  return <>
    <div className='container-redes-sociales-a-links'>
      <div>
        <a href="https://www.facebook.com/Canal39TvOficial"
          target={"_blank"}>
          <img src={facebook} alt="" />
        </a>
      </div>
      <div>
        <a href="wa.me/51933762655/?text=Hola"
          target={"_blank"}>
          <img src={whatsapp} alt="" />
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/user/WMTvCanal39/videos" target={"_blank"}>
          <img src={youtube} alt="" />
        </a>
      </div>
    </div>
  </>
}
export default RedesSociales