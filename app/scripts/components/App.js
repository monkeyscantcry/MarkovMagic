import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

import { Pool } from './Pool';
import { User } from './User';
import { Timer } from './Timer';

export const App = React.createClass({

  render: function () {
    return (
      <div className="ContentPage">
        <Timer time={ 90 } />
        {
          window.pickorder.map((username, i) =>
            <User name={ username } key={ i } vetos={ window.vetos[username] } />
          )
        }
        {
          window.pools.map((pool, i) =>
            <div className="pool-group" key={ i }>
              <h1>Pool #{ i + 1 }</h1>
              <Pool contents={ pool } />
            </div>
          )
        }
      </div>
    );
  }

})
