import React, { useContext, useEffect, useState, memo } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../RestaurantCard';
import { styled } from '@mui/material/styles';
import { AppContext } from './context/context';
import { getRestaurant } from './context/action';
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function RightSection() {

    const {state : {
        list,count,
    },AppContextDispatch} = useContext(AppContext)
    
    useEffect( async() => {

        const data =  await getRestaurant()
        console.log("right section", list)
        
        if(data){
            AppContextDispatch( { type : "GET_RESTAURANTS", payload : data}) 
            AppContextDispatch( { type : "GET_NAMES", payload : data}) 

        }

    }, [])


    return (
        <Container sx = {{ padding : "40px 10px"}} >
            <Typography variant="h5"  component="div" >
                Search Result
            </Typography>

            <Typography  variant="subtitle1" color = "primary" gutterBottom component="div">
                {count}&nbsp;Found
            </Typography>

            <Box sx={{ flexGrow: 1 , margin: "20px 0px"}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    { list.length ? list.map((data, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card data = {data} />
                    </Grid>
                    )) : "" }
                </Grid>
            </Box>

        </Container>        
    )
}
