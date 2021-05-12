import * as React from "react";
import Task from './Task';
import { useDispatch } from 'react-redux';
import { postTicketRequest } from '../actions/actionCreators';
import tic from '../ticProps';

interface Props {
    coin: number;
    text: string;
    button: string;
    content: tic[];
}

export default function Desk({coin, text, button, content}:Props) {
    const [booleanAddTask, setBooleanAddTask] = React.useState<boolean>(true);
    const dispatch = useDispatch();

    const addTask: React.FormEventHandler<HTMLFormElement> = evt => {
        evt.preventDefault();
        let inputValue = (document.getElementById('form-control') as HTMLInputElement).value;
        if (inputValue !== undefined) {
            let data = JSON.stringify({ "text": inputValue, "status": "To do", "time": "false", "cost": "false" })
            dispatch(postTicketRequest(data));
            setBooleanAddTask(true);
        }
    };

    return (
        <div className="col-sm table">
            <div className="row text"><p className="circle rounded-circle ">{coin}</p>{text}</div>
            {content.map(o =>
                <Task content={o} buttonType={button} key={o.id} />)}
            {button === "Start" ? booleanAddTask === true ?
                <div className="row d-flex justify-content-center">
                    <button type="button" className="btn butPlus btn-light" onClick={() => setBooleanAddTask(false)}>&#10010; New task</button>
                </div> :
                <form onSubmit={addTask}>
                    <div className="form-group">
                        <div className="row dataText">
                            <textarea placeholder="Enter the text..." className="form-control" rows={3} id="form-control"></textarea >
                        </div>
                        <button type="submit" className="btn butPlus butAdd btn-light">Add Task</button>
                    </div>
                </form>
                : <></>}
        </div>
    )
}