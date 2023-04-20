import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

const adddata = ({name, Email, index}) => {
  return (
   

<div className="data_val">

    <h4>{name}</h4>
    <h4>{Email}</h4>
    <Button variant="contained" endIcon={<SendIcon />}>
       <DeleteIcon/>
      </Button>
   

</div>


  )
}

export default adddata