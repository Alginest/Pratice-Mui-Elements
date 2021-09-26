import React from 'react'
import { Typography, Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  // textColor: {
  //   backgroundColor: 'grey',
  //   '&:hover': {
  //     backgroundColor: 'blue',
  //   },
  // },
})
export default function Create() {
  const classes = useStyles()
  return (
    <Container>
      {/* <Typography variant='h1' color='primary' align='center'>
        Create a New Note
      </Typography> */}
      {/* <Typography color='secondary' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        incidunt tempore rerum doloremque quae. Doloremque iure inventore
        quisquam similique velit.
      </Typography> */}

      <Typography
        variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'
        className={classes.textColor}
      >
        Create a New Note
      </Typography>
      <Button
        type='submit'
        color='secondary'
        variant='contained'
        onClick={() => console.log('u clicked me')}
      >
        Submit
      </Button>
      {/* Buttons
      <Button variant='contained' color='primary' href='#'>
        Click me!
      </Button>
      <Button variant='outlined' type='submit' color='primary' href='#'>
        Submit
      </Button>
      <ButtonGroup color='secondary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      {/*Icons*/}
      <br />
      <br />
    </Container>
  )
}
