import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import loaderSampleActions, { Types } from '@Actions/loadersample';
import { checkIfLoading } from '@Utils/loaderSelector';
import loaderGif from '@Assets/image/smallloader.gif';

function Index({ getDashboardRequest, getMoreContentRequest, randomCharacters, randomNumbers, dashboardData }) {
  const isDashboardLoading = useSelector((state) => checkIfLoading(state, { actionName: Types.GET_DASHBOARD_REQUEST }));
  const isRandomCharacterLoading = useSelector((state) =>
    checkIfLoading(state, { actionName: Types.GET_MORE_CONTENT_REQUEST, key: 'randChar' }),
  );
  const isRandomNumberLoading = useSelector((state) =>
    checkIfLoading(state, { actionName: Types.GET_MORE_CONTENT_REQUEST, key: 'randNum' }),
  );

  useEffect(() => {
    getDashboardRequest();
  }, [getDashboardRequest]);

  return (
    <div className="wrapper">
      <div className="loader_item">{isDashboardLoading ? <img src={loaderGif} alt="loader" /> : dashboardData}</div>
      <div className="loader_item">
        {randomCharacters.map((el) => {
          return <p>{el}</p>;
        })}
        {isRandomCharacterLoading ? (
          <img width="50px" src={loaderGif} alt="loader" />
        ) : (
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={() => getMoreContentRequest('randomCharacter', 'randChar')}
            tabIndex="0"
          >
            Get More Random Character
          </button>
        )}
      </div>
      <div className="loader_item">
        {randomNumbers.map((el) => {
          return <p>{el}</p>;
        })}

        {isRandomNumberLoading ? (
          <img width="50px" src={loaderGif} alt="loader" />
        ) : (
          <button
            type="button"
            className="btn btn-lg btn-primary "
            onClick={() => getMoreContentRequest('randomNumber', 'randNum')}
            tabIndex="0"
          >
            Get More Random Number
          </button>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDashboardRequest: (payload) => dispatch(loaderSampleActions.getDashboardRequest(payload)),
    getMoreContentRequest: (payload, key) => dispatch(loaderSampleActions.getMoreContentRequest(payload, key)),
  };
};

const mapStateToProps = (state) => {
  return {
    randomCharacters: state.loadersample.randomCharacters,
    randomNumbers: state.loadersample.randomNumbers,
    dashboardData: state.loadersample.dashboardData,
  };
};

Index.propTypes = {
  getDashboardRequest: PropTypes.func.isRequired,
  getMoreContentRequest: PropTypes.func.isRequired,
  randomCharacters: PropTypes.array.isRequired,
  randomNumbers: PropTypes.array.isRequired,
  dashboardData: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
