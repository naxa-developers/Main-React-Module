import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toastActions from '@Actions/toast';

function Toast({ type, message, clearToast }) {
  useEffect(() => {
    if (type && message) setTimeout(clearToast, 5000);
  }, [type, message, clearToast]);

  if (type && typeof message === 'string') {
    return (
      <div className={`alert alert-${type}`}>
        <p>{message}</p>
      </div>
    );
  }

  return null;
}

const mapStateToProps = (state) => {
  const {
    toast: { type, message },
  } = state;
  return {
    type,
    message,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearToast: () => dispatch(toastActions.clear()),
});

Toast.defaultProps = {
  type: null,
  message: null,
};

Toast.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  clearToast: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
