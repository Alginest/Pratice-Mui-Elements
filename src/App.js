import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  pallete: {
    primary: {
      main: '#fefefe',
    },
  },
})
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Notes />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
