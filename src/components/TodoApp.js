import React, {Component} from 'react';
import '../styles/TodoApp.css';
import Todo from './Todo.js';
import AddTodo from './AddTodo';

class TodoApp extends Component {
    constructor(){
        super();
        this.state = { todolist : ['Get Up in Morning','Do Exercise','Eat Breakfast']};
        this.addTodo = this.addTodo.bind(this);
        this.strikeOff = this.strikeOff.bind(this);
    }
    strikeOff(todo){
        console.log("striking off!");
        const filteredtodos = this.state.todolist.filter(t => {
            return t!=todo;
        });

        this.setState({todolist:filteredtodos});
    }
    renderTodos(){
        return this.state.todolist.map(todo => (
            <Todo key={todo} todo={todo} strikeOff={this.strikeOff} />
        ));
    }
    addTodo(newTodo){
        this.setState({todolist:[...this.state.todolist,newTodo]});
    }
    render() {
        return(
        <div className="TodoApp">
            <h2 className="header">TODO LIST</h2>
            <hr className="line" />
            <AddTodo addTodo={this.addTodo} />
            <div>{this.renderTodos()}</div>
          </div>
        );
    }
}

export default TodoApp;