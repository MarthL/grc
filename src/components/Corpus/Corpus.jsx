// import { Typography } from "@mui/material";
import { Api } from "@mui/icons-material";
import { Container, TextField, Box, Button } from "@mui/material";
import { React, useState, useEffect } from "react";
import api from "api/api";


const Corpus = () => { 

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    if(input.length > 2) { 
      setError(false);
    } else { 
      setError('2 letters minimum');
    }
  }, [input])

  useEffect(() => {
    setError(false);
    api.get('/cities')
      .then((res) => res.data)
      .then((data) => JSON.stringify(data))
      .catch((error) => console.error(error))
  }, [])



  return(
    <>
    <Box sx={{width: "auto", textAlign: "center"}}> <h1>Statistiques Population</h1> </Box>
    <Box sx={{ my: '5vh', mx: 'auto', width: 200 }}>
      <TextField
        helperText={error ? error : "Please enter a city"}
        label="City"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        error={error}
        // renderInput={(e) => {...option}}
        option={['hello', 'test']}
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