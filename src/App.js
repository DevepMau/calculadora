import './App.css';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/BackspaceOutlined';

function App() {

  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      margin: '10px 10px',
      '& fieldset': {
        borderColor: 'white',
        borderRadius: '15px',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& input': {
      color:'white',
      fontSize: '30px',
      textAlign: 'right',
      fontFamily: 'Roboto',
    },
  });

  const NumberButton = styled(Button)({
    backgroundColor: 'orange',
    color: 'white',
    '&:hover': {
      backgroundColor: 'yellow',
    },
  });

  const OperatorButton = styled(Button)({
    backgroundColor: 'salmon',
    color: 'white',
    '&:hover': {
      backgroundColor: 'pink',
    },
  });

  const FunctionButton = styled(Button)({
    backgroundColor: 'gray',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkgray',
    },
    '&.icon': {
      width: '70px', // Ajusta el ancho del botón con ícono para que coincida con los otros botones
      height: '70px', // Ajusta el alto del botón con ícono para que coincida con los otros botones
      '& .MuiSvgIcon-root': {
        width: '40px', // Ajusta el ancho del ícono dentro del botón
        height: '40px', // Ajusta el alto del ícono dentro del botón
      },
    },
  });

  const [textFieldValue, setTextFieldValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'D') {
      setTextFieldValue(textFieldValue.slice(0, -1)); // Borra el último elemento
    } else if (value === 'C') {
      setTextFieldValue(''); // Borra todo
    } else if (value === '=') {
      // Calcula la expresión en el TextField
      try {
        // eslint-disable-next-line
        setTextFieldValue(eval(textFieldValue).toString());
      } catch (error) {
        setTextFieldValue('Error'); // Maneja errores de expresión
      }
    } else {
      setTextFieldValue(textFieldValue + value);
    }
  };

  return (
    <Box className='App'>
      <div className="Calculator">
        <CssTextField className='TextField' value={textFieldValue} id="custom-css-outlined-input" autoComplete='off' />
        <br />
          <FunctionButton onClick={() => handleButtonClick('C')}>C</FunctionButton>
          <OperatorButton onClick={() => handleButtonClick('(')}>(</OperatorButton>
          <OperatorButton onClick={() => handleButtonClick(')')}>)</OperatorButton>
          <OperatorButton onClick={() => handleButtonClick('/')}>/</OperatorButton>
        <br />
          <NumberButton onClick={() => handleButtonClick('7')}>7</NumberButton>
          <NumberButton onClick={() => handleButtonClick('8')}>8</NumberButton>
          <NumberButton onClick={() => handleButtonClick('9')}>9</NumberButton>
          <OperatorButton onClick={() => handleButtonClick('*')}>x</OperatorButton>
        <br />
          <NumberButton onClick={() => handleButtonClick('4')}>4</NumberButton>
          <NumberButton onClick={() => handleButtonClick('5')}>5</NumberButton>
          <NumberButton onClick={() => handleButtonClick('6')}>6</NumberButton>
          <OperatorButton onClick={() => handleButtonClick('-')}>-</OperatorButton>
        <br />
          <NumberButton onClick={() => handleButtonClick('1')}>1</NumberButton>
          <NumberButton onClick={() => handleButtonClick('2')}>2</NumberButton>
          <NumberButton onClick={() => handleButtonClick('3')}>3</NumberButton>
          <OperatorButton onClick={() => handleButtonClick('+')}>+</OperatorButton>
        <br />
          <FunctionButton onClick={() => handleButtonClick('.')}>,</FunctionButton>
          <NumberButton onClick={() => handleButtonClick('0')}>0</NumberButton>
          <FunctionButton onClick={() => handleButtonClick('D')} className='icon' ><DeleteIcon /></FunctionButton>
          <FunctionButton onClick={() => handleButtonClick('=')}>=</FunctionButton>
      </div>
    </Box>
  );
}

export default App;
