import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { sortRestaurant } from './context/action';
import { useContext } from 'react';
import { AppContext } from './context/context';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SortIcon from '@mui/icons-material/Sort';

export default function Sort() {

  const [order, setOrder] = React.useState('insc');
  const [value, setValue] = React.useState();


  const {state : {
    list,cuisines, res_names
},AppContextDispatch} = useContext(AppContext)


const handleOrder = async(ord) => {

  setOrder(ord)

  const data = await sortRestaurant(value, order);
    AppContextDispatch( { type : "GET_RESTAURANTS", payload : data}) 

}

  const handleChange = async(event) => {

    const val = event.target.value
    
    setValue(val)

    const data = await sortRestaurant(val, order);
    AppContextDispatch( { type : "GET_RESTAURANTS", payload : data}) 

  };

  return (
    <FormControl component="fieldset" className='w-100 p-2'>
      <FormLabel component="legend" sx = {{textAlign : "left", fontSize : "18px"}} >
        <SortIcon/>
        Sort by</FormLabel>
      <Stack direction="row" spacing={3} sx = {{margin : "10px auto"}}>
      <Button variant= { order=="insc" && "contained"} onClick = {() => handleOrder ("insc")} >INSC</Button>
      <Button variant= { order=="desc" && "contained"}  onClick = {() => handleOrder ("desc")} >
        DESC
      </Button>
    </Stack>
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="votes" control={<Radio />} label="Votes" />
        <FormControlLabel value="rating" control={<Radio />} label="Rating" />
        <FormControlLabel value="avg_cost_for_2" control={<Radio />} label="Avg. cost for two" />

      </RadioGroup>
    </FormControl>
  );

}
