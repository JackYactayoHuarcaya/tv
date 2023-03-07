import imgGrupoInfo from '../imgs/GrupoInfo.svg'
let Info = () => {
  return <>
    <div>
      <div className="container-grupoInfo mt-8">
        <div className='container-canal-text-grupo-a'>
          <div>
            <img className='img-grupo' src={imgGrupoInfo} alt="" />
          </div>
          <div>
            <div className='container-text-canal'>
              <p>Canal 39</p>
              <p>@canal_39</p>
            </div>
          </div>
        </div>
        <div>
          <div className='container-bttn-sigueme'>
            <a href="https://www.facebook.com/Canal39TvOficial">
              Sigueme
            </a>
          </div>
        </div>
      </div>
      <hr className='w-4/5 flex m-auto'/>
      <div className='container-texto-info-global'>
        <p className='text-gray-700'>
          Somos un canal de la provincia de CAÑETE Llamada CANAL 39, esta ubicada en san Vicente, calle los rosales 136 Llámenos al teléfono: 581228 o al celular: 996727079
        </p>
      </div>
    </div>
  </>
}
export default Info