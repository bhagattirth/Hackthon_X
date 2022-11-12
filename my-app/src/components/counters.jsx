import React, { Component } from 'react';
import Counter from './counter.jsx'
class Counters extends Component {
    state = { 
        counters: [
            {id: 1,value: 0},
            {id: 2,value: 0},
            {id: 3,value: 0},
            {id: 4,value: 0}
        ]
     } 
    render() { 
        console.log('props',this.props)
        return (
            <div>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} selected={true}>
                        "Hello"
                    </Counter>
                    )}
            </div>
        );
    }
}
 
export default Counters;