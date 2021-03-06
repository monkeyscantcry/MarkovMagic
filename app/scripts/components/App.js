import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { IfElse } from '../utils';

import { Pool } from './Pool';
import { User } from './User';
import { Timer } from './Timer';

import './App.scss';

export const App = React.createClass({

  render: function () {
    var inner;

    if (window.done) {
      inner =
        <div className="pool-group">
          <h1>Your Pool</h1>
          <Pool contents={ window.pools[window.picks[window.name]] } />
        </div>
    } else if (window.pickorder[window.pickindex] === window.name && !window.waitingForVeto) {
      inner =
        window.pools.map((pool, i) =>
          <div className="pool-group" key={ i }>
                          <h1>Pool #{ i + 1 }

            {
              new IfElse(window.banned[i])
              .when(undefined, () =>
                <span className='select-button' onClick={ function () { window.makePick(i) } }>
                  Pick this Pool
                </span>
              )
              .when(true, () => <strong> Gone!</strong>)
              .get()
            }
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
          <h1>{window.pickorder[window.pickindex]}&#39;s Pick
            {
              new IfElse(window.vetos[window.name] > 0)
              .when(true, () =>
                <span className='veto-button' onClick={ window.veto }>
                  Veto
                </span>
              )
              .when(false, () => <strong> No Vetos!</strong>)
              .get()
            }
          </h1>
          <Pool contents={ window.pools[window.picks[window.justPicked]] } />
        </div>
    }

    return (
      <div className="ContentPage">
        <Timer time={ window.timerTime } />
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
