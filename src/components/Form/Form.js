import React from 'react';
import { TextField, CircularProgress, Modal, Button, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import "./Form.css"

const ariaLabel = { 'aria-label': 'description' };

export default function Form() {
  

    return(
        <Box
      component="form"
      sx={{'& > :not(style)': { m: 1 },}}
      noValidate
      autoComplete="off"
    >
        <form>
            <div>
                <TextField required className='formInput' placeholder='Nombre y Apellido' inputProps={ariaLabel} />
                <TextField required className='formInput' placeholder="Email" inputProps={ariaLabel} />
            </div>
            <div>
                <TextField required
                aria-label="maximun height"
                minRows={3}
                placeholder="Comentenos la razon de su contacto con nosotros aqui:"
                style={{ width: 450}}
                sx={{ mt: 2 }}
                />
            </div>
            <div className='formTerms'>
                <h5>Acepto los términos y condiciones de FutCor:</h5>
                <Checkbox required />
            </div>
            <div className='formBtn'>
                <Button sx={{ mr: 2 }}  variant="contained" color="error" type="reset">Borrar</Button>
                <Button sx={{ mr: 2 }}  variant="contained" color="success"  type="submit">Enviar</Button>
            </div>
        </form>
    </Box>
  );
}