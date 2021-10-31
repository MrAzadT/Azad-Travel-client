import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Booking from "./Components/Home/Booking";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import AuthProvider from "./Components/Context/AuthProvider";
import MyOrder from "./Components/MyOrder/MyOrder";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
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
          <Route exact path="/myOrder">
            <MyOrder />
          </Route>
          <Route exact path="/allOrder"></Route>
          <Route exact path="/booking/:bookingId">
            <Booking />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
