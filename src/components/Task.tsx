import * as React from "react";
import { postTicketRequest } from '../actions/actionCreators';
import { useDispatch } from 'react-redux';
import Timer from './Timer';
import tic from '../ticProps';

interface Props {
    buttonType: string;
    content: tic;
}

export default function Task({buttonType, content}:Props) {
    const dispatch = useDispatch();
    const [seconds, setSeconds] = React.useState<number>(parseInt(content.time));
    const costPerHour: number  = 1000;

    let colClass: string = "col-12";
    let divClass: string = "false";
    let buttonClass: string = "false";
    let status: string = "Done";
    let timer: string|number = "false";
    let cost: string|number = "false";
    let costInSec: number = costPerHour / 3600;

    if (buttonType === "Start") {
        colClass = "col-xl-9";
        divClass = "col-xl-3 align-self-center butStart";
        buttonClass = "btn btn-primary butStartText";
        status = 'In progress';
        timer = 0;
    } else if (buttonType === "Resolve") {
        colClass = "col-xl-7";
        divClass = "col-xl-5 align-self-center butResolve";
        buttonClass = "btn btn-primary butResolveText butStartText";
        status = 'Done';
        cost = Math.round(costInSec * seconds * 100) / 10;
    }
    const butClick = (event: React.MouseEvent<HTMLElement>) => {
        let data: string = JSON.stringify({ "id": content.id, "text": content.text, "status": status, "time": timer, "cost": cost })
        dispatch(postTicketRequest(data));
    };
    return (
        <React.Fragment>
            <div className="row dataText">
                <div className={colClass}>
                    <p className="text-body">&#128479; {content.text}</p>
                    {content.time !== "false" ?
                        <Timer seconds={seconds} setSeconds={setSeconds}></Timer>
                        :
                        <></>}
                    {content.cost !== "false" ?
                        <p className="text-price p text-cost">&#8381;{content.cost}</p> : <></>}
                </div>
                {buttonType !== "false" ?
                    <div className={divClass}>
                        <button type="button" className={buttonClass} onClick={butClick}>{buttonType}</button>
                    </div> : <></>}
            </div>
        </React.Fragment>
    )
}