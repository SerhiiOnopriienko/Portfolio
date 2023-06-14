import React, { useContext, useState } from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ProjectContextComponent } from '../../context/Context';
import { showName } from '../../reducer/ProjectReducer';

export default function Login() {
  let [{userName}, dispatch] = useContext(ProjectContextComponent);
  let [newName, setNewName] = useState('');
  const navigate = useNavigate();

  function handleSubmit() {
    userName = newName;
    dispatch(showName(userName));
    navigate('/projects');
  }
  return (
      <div className='wrapper'>
          <Paper 
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
            elevation={12}> 
            <h1 style={{textAlign: 'center'}}>Login</h1>
            <form 
            className='inputs'
            onSubmit={() => handleSubmit()}>
                <TextField value={newName} onChange={(event) => setNewName(event.target.value)} required  sx={{mb: 1}} id="userName" label="User Name" variant="filled" type='text' />
                <TextField sx={{mb: 1}} id="password" label="Password" variant="filled" type='password' required />
                <Button type='submit' sx={{width: 140, ml: 41}} variant="outlined">Login</Button>
            </form>
        </Paper>
      </div>
    );
  }