import img1 from '../imgs/slider/prueba-hd-1.jpg'
import img2 from '../imgs/slider/prueba-hd-2.jpg'
import img3 from '../imgs/slider/prueba-hd-3.jpg'
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

let intervalSlider: any;
let Slider = () => {
  const [nombrePrograma, setNombrePrograma] = useState("RAMPAGE")
  const containerImgs: HTMLElement | any = useRef()
  useEffect(() => {
    let actionSlider = () => {
      intervalSlider = setInterval(() => {
        try {
          let x = containerImgs.current.children[0]
          setNombrePrograma(containerImgs.current.children[1].alt)
          containerImgs.current.style.marginLeft = `-100%`
          containerImgs.current.style.transition = "1.5s"
          setTimeout(() => {
            containerImgs.current.append(x)
            containerImgs.current.style.marginLeft = "0%"
            containerImgs.current.style.transition = "0s"
          }, 1500);
        } catch (error) {
          clearInterval(intervalSlider)
        }

      }, 4000)
    }
    actionSlider()
    return () => { };
  }, [])
  return <>
    <div className="containerSliderImg">
      <div className='containerSonSlider'>
        <div className='containerSlider'>
          <div ref={containerImgs}>
            <img src={img1} alt="RAMPAGE" />
            <img src={img2} alt="MARIO BROS" />
            <img src={img3} alt="SPIDER-MAN" />
          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center mt-4 mb-4'>
      <p className='font-sans text-3xl text-gray-800'>
        {
          nombrePrograma
        }
      </p>
    </div>
  </>
}
export default Slider