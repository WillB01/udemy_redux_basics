import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/actions';

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
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubstractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (index) => dispatch({type: actionTypes.DELETE_RESULT, id: index})
        
    }
}
  




export default connect(mapStateToProps, mapDispatchToProps)(Counter);