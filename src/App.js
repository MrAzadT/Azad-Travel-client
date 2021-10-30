import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Booking from './Components/Home/Booking'
import NotFound from './Components/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/booking/:bookingId'>
          <Booking />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
        <Footer />
      </Switch>
    </BrowserRouter>
  )
}

export default App
