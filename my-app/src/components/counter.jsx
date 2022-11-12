import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        imageURL: "https:picsum.photos/200",
        tags: ['tag1','tag2','tag3']
     }; 

    //  constructor() {
    //     super();
    //     this.handleIncrement.bind(this); // BINDS THIS TO THE FUNCTION
    //  }

     styles = {
        fontSize: 20,
        fontWeight: "bold"
     }

     renderTags(){
        if (this.state.tags.length === 0) return <p>there is no tags</p>
        else return (<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>)   
     };

     handleIncrement = () => {
        this.setState({count: this.state.count+1});
     };

    render() {
        return <React.Fragment>
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement}>Increment</button>
                    {this.state.tags.length === 0 && "Please create a new Tag!"}
                    {this.renderTags()}
                
                </React.Fragment>;
    };

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? "text-danger" : "text-primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return this.state.count === 0? 'Zero' : count
    }
}
 
export default Counter;