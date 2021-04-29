
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getTicketsRequest } from './actions/actionCreators';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

function App(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicketsRequest());
  }, [dispatch])
  return (
    <Router>
      <Switch>
        <Route path='/' component={Main} />
      </Switch>
    </Router>
  );
}

export default App;