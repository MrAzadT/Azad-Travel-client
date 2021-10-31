import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Booking from "./Components/Home/Booking";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import AuthProvider from "./Components/Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/booking/:bookingId">
            <Booking />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
          <Footer />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
