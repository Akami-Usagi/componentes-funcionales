import React from "react";
import {Button, TextField, Switch, FormGroup, FormControlLabel} from "@mui/material"
import { useState} from "react";

export default function FormSignUp(props){

    

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [promo, setPromo] = useState(false);
    const [news, setNews] = useState(false);
         
    const {handleSubmit} = props;

    const [errors, setErrors] = useState({
        name: {
            error: false,
            mesaje: "nombre de usuario incorrecto"
        }
    });

    const validarNombre = (nombre) => {
        if (nombre.length >= 3 ) {
            return {name:{
                error: false,
                mesaje: ""
            }}
        }else{
            return {name:{
                error: true,
                mesaje: "nombre de usuario incorrecto"
            }}
        }
    }
      
    
    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
            const valores = {
                nombre,
                apellido,
                email,
                promo,
                news
            }
            handleSubmit(valores)
        }}>
            
            <TextField id="name" type="text" label="Nombre" fullWidth margin="normal" value={nombre} error={errors.name.error} helperText={errors.name.error ? errors.name.mesaje : ""} onChange={(event)=>{
                setNombre(event.target.value)
                
            }} onBlur={(event) =>{
                setErrors(validarNombre(event.target.value)); 
            }}/>
            
            <TextField id="lastName" type="text" label="Apellidos" fullWidth margin="normal" value={apellido} onChange={(event)=>{
                setApellido(event.target.value)
                
            }}/>
            
            <TextField id="email" type="Email" label="Correo Electronico" fullWidth margin="normal" value={email} onChange={(event)=>{
                setEmail(event.target.value)
                
            }}/>

            <FormGroup>
                    
                <FormControlLabel control={<Switch defaultChecked={promo} checked={promo} onChange={(event) => {
                    setPromo(event.target.checked);
                    
                }}/>} label="Promociones"/>
                    
                <FormControlLabel control={<Switch defaultChecked={news} checked={news} onChange={(event)=>{
                    setNews(event.target.checked)
                }}/>} label="Novedades"/>

            </FormGroup>
            <Button variant="contained" type="submit">Registrarse</Button>

            
        </form>
    )
}