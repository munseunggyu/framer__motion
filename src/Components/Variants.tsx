import { motion } from "framer-motion";
import { ImArrowRight } from "react-icons/im";
import { IoMdRefresh } from "react-icons/io";
import styled from "styled-components";
import { Btn, Next, refresh, Title, Wrapper } from "./Animation";

const BoxWrapper = styled(motion.div)`
background-color:rgba(0,0,0,0.2);
  width:300px;
  height:300px;
  border-radius:20px;
  margin-bottom:50px;
  display: grid;
  grid-template-columns:repeat(2,1fr);
  place-items:center;
`
const Ball = styled(motion.div)`
  width:70%;
  height:70%;
  background-color:whitesmoke;
  border-radius:50%;
`
const ballWrapperVariants = {
  hidden :{
    scale:0,
  },
  visible:{
    scale:1,
    transition:{
      duration:.3,
      delayChildren:.4,
      staggerChildren:.2
    }
  }
}
const ballVariants = {
  hidden:{
    opacity:0,
    y:20,
  },
  visible:{
    opacity:1,
    y:0,
  }
}

function Variants(){
  return (
    <Wrapper 
      style={{background:'linear-gradient(RGB(218, 0, 238),RGB(165, 14, 252))'}}    
    >
      <BoxWrapper
        variants={ballWrapperVariants}
        initial='hidden'
        animate='visible'
      >
        {
          [1,2,3,4].map(v => 
            <Ball
              variants={ballVariants}
            />
            )
        }
      </BoxWrapper>
      <Btn onClick={refresh}>
        <IoMdRefresh size='25' color="white" />
      </Btn>
      <Title>Variants</Title>
      <Next>
       <ImArrowRight size='40' color='white' />
      </Next>
    </Wrapper>
  );
}

export default Variants;