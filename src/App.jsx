import React from "react";
import { SxProps, Theme } from '@mui/material/styles';
import { Typography, Button, Icon, Link, AppBar, Stack, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import initial from './assets/initial.jpg';
import resume from './assets/resume.docx';




const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar positon= 'relative ' sx = {{backgroundColor: 'black', color: 'white'}}>

                <Toolbar   >
                    
                    <img src = {initial} style = {{width: "80px", padding: '15px'}}  alt= 'Logo image'/>
                        <Typography variant= 'h6' style = {{padding: '0.1px'}}>
                            Brandon Fong 
                        </Typography>
                    
                    
                        
                    <Link  variant= 'button' sx={{ml:'500px', pl:'900px' }} style = {{color: 'white' }} >
                            
                        Home 
                    </Link>
                    <Link variant= 'button' sx={{mx:'auto'}}  target = "_blank" style = {{color: 'white' }} >
                            
                        Resume 
                    </Link>
                    <Link variant= 'button'  href =" https://www.linkedin.com/in/brandofong/" target = "_blank" style = {{color: 'white' }} >
                            
                        Linkedin 
                    </Link>
                   
                </Toolbar>
                
            </AppBar>
            <main>
                <div>
                    <Typography sx = {{color: 'black'}}>
                        Hello
                    
                    </Typography>
                
                </div>
            </main>
        
            
           
            
            
            
        
        </>
    );

}

export default App;


