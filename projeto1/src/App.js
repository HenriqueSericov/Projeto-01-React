
import{useState, useEffect, useRef} from 'react';
import './App.css'; 
import { motion } from 'framer-motion'

import image1 from '../src/img/1.jpg'
import image2 from '../src/img/2.jpg'
import image3 from '../src/img/3.jpg'
import image4 from '../src/img/4.jpg'

const images = [image1, image2, image3, image4]

function App() {
const carousel= useRef();
const [width, setWidth] = useState(0)

useEffect(() => {
 console.log(console.current?.scrollWidth, carousel.current?.offsetWidth)
 setWidth(console.current?.scrollWidth - carousel.current?.offsetWidth)
}, [])


  return (
    <div className="App">

      <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
        <motion.div 
        className='inner'
        drag="x"
        dragConstraints={{right: 0, left: -width}}
        initial = {{x: 100}}
        animate = {{x:0}}
        transition={{duration:0.8}}
        >

          {images.map(images => (
            <motion.div className='item' key={images}>
              <img src={images} alt="Texto Alt"/>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

    </div>
  );
}

export default App