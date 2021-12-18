import React, {useState, memo, useEffect} from 'react'


import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchBox from './Search';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { AppContext } from './context/context';
import Sort from './Sort';
import { searchRestaurant, filterRestaurant, getCuisines, query } from './context/action';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import SearchIcon from '@mui/icons-material/Search';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const options = [
    {      title : "american"},
    {        title : "cheenease"},
    {        title : "french"},
    {        title : "african"},
    {        title : "ghrelu"},     
]

const  LeftSection = () =>  {

    const [ search, setSearch] = useState({title : false});
    const [filter, setFilter] = useState(false);

    const {state : {
        list,cuisines, res_names
    },AppContextDispatch} = useContext(AppContext)

    useEffect(() => {

        console.log("rest names" , list)
    } , [res_names])

    useEffect( async() => {

        const cuisines = await getCuisines();
        if(cuisines){
            AppContextDispatch( { type : "GET_CUISINES", payload : cuisines})
        }

        console.log("response name" , res_names)
    }, [])



    useEffect( async() => {
        

            console.log("search", search,filter)
            const data = await query(filter, search.title)
            AppContextDispatch( { type : "GET_RESTAURANTS", payload : data}) 

    }, [search , filter]);



    console.log("Options", search, filter)
    return (
        <Container maxWidth="sm" 
       >
            <Box sx={{ flexGrow: 1 , padding : "40px 0px"}}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <SearchBox freeSolo  options = {res_names} icon = {SearchIcon}  setOptions = {setSearch} placeholder = "Search the restaurants" title = "Search..." />
                    </Grid>
                    <Grid item xs={12}>
                        <SearchBox options = {cuisines} icon ={FilterAltIcon} title = "Filter ... " setOptions = {setFilter} placeholder = "Filter the restaurants based on cuisines"  multiple />
                    </Grid>
                    <Grid item xs={12}>
                    <Item>
                        <Sort />
                    </Item>
                    </Grid>
                   
                </Grid>
            </Box>
        </Container>
    )
}




export default memo(LeftSection);