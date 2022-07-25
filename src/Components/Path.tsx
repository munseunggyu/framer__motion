import { motion } from "framer-motion";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { IoMdRefresh } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Box,Btn,refresh, Wrapper,Title, Next } from "./Animation";
import {  Prev } from "./Variants";

const Svg = styled(motion.svg)`
  width:200px;
  height:200px;
  path {
    stroke:white;  
  }
`

const svgVariants = {
  start:{
    fill:'rgba(255,255,255,0)',
    pathLength:0
  },
  end:{
    fill:'rgba(255,255,255,1)',
    pathLength:1,
  }
}

function Path(){
  const navigate = useNavigate()
  const nextPage = () => navigate('/animatepresences')
  const prevPage = () => navigate('/scroll')
  return (
  <Wrapper
    style={{
      background:'linear-gradient(RGB(0, 87, 254),RGB(0, 149, 255))'
    }}>
      <Box
        style={{backgroundColor:'#478aff',
        'display':'flex',
        'alignItems':"center",
        'justifyContent':"center",
      }}
      >
        <Svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        >
          <motion.path
          variants={svgVariants}
          initial='start'
          animate='end'
          transition={{
            default:{duration:3.5},
            fill:{
              delay:3.5,
              duration:2
            }
          }}
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z" 
          
        ></motion.path>
        </Svg>

      </Box>
      <Btn onClick={refresh}>
        <IoMdRefresh size='25' color="white" />
      </Btn>
      <Title>Path</Title>
      <Prev onClick={prevPage}>
        <ImArrowLeft size='40' color='white' />
      </Prev>
      <Next onClick={nextPage}>
          <ImArrowRight size='40' color='white' />
      </Next>

  </Wrapper>
  );
}

export default Path;