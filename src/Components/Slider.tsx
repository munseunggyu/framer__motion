import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Box, Btn, Next, Title, Wrapper } from "./Animation";
import { Prev } from "./Variants";

const sliderVariants = {
  invisible:(back:boolean) => (
    {
      x: back ? -500 : 500,
    scale:0,
    opacity:0,
    }
  ),
  visible:{
    x:0,
    scale:1,
    opacity:1
  },
  exit:(back:boolean) => ({
    x: back ? 500 : -500,
    scale:0,
    opcity:0,
  })
}

function Slider(){
  const navigate = useNavigate()
  const prevPage = () => navigate('/animatepresences')
  const [visible,setVisible] = useState(1)
  const [back,setBack] = useState(false)
  const nxt = () => {
    setBack(false)
    setVisible(prev => prev ===6 ? 1 : prev +1)
  }
  const prv = () => {
    setBack(true)
    setVisible(prev => prev === 1 ? 6 : prev-1)
  }
  return(
    <Wrapper
      style={{
        background:'linear-gradient(rgb(36, 200, 250),rgb(0, 255, 213))'
        , flexDirection:'row'
      }}
    >
      <AnimatePresence
      // initial={false}
      custom={back}>
      {[1,2,3,4,5,6].map(v => {
        return(
          v===visible ? <Box 
          key={v}
          custom={back}
          variants={sliderVariants}
          initial='invisible'
          animate='visible'
          exit='exit'
          transition={{duration:1}}
          style={{position:'absolute'}}
          >
            {v}
          </Box> : null
        )
      })
      }
      </AnimatePresence>
      <Btn
        onClick={nxt}
        style={{
          width:'50px',
          height:'50px',
          position:'absolute',
          bottom:'100px'
        }}
      >Next</Btn>
      <Btn
        onClick={prv}
        style={{
          width:'50px',
          height:'50px',
          position:'absolute',
          bottom:'150px'
        }}
      >Prev</Btn>
       <Title>Variants</Title>
      <Prev onClick={prevPage}>
        <ImArrowLeft size='40' color='white' />
      </Prev>
    </Wrapper>
  )
}

export default Slider;