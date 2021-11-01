import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import "./App.css";
import Header from "./pages/Shared/Header/Header";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Contact from "./pages/Contact/Contact";
import OfferDetails from "./pages/OffersDetails/OfferDetails";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import AddService from "./pages/AddService/AddService";
import ManageAllBooking from "./pages/ManageAllBooking/ManageAllBooking";
import MyBookingInfo from "./pages/MyBookingInfo/MyBookingInfo";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/offerDetails/:offerId">
              <OfferDetails></OfferDetails>
            </PrivateRoute>
            <PrivateRoute path="/manageAllBooking">
              <ManageAllBooking></ManageAllBooking>
            </PrivateRoute>
            <PrivateRoute path="/myBooking">
              <MyBookingInfo></MyBookingInfo>
            </PrivateRoute>
           
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
