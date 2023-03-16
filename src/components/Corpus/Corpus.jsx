// import { Typography } from "@mui/material";
import { Api } from "@mui/icons-material";
import { Container, TextField, Box, Button, Autocomplete, createFilterOptions } from "@mui/material";
import { React, useState, useEffect } from "react";
import api from "api/api";


const Corpus = (props) => { 

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError(false);
    if(input.length > 2) { 
      setError(false);
    } else { 
      setError('2 letters minimum');
    }
  }, [input])

  useEffect( () => {
    api.get('/cities')
      .then((res) => res.data)
      .then((data) => setCities((data)))
      .catch((error) => console.error(error))
    setLoading(false);
  }, [])

  // console.log('cities', cities.cities.map((value) => value.ville_nom));
  // console.log(cities.cities?.map((value) => `${value.ville_code_postal} ${value.ville_nom}`))
  // console.log(cities.cities?.map((value) => `${value.ville_code_postal} - ${value.ville_nom}`))
  console.log(cities);

  const filterOptions = createFilterOptions({
    limit: 20,
    ignoreCase: true,
  })

  return(
    <>
    <Box sx={{width: "auto", textAlign: "center"}}> <h1>Statistiques Population</h1> </Box>
    <Box sx={{ my: '5vh', mx: 'auto', width: 200 }}>
      <Autocomplete 
      filterOptions={filterOptions} 
      options={cities.cities?.map((value)=> `${value.ville_nom} ${value.ville_code_postal}`).sort((a, b) => {
        return a > b
    })}
      renderInput={(params) => <TextField {...params}
      label="City"
      value={input} 
      />}
      />
    </Box>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box sm={1} marginRight="10px">
        <Button color="success" variant="contained">
          Send
        </Button>
      </Box>
      <Box sm={1}>
      <Button color="info" variant="contained"
      onClick={() => setInput('')}
      >
        Reset
      </Button>
      </Box>
    </Box>
    </>
)
}

export default Corpus;