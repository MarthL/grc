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
  const [selectedOption, setSelectedOption] = useState(null);


  useEffect(() => {
    setError(false);
    if(input.length > 2) { 
      setError(false);
    } else { 
      setError('2 letters minimum');
    }
    console.log(input)
  }, [input])

  useEffect( () => {
    api.get('/cities')
      .then((res) => res.data)
      .then((data) => setCities((data)))
      .catch((error) => console.error(error))
    setLoading(false);
  }, [])

  const filterOptions = createFilterOptions({
    limit: 20,
    ignoreCase: true,
  })

  const handleInputChange = (event, newValue) => {
    setInput(event.target.value);
    console.log(newValue);
  };

  return(
    <>
    <Box sx={{width: "auto", textAlign: "center"}}> <h1>Statistiques Population</h1> </Box>
    <Box sx={{ my: '5vh', mx: 'auto', width: 200 }}>
    <Autocomplete 
  filterOptions={filterOptions} 
  options={cities.cities?.map((value)=> ({
    id: value.id,
    label: `${value.ville_nom} ${value.ville_code_postal}`
  })).sort((a, b) => a.label.localeCompare(b.label)) || [] }
  value={selectedOption}
  onChange={(event, newValue) => {
    setSelectedOption(newValue);
    setInput(newValue.label);
  }}
  renderInput={(params) => (
    <TextField
      {...params}
      label="City"
      onChange={handleInputChange}
      value={input}
      inputProps={{
        ...params.inputProps,
        autoComplete: 'off' // disable autocomplete and autocorrect
      }}
    />
  )}
  getOptionLabel={(option) => option.label}
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
      onClick={() => setSelectedOption(null)}
      >
        Reset
      </Button>
      </Box>
    </Box>
    </>
)
}

export default Corpus;