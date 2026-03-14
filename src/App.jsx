import { useState, useContext, createContext } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const contextBlock = createContext();

function BasicButton() {
  const {color, setColor} = useContext(contextBlock);
  const hexChars = [
    '0','1','2','3','4','5','6','7','8','9',
    'A','B','C','D','E','F'
  ];
  let finalColor = '#';
  for(let a=0; a<6; a++) {
    finalColor += hexChars[Math.floor(Math.random() * hexChars.length)]
  }
  const handleClick = () => {
    setColor(finalColor);
  }
  return (
    <Button variant="outlined" sx={{
      borderColor: color,
      color: color,
      borderRadius: '14px',
      p: 1,
      cursor: 'pointer',
      m: 2,
      fontWeight: 'bold',
      fontSize: '15px'
    }} onClick={handleClick}>Change Color</Button>
  );
}


function BoxBasic() {
  const {color} = useContext(contextBlock);
  return (
    <Box component="section" sx={{
      m: 2,
      border: "1px solid black",
      width: "400px",
      height: "100px",
      backgroundColor: color,
      borderRadius: '10px 10px 0 0'
    }}>
    </Box>
  );
}

function SubBoxBasic() {
  const {color, setColor} = useContext(contextBlock);
  return (
    <Box component="section" sx={{ 
      m: 2,
      p: 3,
      border: `2px solid ${color}`,
      textAlign: 'center',
      borderRadius: '0 0 10px 10px'
    }}>
      Color: <span style={{
        fontWeight: 'bold',
        fontSize: '1.25em',
        marginLeft: '5px'
      }}>{color}</span> <br />
      <BasicButton />
    </Box>
  );
}


function App() {

  const [color, setColor] = useState("#000000");

  return (
    <>
      <contextBlock.Provider value={{color, setColor}}>
        <BoxBasic />
        <SubBoxBasic />
      </contextBlock.Provider>
    </>
  );
}

export default App
