import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Box, Next, Title, Wrapper } from "./Animation";
import { BoxWrapper, Prev } from "./Variants";


const ScrollBoxWrapper = styled(motion.div)`
  background-color:rgba(0,0,0,0.2);
  width:300px;
  height:300px;
  border-radius:10%;
  overflow:hidden;
  margin-bottom:50px;
  display: flex;
  align-items:flex-end;
`

const ScrollBox = styled(motion.div)`
  background-color:white;
  width:inherit;
  height:inherit;
  transform-origin:50% 100%;
`

function Scroll(){
  const scroll = useMotionValue(0) 
  const {scrollYProgress} = useViewportScroll()
  const scale = useTransform(scrollYProgress,[0,1],[.2,2])
  const navigate = useNavigate()
  const nextPage = () => navigate('/path')
  const prevPage = () => navigate('/drag')
  return(
    <>
    <Wrapper
      style={{
        height:'200vh',
        background:'linear-gradient(RGB(66, 2, 254),RGB(10, 80, 254))'
      }}
    >
      <ScrollBoxWrapper
        style={{scale}}
      >
        <ScrollBox
          style={{scaleY:scrollYProgress}}
        />
      </ScrollBoxWrapper>
      <Title>
        Scroll
      </Title>        
      <Prev onClick={prevPage}>
       <ImArrowLeft size='40' color='white' />
      </Prev>
      <Next onClick={nextPage}>
      <ImArrowRight size='40' color='white' />
      </Next>
    </Wrapper>

  </>
  )
}

export default Scroll;