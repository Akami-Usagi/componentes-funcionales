import './App.css';
import FormSignUp from './components/formSignUp';
import { Container, Typography } from '@mui/material';


function App() {

  const handleSubmit = (valores) =>{
    console.log("desde app js", valores);
    
  }

  

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align='center'>Formulario Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit}/>
      
    </Container>
  );
}

export default App;
