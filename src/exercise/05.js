// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'


function Box({size, style, ...message}){
  const className = size ? `box--${size}` :''
  return (
    <div 
    className={className} 
    style={style}
      {...message}
      />
  );
}

const smallBox = <Box size='small' style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</Box>
const mediumBox = <Box size='medim'  style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</Box>
const largeBox = <Box size='large'  style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</Box>



function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
