import React from 'react';
import UsersListContainer from './users_list/users_list_container';
import IntervalListContainer from './interval_list/interval_list_container';
import IntervalContainer from './interval/interval_container';

const App = () => (
  <div id="page">
    <UsersListContainer />
    <IntervalListContainer />
    <IntervalContainer />
  </div>
);

export default App;
