import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import './login.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AUTH_API } from '../../components/constants';
import { USER_INFO_STORAGE_KEY } from '../../components/constants';
import { ConstructionOutlined } from '@mui/icons-material';


const Login = () => {

    const [username, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem(USER_INFO_STORAGE_KEY)) {
            navigate('/dashboard');
        }
    }, [])


    function login() {
        console.warn(username, password);
        let item = { username, password };
        axios.post(AUTH_API, item).then(res => {
            localStorage.setItem(USER_INFO_STORAGE_KEY, JSON.stringify(res.data));
            navigate("/dashboard");
        }).catch(err => {
            console.log(err);
        })
    }

    const paperStyle = { padding: 20, height: '50vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const textStyle = { paddingBottom: 20, marginTop: 20 }
    return (
        <div className="loginContainer">
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center' className='header'>
                        <Avatar style={avatarStyle}><LockIcon /></Avatar>
                        Sign In
                    </Grid>

                    <TextField label='Username' placeholder='Enter username' variant='standard' style={textStyle} fullWidth required
                        onChange={(e) => setEmail(e.target.value)} />
                    <TextField label='Password' placeholder='Enter password' variant='standard' style={textStyle} type='password' fullWidth required
                        onChange={(e) => setPassword(e.target.value)} />

                    <FormControlLabel
                        control={
                            <Checkbox name='checkB' style={textStyle} color='primary' />
                        }
                        label='Remember me' />

                    <Button type='submit' color='primary' fullWidth variant='contained'
                        onClick={login}>Sign In</Button>

                </Paper>
            </Grid>
        </div>
    );


}

export default Login