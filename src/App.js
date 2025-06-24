import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shops/shoppage.component";
import Header from "./components/header.component";
import SignInAndSignUpPage from "./pages/signinnsignup";
import CheckoutPage from "./pages/checkoutpage";
import PaymentOptions from "./pages/PayMentPage";

import ContactUs from "./pages/legalpages/ContactUs";
import ShippingPolicy from "./pages/legalpages/ShippingPolicy";
import TermsAndConditions from "./pages/legalpages/TermsAndConditions";
import CancellationsAndRefunds from "./pages/legalpages/CancellationsAndRefunds";
import PrivacyPolicy from "./pages/legalpages/PrivacyPolicy";

import { auth, createUserProfileDocument } from "./components/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import Footer from "./pages/Footer";

const Hats = () => (
  <div>
    <h1>Hats Component</h1>
  </div>
);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hats" element={<Hats />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shop/*" element={<ShopPage />} />


          <Route path="/payment" element={<PaymentOptions />} />
          <Route
            path="/signinnup"
            element={
              currentUser ? <Navigate to="/" replace /> : <SignInAndSignUpPage />
            }
          />

          {/* Legal Pages */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route
            path="/cancellations-and-refunds"
            element={<CancellationsAndRefunds />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
         <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
