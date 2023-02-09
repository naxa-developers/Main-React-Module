import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginActions from '@Actions/login';
import Loader from '@Components/common/Loader';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const {
      state: { username, password },
      props: { loginRequest },
    } = this;

    loginRequest({ username, password });
  };

  render() {
    const {
      state: { username, password },
      props: { loading },
      handleInputChange,

      handleLogin,
    } = this;

    if (loading) {
      return <Loader />;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">Login to continue to Bootsnipp</h1>
            <div className="account-wall">
              <img
                className="profile-img"
                src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                alt=""
              />
              <form className="form-signin" onSubmit={handleLogin}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  required
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                  Login
                </button>
                <span className="clearfix" />
                <Link className="btn btn-lg btn-primary btn-block mt-10" to="/register">
                  Register
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {
    login: { loading },
  } = state;
  return {
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (payload) => dispatch(loginActions.loginRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
