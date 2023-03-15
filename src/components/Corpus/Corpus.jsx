// import { Typography } from "@mui/material";
import { Container, TextField, Box, Button } from "@mui/material";
import { React, useState, useEffect } from "react";


const Corpus = () => { 

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    if(input.length > 2) { 
      setError(false);
    } else { 
      setError('2 letters minimum');
    }
  }, [input])

  return(
    <>
    <Box sx={{width: "auto", textAlign: "center"}}> <h1>Statistiques Population</h1> </Box>
    <Box sx={{ my: '5vh', mx: 'auto', width: 200 }}>
      <TextField
        helperText={error}
        label="City"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        error={error}
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