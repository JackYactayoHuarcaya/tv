import Info from './components/Info'
import PlayerTv from './components/Player'
import RedesSociales from './components/RedesSocial'
import Slider from './components/Slider'
import imageLogo from './imgs/39TVLOGO.svg'

let App = () => {
  return (
    <div className='container'>
      <div className=" container-app">
        <div className="container-full-app">
          <section className="bg-gray-900 section-1-app">
            <div className='container-img'>
              <img className='imgLogo-first' src={imageLogo} alt="Canal 39" />
            </div>
          </section>
          <section className="section-2-app">
            <div className='container-section-2'>
              <section>
                <Slider />
              </section>
              <hr className='w-4/5 flex m-auto' />
              <section>
                <Info />
              </section>
              <section className='container-app-links-redes-sociales'>
                <RedesSociales />
              </section>
            </div>
            <div className='tv-en-vivo-screen fixed bottom-4 right-4'>
              <PlayerTv />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
