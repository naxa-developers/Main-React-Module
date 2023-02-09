import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loginActions from '@Actions/login';

function Dashboard({ username = 'John Doe', logoutRequest }) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
          <div className="account-wall dashboard-container">
            <div className="dashboard">
              <h1 className="text-center login-title">Hello {username}</h1>
              <button type="button" className="btn btn-lg btn-primary btn-block" onClick={logoutRequest}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  username: PropTypes.string.isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    login: {
      user: { username },
    },
  } = state;
  return {
    username,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logoutRequest: (payload) => dispatch(loginActions.logoutRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
