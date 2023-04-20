
import './App.css';
import Header from './components/Header';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';


import { useState } from 'react';

function App() {

  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [data, setData]= useState([])

  const adddata = ()=>{
    setData([...data, {name,  email}]);
    setName("");
    setEmail("");
  }

  const removeItem =(index)=>{
    const arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header/>
      <div className='form'>
      <Stack spacing={2} direction="row">
      
             
      <TextField onChange={(event)=> setName(event.target.value)}  id="outlined-basic" value={name} label="name" variant="outlined" />
      <TextField onChange={(event)=> setEmail(event.target.value)} id="outlined-basic" value={email} label="email" variant="outlined" />
      <Button onClick={adddata} variant="contained">  

      <AddIcon/>
       
      </Button>
   
      </Stack>
      </div>
      <div className="data">

<div className="data_val">

    <h4>Name</h4>
    <h4>Email</h4>
    <h4>Remove</h4>
   

</div>

{data.map((element, index) => {
       
       return (

       
<div kay={index} className="data_val">

<h4>{element.name}</h4>
<h4>{element.Email}</h4>

<Button onClick={()=>removeItem(index)} variant="contained"  color="success" endIcon={<SendIcon />}>
   <DeleteIcon/>
  </Button>


</div>

       )
      })}
</div>
     
   </div>
    
    
  );
}

export default App;
