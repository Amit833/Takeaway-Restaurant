import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Menu } from "../components/Menu";
import { Contact } from "../components/Contact";
import { TakeAwayMenu } from "../components/TakeAwayMenu";
import { Basket } from "../components/Basket";
import { SignUpForm } from "../components/SignUpForm";
import { SignInForm } from "../components/SignInForm";
import "../Routes.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Checkout } from "../components/Checkout";

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Route path="/takeawaymenu" component={TakeAwayMenu} />
        <Route path="/basket" component={Basket} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </Router>
  );
};
