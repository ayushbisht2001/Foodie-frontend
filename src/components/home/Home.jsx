import React from 'react'
import Container from '@mui/material/Container';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { AppProvider } from "./context/context";
import NavBar from '../navbar';

export default function Dashboard() {
    return (
    <>
    <NavBar />
            <Container sx = {{ 
                maxHeight : "calc(100vh - 80px)",
                overflow : "hidden",
            }}
            maxWidth = "900px" 
            >
                
            
            <AppProvider>                
                  <Grid container spacing={1} sx = {{ margin : "10px 0px"}}   >
                    <Grid item xs={3} 
                    sx = {{
                        borderRight : "2px solid #c8cdd1",
                        minHeight : "100vh",
                    }}
                    >
                    <LeftSection />

                    </Grid>
                    <Grid item xs={9}
                        sx = {{
                            overflow : "auto",
                            maxHeight : "100vh"
                        }}
                    >
                        <RightSection/>
                    </Grid>
                    </Grid>
            </AppProvider>

            </Container>      
            </>  
        )
    
}
