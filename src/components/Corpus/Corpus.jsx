// import { Typography } from "@mui/material";
import { Container, TextField, Box } from "@mui/material";
import { React, useState, useEffect } from "react";


const Corpus = () => { 

  const [input, setInput] = useState('');
  useEffect(() => {
    console.log(input);
  })

  return(
    <>
    <Box sx={{width: "auto", textAlign: "center"}}> <h1>Statistiques Population</h1> </Box>
    <Box sx={{ my: '5vh', mx: 'auto', width: 200 }}>
      <TextField
        helperText="Enter a city"
        label="City"
        onChange={(e) => setInput(e.target.value)}
      />
    </Box>
    </>
)
}

export default Corpus;