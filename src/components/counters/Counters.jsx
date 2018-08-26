import React, { Component } from 'react';
import './Counters.scss';

//Components
import Counter from '../counter/Counter';

class Counters extends Component {

  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map(counter => 
        <Counter 
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          counter={counter}
          >
            <h4>Counter # {counter.id}</h4>
        </Counter>
      )}
      </React.Fragment>
    );
  }
}

export default Counters;
