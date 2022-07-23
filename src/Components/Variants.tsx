import { motion } from "framer-motion";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { IoMdRefresh } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Btn, Next, refresh, Title, Wrapper } from "./Animation";

export const BoxWrapper = styled(motion.div)`
background-color:rgba(0,0,0,0.2);
  width:300px;
  height:300px;
  border-radius:30px;
  margin-bottom:50px;
  display: grid;
  grid-template-columns:repeat(2,1fr);
  overflow:hidden;
  place-items:center;
`
const Ball = styled(motion.div)`
  width:70%;
  height:70%;
  background-color:whitesmoke;
  border-radius:50%;
`
export const Prev = styled.div`
  position:fixed;
  right:100px;
  bottom:30px;
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
  const navigate = useNavigate()
  const nextPage = () => navigate('/gestures')
  const prevPage = () => navigate('/')
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
      <Prev onClick={prevPage}>
        <ImArrowLeft size='40' color='white' />
      </Prev>
      <Next onClick={nextPage}>
       <ImArrowRight size='40' color='white' />
      </Next>
    </Wrapper>
  );
}

export default Variants;