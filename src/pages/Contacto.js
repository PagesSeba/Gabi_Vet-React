import Form from '../components/Form/Form'
import WppWidget from '../components/WppWidget/WppWidget';
import React, { useRef } from 'react';
import emailjs from "emailjs-com"
import { TextField, CircularProgress, Modal, Button, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "./../components/Form/Form.css"


const ariaLabel = { 'aria-label': 'description' };



const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("gmailMessage", "template_15p059q", form.current, "coWj-nTAV7r_XBBk-")
      .then((result) => {
          console.log(result.text);
          <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">Mensaje Enviado Con Éxito!</Alert>
        </Stack>
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
        <section className='form'>

        <h1 className='mb-5'>Contactá con Nosotros</h1>
        <form ref={form} onSubmit={sendEmail}>
            <div  className='formInput'>
                <TextField required placeholder='Nombre y Apellido' inputProps={ariaLabel} type="text" name="name" id='name' />
                <TextField required placeholder="Email" inputProps={ariaLabel}  type="email" name="email" id='email'/>
            </div>
            <div>
                <textarea required
                className='txtArea'
                minRows={3}
                placeholder="Comentenos la razon de su contacto con nosotros aqui:"
                fullWidth
                sx={{ mt: 2 }}
                type="text"
                name="message"
                id='message'
                />
            </div>
            <div className='formTerms'>
                <h5>Acepto los términos y condiciones de Gabilan:</h5>
                <Checkbox required />
            </div>
            <div className='formBtn'>
                <Button sx={{ mr: 2 }}  variant="contained" color="error" type="reset">Borrar</Button>
                <Button sx={{ mr: 2 }}  variant="contained" color="success"  type="submit" value="Send">Enviar</Button>
            </div>
        </form>
    </section>
  );
};


export default Contacto;