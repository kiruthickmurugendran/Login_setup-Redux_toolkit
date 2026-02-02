import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../slice/userSlice'

const navbar = () => {

  const user = useSelector((state)=>state.userInfo.user)
  const dispatch = useDispatch()

  const isLoggedIn = user.length > 0 ? true : false


  return (
   <AppBar position='sticky'>
      <Toolbar sx={ {display:'flex', justifyContent:'space-between'}}>
          <Typography variant='h5' fontWeight="fontWeightBold">Login Page</Typography>
          <Stack direction='row' spacing={2} sx={{alignItems:'center', justifyContent:'center'}}>
            {isLoggedIn &&( <><Button variant='text' color='white' component={Link} to="/settings"> Settings</Button>
             <Button variant='text' color='white' component={Link} to='/user/kiruthick'> about</Button>
             <Button variant='contained'color='error' onClick={()=>{dispatch(removeUser())}}>Log out</Button>
             </>
             )}
             {
              !isLoggedIn && (
                <Button variant='contained' color='secondary' component={Link} to="/login">Log in</Button>
              )
             }
          </Stack>
      </Toolbar>
   </AppBar>
  )
}

export default navbar
