import { Box, Button } from '@mui/material'
import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../slice/userSlice'
import { useNavigate } from 'react-router-dom'


const App = () => {

const dispatch = useDispatch()
const navigate = useNavigate()


const [ form, setForm] = useState(
    {
        name:"",
        email:"",
        password:""
    }
)

const onChange = (e)=>{
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
}

const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addUser(form))
    navigate("/")
    console.log(form);
}

  return (
    <Box sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%', backgroundColor:"aliceblue"}  }>
        <form action="" onSubmit={handleSubmit}>
            <h1>Enter Name</h1>
            <input type="text" value={form.name} name='name' onChange={onChange}/>
            <br></br>
            <h1>Enter Email</h1>
            <input type="email" value={form.email} name='email' onChange={onChange} />
            <br></br>
            <h1>Enter Password</h1>
            <input type="password" value={form.password} name='password' onChange={onChange}/>
            <br></br>
            <br></br>
            <Button variant='contained' type='submit' sx={{mt:3, mb:3}}>Log-in</Button>
        </form>
    </Box>
  )
}

export default App
