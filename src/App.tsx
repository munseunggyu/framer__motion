import { Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import AnimatePresences from './Components/AnimatePresence';
import Animation from './Components/Animation';
import Drag from './Components/Drag';
import Gestures from './Components/Gestures';
import Path from './Components/Path';
import Scroll from './Components/Scroll';
import Slider from './Components/Slider';
import Variants from './Components/Variants';
const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1.2;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
 box-sizing:border-box;
}
`

function App() {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Animation />} />
		<Route path='variants' element={<Variants /> } />
		<Route path='gestures' element={<Gestures /> } />
		<Route path='drag' element={<Drag /> } />
		<Route path='scroll' element={<Scroll /> } />
		<Route path='path' element={<Path /> } />
		<Route path='animatepresences' element={<AnimatePresences /> } />
		<Route path='slider' element={<Slider /> } />
	  </Routes>
    </>
  );
}

export default App;
