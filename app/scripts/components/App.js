import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

import { Pool } from './Pool';
import { User } from './User';
import { Timer } from './Timer';

import './App.scss';

export const App = React.createClass({

  render: function () {
    return (
      <div className="ContentPage">
        <Timer time={ 90 } />
        {
          window.pickorder.map((username, i) =>
            <User
              name={ username }
              key={ i }
              vetos={ window.vetos[username] }
              active={ window.pickorder[window.pickindex] === username } />
          )
        }
        {
          (window.pickorder[window.pickindex] === window.name && !window.waitingForVeto)?
            window.pools.map((pool, i) =>
              <div className="pool-group" key={ i }>
                              <h1>Pool #{ i + 1 }
                <span className='select-button' onClick={ function () { window.makePick(i) } }>
                  Pick this Pool
                </span>
              </h1>
                <Pool contents={ pool } />
              </div>
            )
          : <h1>Waiting . . .</h1>
        }
        {
          (window.pickorder[window.pickindex] !== window.name && window.waitingForVeto)?
            <div className="pool-group">
              <Pool contents={ window.pools[window.picks[window.justPicked]] } />
            </div>
          : ''
        }
      </div>
    );
  }

})
