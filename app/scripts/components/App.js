import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { IfElse } from '../utils';

import { Pool } from './Pool';
import { User } from './User';
import { Timer } from './Timer';

import './App.scss';

export const App = React.createClass({

  render: function () {
    var inner;

    if (window.pickorder[window.pickindex] === window.name && !window.waitingForVeto) {
      inner =
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
    } else if (window.pickorder[window.pickindex] === window.name && window.waitingForVeto) {
      inner = <h1>Waiting . . . </h1>
    } else if (window.pickorder[window.pickindex] !== window.name && !window.waitingForVeto) {
      inner = <h1>Waiting . . . </h1>
    } else if (window.pickorder[window.pickindex] !== window.name && window.waitingForVeto) {
      inner =
        <div className="pool-group">
          <Pool contents={ window.pools[window.picks[window.justPicked]] } />
        </div>
    }

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
          inner
        }
      </div>
    );
  }

})
