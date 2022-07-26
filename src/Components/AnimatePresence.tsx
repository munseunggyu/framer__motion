import { useState } from "react";
import { Box, Btn, Next, Title, Wrapper } from "./Animation";
import { AnimatePresence } from "framer-motion";
import { Prev } from "./Variants";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";
const boxVariants = {
  initial:{
    opacity:0,
    scale:0,
  },
  visible:{
    opacity:1,
    scale:1,
    rotateZ:360,
  },
  exit:{
    opacity:0,
    y:30
  }
}

function AnimatePresences(){
  const navigate = useNavigate()
  const nextPage = () => navigate('/slider')
  const prevPage = () => navigate('/path')
  const [showing,setShowing] = useState(true)
  const toggleShowing = () => {
    setShowing(prev => !prev)
  }
  return (
    <Wrapper
      style={{
        background:'linear-gradient(rgb(36, 136, 250),rgb(0, 195, 255))'
      }}
    >
      <AnimatePresence>  // 조건문 있을때 exit
      { showing ?
        <Box
          variants={boxVariants}
          initial='initial'
          animate='visible'
          exit='exit'
        /> : null
      }
      </AnimatePresence>
      <Btn 
        onClick={toggleShowing}
        style={{
          width:'50px',
          height:'50px',
          position:'absolute',
          bottom:'150px'
        }}
      >toggle</Btn>
      <Title>AnimatePresence</Title>
      <Prev onClick={prevPage}>
        <ImArrowLeft size='40' color='white' />
      </Prev>
      <Next onClick={nextPage}>
          <ImArrowRight size='40' color='white' />
      </Next>

    </Wrapper>
  );
}

export default AnimatePresences;