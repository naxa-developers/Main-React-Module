import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';
import login from './login';
import register from './register';
import toast from './toast';
import topic from './topic';
import loader from './loader.reducer';
import loadersample from './loadersample';

export default combineReducers({
  router: connectRouter(history),
  login,
  register,
  toast,
  topic,
  loader,
  loadersample,
});
