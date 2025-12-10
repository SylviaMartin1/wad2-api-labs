/* Import the React library */
import React from 'react';

/* Create the Task component, using an arrow function, not regular function syntax */
/* Has the props (properties/attributes) title, deadline,description */
/* Has the special prop 'children'which holds the contents of the component's elements */
const Task = (props) => {

    return (
          <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.description}</p>
            <p style={{backgroundColor: props.priority === 'High' ? 'red' : props.priority === 'Medium' ? 'orange' : 'green'}}><b>{props.priority}</b></p>
            <p>{props.children}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

/* Export the Task component so that it can be used elsewhere */
export default Task;
