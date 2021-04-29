import React, { useState } from 'react';
import Task from './Task';
import { useDispatch } from 'react-redux';
import { postTicketRequest } from '../actions/actionCreators';

export default function Desk(prop) {
    const [booleanAddTask, setBooleanAddTask] = useState(true);
    const dispatch = useDispatch();

    const addTask = evt => {
        evt.preventDefault();
        if (evt.target[0].value !== undefined) {
            let data = JSON.stringify({ "text": evt.target[0].value, "status": "To do", "time": "false", "cost": "false" })
            dispatch(postTicketRequest(data));
            setBooleanAddTask(true);
        }
    };

    return (
        <div className="col-sm table">
            <div className="row text"><p className="circle rounded-circle ">{prop.coin}</p>{prop.text}</div>
            {prop.content.map(o =>
                <Task content={o} buttonType={prop.button} key={o.id} />)}
            {prop.button === "Start" ? booleanAddTask === true ?
                <div className="row d-flex justify-content-center">
                    <button type="button" className="btn butPlus btn-light" onClick={() => setBooleanAddTask(false)}>&#10010; New task</button>
                </div> :
                <form onSubmit={addTask}>
                    <div className="form-group">
                        <div className="row dataText">
                            <textarea placeholder="Enter the text..." className="form-control" rows="3"></textarea >
                        </div>
                        <button type="submit" className="btn butPlus butAdd btn-light">Add Task</button>
                    </div>
                </form>
                : <></>}
        </div>
    )
}
