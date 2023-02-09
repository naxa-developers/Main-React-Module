import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import registerActions from '@Actions/register';
import Loader from '@Components/common/Loader';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phone: '',
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
      //   state: { username, password, email, phone },
      props: { registerUserRequest },
    } = this;

    registerUserRequest({ ...this.state });
  };

  render() {
    const {
      state: { username, password, email, phone },
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
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
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
                  Register
                </button>
                <span className="clearfix" />
                <Link className="btn btn-lg btn-primary btn-block mt-10" to="/login">
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUserRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {
    register: { loading },
  } = state;
  return {
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  registerUserRequest: (payload) => dispatch(registerActions.registerUserRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
