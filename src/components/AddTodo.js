import React, {Component} from 'react';
import '../styles/TodoApp.css';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {todo:''};
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    handleUpdate(event){
        this.setState({todo:event.target.value});
    }
    addTodo(){
        if(this.state.todo!="") {
            this.props.addTodo(this.state.todo);
            this.setState({todo: ''});
        }
    }
    render(){
        return(
            <div className="todoItem">
                <h4>Add Todo:</h4>
                <input className="todoText" type="text" id="addTodo" onChange={this.handleUpdate} value={this.state.todo}/>
                &nbsp;&nbsp;
                <button className="todoBtn" onClick={this.addTodo}>ADD TODO</button>
            </div>
        );
    }
}

export default AddTodo;