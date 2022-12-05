import React, { useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { photo1, photo2, photo3,photo4 } from '../../assets/index'
import foto5 from '../../assets/Images/LauraVictoriaMartinez5.jpg'
import foto6 from '../../assets/Images/LauraVictoriaMartinez6.jpg'
import foto7 from '../../assets/Images/LauraVictoriaMartinez7.jpg'
import foto8 from '../../assets/Images/LauraVictoriaMartinez8.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import { Col, Row } from 'react-bootstrap';

function FirstSection() {

    const useStyles = makeStyles({
        container: {
            height: "100%", 
            minHeight: 240, 
            fontSize: 30,
            textAlign: "center"
        },
        containerTall: {
            minHeight: "42vh" 
        },
        section: {
            padding: '0% 10%',
            backgroundColor: "#F1F1F1",
            marginTop: '100px',
            width: "auto",
        },
        bio_section: {
          height: "100vh",
          display: "flex",
          alignItems: "center"
        }
    });  

    useEffect(() => {
      checkWindowSize();
    }, []);
    
    const classes = useStyles();

    function checkWindowSize() {
      if(window.screen.width > 991){
        setDesktopMode();
      }
      else{
        setMobileMode();
      }

      if(window.screen.width >= 600){
        hideLogo();
      }
      else{
        showLogo();
      }
    }

    function hideLogo() {
      let logo = document.getElementById('r_logo');

      if(logo){
        logo.style.visibility = "hidden";
      }
    }

    function showLogo() {
      let logo = document.getElementById('r_logo');

      if(logo){
        logo.style.visibility = "visible";
      }
    }

    function setDesktopMode(){
      let bioSection = document.getElementById('bio_section');
      let portSection = document.getElementById('portfolio_section');

      if(bioSection){
        bioSection.style.height = "100vh";
      }

      if(portSection){
        portSection.style.height = "80vh";
      }
    }

    function setMobileMode(){
      let bioSection = document.getElementById('bio_section');
      let portSection = document.getElementById('portfolio_section');

      if(bioSection){
        bioSection.style.height = "auto";
      }

      if(portSection){
        portSection.style.height = "auto";
      }

    }

    window.addEventListener('resize', function(event) {
      checkWindowSize();
    }, true);

    return (
        <div className={classes.section}>
            <Grid container direction="row" spacing={2}>
                <Grid item lg={4} sm={12} md={4}>
                    <div className={classes.container}>
                        <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={photo1} alt=""/>
                    </div>
                </Grid>
                <Grid item container direction="column" lg={4} sm={12} md={4} spacing={2} >
                  <Grid item xs>
                    <div className={classes.container}>
                        <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={photo3} alt=""/>
                    </div>
                  </Grid>
                  <Grid item xs>
                    <div className={clsx(classes.container, classes.containerTall)}>
                        <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={photo4} alt=""/>
                    </div>
                  </Grid>
                </Grid>
                <Grid item lg={4} sm={12} md={4}>
                  <div className={classes.container}>
                      <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={photo2} alt=""/>
                  </div>
                </Grid>
            </Grid>
            <Row id='bio_section' style={{marginTop: "10px", display: "flex", alignItems: "center"}}>
              <Col lg={"6"} md={"12"} sm={"12"}>
                <img src={foto5} style={{maskImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))", marginBottom: "10px", width: "100%"}} alt="" />
              </Col>
              <Col lg={"6"} md={"12"} sm={"12"} style={{fontSize: "1.3rem", lineHeight: "40px"}}>
              Empecé mi camino en el modelaje hace cuatro años, pertenecí a Irismodels donde participé 
              en la pasarela de fin de año en 2018, fui modelo de marca para medicaline y he trabajado 
              como modelo artística con fotógrafos independientes. En el modelaje me interesa la 
              pasarela, la moda y el arte; así como la capacidad de trasmitir a través de la imagen. 
              Soy propositiva y me gusta integrar el modelaje con la danza.
              </Col>
            </Row>
            <Row id='portfolio_section' style={{}}>
              <Col lg={"4"} md={"4"} sm={"12"} style={{marginTop: "10px"}}>  
                <img src={foto7} alt="" style={{width: "100%", height: "100%", objectFit: 'cover', marginTop: "10px"}}/>
              </Col>
              <Col lg={"4"} md={"4"} sm={"12"} style={{marginTop: "10px"}}> 
                <img src={foto6} alt="" style={{width: "100%", height: "100%", objectFit: 'cover', marginTop: "10px"}}/>
              </Col>
              <Col lg={"4"} md={"4"} sm={"12"} style={{marginTop: "10px"}}> 
                <img src={foto8} alt="" style={{width: "100%", height: "100%", objectFit: 'cover', marginTop: "10px"}}/>
              </Col>
            </Row>
            <Row style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column"}}>
              <div>
                <p style={{fontSize: "2rem", marginBottom: "40px", textAlign: "center"}}>MAKE CONTACT</p> 
              </div>
              <EmojiFoodBeverageIcon style={{fontSize: "6rem", marginBottom: "40px"}}/>
              <div style={{ display: "flex", justifyContent: "center"}}>
                <a style={{color: "black"}} target={"_blank"} href={"https://www.instagram.com/lavimarey/"}>
                  <InstagramIcon style={{fontSize: "3rem", marginRight: "30px"}}/>
                </a>
                <a style={{color: "black"}} target={"_blank"} href={"https://wa.me/573196396684"}>
                  <WhatsAppIcon style={{fontSize: "3rem", marginRight: "30px"}}/>
                </a>
                <a style={{color: "black"}} target={"_blank"} href={"https://mail.google.com/mail/?view=cm&fs=1&to=lavimarey@gmail.com"}>
                  <MailOutlineIcon style={{fontSize: "3rem"}}/>
                </a>
              </div>
            </Row>
        </div>
    )
}

export default FirstSection