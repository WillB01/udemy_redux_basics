import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment, decrement, add, subtract, storeResult, deleteResult} from '../../Store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubstractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((item,index) => {
                        return (
                            <li key={index} style={{cursor: 'pointer'}} onClick={() => this.props.onDeleteResult(index)}>{item.value}</li>
                           
                        );
                    })}

                   
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        ctr: state.ctr.counter, 
        storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch =>  {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: () => dispatch(add(10)),
        onSubstractCounter: () => dispatch(subtract(15)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (index) => dispatch(deleteResult(index))
        
    }
}
  




export default connect(mapStateToProps, mapDispatchToProps)(Counter);