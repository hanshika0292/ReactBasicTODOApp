import React,{Component} from 'react';
import '../styles/TodoApp.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.strikeOff = this.strikeOff.bind(this);
    }
    strikeOff(){
        var todo = this.props.todo;
        console.log(todo);
        return this.props.strikeOff(todo);
    }
    render() {
        return(
           <div className="todoItem">
               <span>
                   <a className="todoX" href="#" onClick={this.strikeOff}>X</a>
                   &nbsp;&nbsp;&nbsp;
                   <a className="todoI" onClick={this.strikeOff} href="#">{this.props.todo}</a>
               </span>
           </div>
        );
    };
}

export default Todo;