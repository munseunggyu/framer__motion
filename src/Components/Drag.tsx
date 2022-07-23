import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Box, Next, Title, Wrapper } from "./Animation";
import { BoxWrapper, Prev } from "./Variants";

const SmallBox = styled(motion.div)`
  width:200px;
  height:200px;
  background-color:whitesmoke;
  border-radius:20%;
`

function Drag(){
  const navigate = useNavigate()
  const nextPage = () => navigate('/scroll')
  const prevPage = () => navigate('/gestures')
  // const x = useMotionValue(0) 
  // const scale = useTransform(x,[-800,0,800],[2,1,0.1])
  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()))
  // },[x])
  const ref = useRef(null);
  return (
    <Wrapper
      style={{
        background:'linear-gradient(RGB(117, 0, 255),RGB(70, 0, 255))'
        }}
    >
      <BoxWrapper 
      ref={ref}
      style={{backgroundColor:'RGB(133, 56, 255)'}}>
        <SmallBox 
        // style={{x,scale}}
        drag
        dragConstraints={ref}
        />
      </BoxWrapper>
      <Title>
        Drag
      </Title>
      <Prev onClick={prevPage}>
       <ImArrowLeft size='40' color='white' />
      </Prev>
      <Next onClick={nextPage}>
      <ImArrowRight size='40' color='white' />
      </Next>
    </Wrapper>
  );
}

export default Drag;