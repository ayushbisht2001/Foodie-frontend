import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Chip } from '@mui/material';



export default function SearchBox(props) {

  const {
    title = "Search",
    placeholder ,
    setOptions,
    options

  } = props;

    return (
      <>
      <Autocomplete
      {...props}
      options={options.map((option) => option.title)}
      onChange={(event, newValue) => {

        console.log("event", newValue)
        if (typeof newValue === 'string') {
          setOptions({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setOptions({
            title: newValue.inputValue,
          });
        } else 
        if(props.multiple)
        {
          setOptions(newValue);
        }else
        setOptions({title : false});

      }}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={<>  <props.icon /> {title} </>}
          placeholder={placeholder}
        />)
      
      }
        />

        
     
    </>

    )
}



  
