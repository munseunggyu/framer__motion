import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Box, Next, Title, Wrapper } from "./Animation";
import { Prev } from "./Variants";

function Gestures(){
  const navigate = useNavigate()
  const nextPage = () => navigate('/drag')
  const prevPage = () => navigate('/variants')
  return (
    <Wrapper
      style={{
        background:'linear-gradient(RGB(152, 16, 254),RGB(119, 0, 255))'
        }}
    >
      <Box
        whileHover={{
          rotateZ:90,
        }}
        whileTap={{
          scale:.7,
          borderRadius:'50%',
        }}
      />
      <Title>
        Gestures
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

export default Gestures;