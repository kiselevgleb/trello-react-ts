import React, { Fragment, useState } from 'react';
import { postTicketRequest } from '../actions/actionCreators';
import { useDispatch } from 'react-redux';
import Timer from './Timer';

export default function Task(prop) {
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(parseInt(prop.content.time));
    const costPerHour = 1000;

    let colClass = "col-12";
    let divClass = false;
    let buttonClass = false;
    let status = "Done";
    let timer = "false";
    let cost = "false";
    let costInSec = costPerHour / 3600;

    if (prop.buttonType === "Start") {
        colClass = "col-9";
        divClass = "col-3 align-self-center butStart";
        buttonClass = "btn btn-primary butStartText";
        status = 'In progress';
        timer = 0;
    } else if (prop.buttonType === "Resolve") {
        colClass = "col-8";
        divClass = "col-4 align-self-center butResolve";
        buttonClass = "btn btn-primary butResolveText butStartText";
        status = 'Done';
        cost = Math.round(costInSec * seconds * 100) / 10;
    }
    const butClick = () => {
        let data = JSON.stringify({ "id": prop.content.id, "text": prop.content.text, "status": status, "time": timer, "cost": cost })
        dispatch(postTicketRequest(data));
    };
    return (
        <Fragment>
            <div className="row dataText">
                <div className={colClass}>
                    <p className="text-body">&#128479; {prop.content.text}</p>
                    {prop.content.time !== "false" ?
                        <Timer seconds={seconds} setSeconds={setSeconds}></Timer>
                        :
                        <></>}
                    {prop.content.cost !== "false" ?
                        <p className="text-price p text-cost">&#8381;{prop.content.cost}</p> : <></>}
                </div>
                {prop.buttonType ?
                    <div className={divClass}>
                        <button type="button" className={buttonClass} onClick={butClick}>{prop.buttonType}</button>
                    </div> : <></>}
            </div>
        </Fragment>
    )
}