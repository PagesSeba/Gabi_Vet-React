import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Menu, MenuItem } from '@mui/material';
import "./NavBar.css"


function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };


    return(



        <header className="headerInicio navbar navbar-expand-lg">

            <div className="marca">
            <Link to={'/'} className="linkNV" alt="logo"><img src="logo.jpg" className="imgHeader"></img></Link>
            <p className="nombreMarca">PetClub</p>
            </div>
        <div class="container" id="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar navbar-nav">
                <li><Link to={'/'} className="linkNV"><Button className='navBtn nav-item'>Inicio</Button></Link></li>
                <li><Button   
                                className='navBtn nav-item'
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                Productos
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Link to={"/perro"}  className="linkNV"><MenuItem className="subMenuColor" onClick={handleClose}>Perros</MenuItem></Link>
                                <Link to={"/gato"}  className="linkNV"><MenuItem className="subMenuColor" onClick={handleClose}>Gatos</MenuItem></Link>
                                <Link to={"/accesorios"}  className="linkNV"><MenuItem className="subMenuColor" onClick={handleClose}>Accesorios</MenuItem></Link>
                            </Menu>
                            </li>
                <li><Link to={'/faqs'} className="linkNV nav-item"><Button className='navBtn'>Preguntas Frecuentes</Button></Link></li>
                <li><Link to={'/contacto'} className="linkNV nav-item"><Button className='navBtn'>Contacto</Button></Link></li>
                </ul>
                </div>
        </div>
                <CartWidget></CartWidget>
      </header>
    )
}

export default NavBar