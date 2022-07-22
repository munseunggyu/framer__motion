import { motion } from "framer-motion";
import styled from "styled-components";
import {IoMdRefresh} from 'react-icons/io'

export const Wrapper = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:relative;
`;

const Box = styled(motion.div)`
  background-color:whitesmoke;
  width:300px;
  height:300px;
  border-radius:20px;
  margin-bottom:50px;
`;

const Btn = styled.div`
  background-color:rgba(0,0,0,0.2);
  outline:none;
  display: flex;
  align-items:center;
  justify-content:center;
  width:40px;
  height:40px;
  border-radius:50%;
`

const Title = styled.div`
  position:absolute;
  font-size:50px;
  font-weight:700;
  color:white;
  bottom:30px;
  left:30px;
`

const BoxVariants = {
  start :{
    scale:0,
  },
  nomal:{
    scale:1,
    rotateZ:180,
    transition:{
      duration:.5,
      type:'spring'
    }

  }
}

function Animation(){
  const refresh = () => window.location.reload()
  return (
    <Wrapper 
    style={{
        background:'linear-gradient(#e09,#d0e)'
    }}
    >
     <Box
     variants={BoxVariants}
     initial='start'
     animate='nomal'
     />
     <Btn onClick={refresh}> 
     <IoMdRefresh size='25' color="white" />
     </Btn>
     <Title>Animation</Title>
    </Wrapper>
  );
}

export default Animation;