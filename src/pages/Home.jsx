import React from "react";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import UserMenu from "../components/UserMenu/UserMenu";

const Home = ({ isAuth }) => {
  return (
    <>
      <Header />
      {!isAuth ? <h2>Identify Yourself!</h2> : <UserMenu />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.token,
});

export default connect(mapStateToProps, null)(Home);
