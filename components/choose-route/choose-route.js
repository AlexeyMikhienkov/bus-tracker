import {chooseRouteNumber} from "../../constants/constants";
import {useState} from "react";
import {setToRouteText} from "../../constants/copyright";

export default function ChooseRoute({routes, bus, onSetRoute, className}) {
    const {title, text} = chooseRouteNumber;

    const [currentRouteNumber, setCurrentRouteNumber] = useState(routes[0].number)

    function submitFunc(event) {
        event.preventDefault();

        onSetRoute(currentRouteNumber)
    }

    return (
        <div className={`${className} choose-route`}>
            <div className={"choose-route__info-container"}>
                <p className={"choose-route__info"}>{`${bus.driverLastName} ${bus.driverFirstName}, ${bus.number}`}</p>
            </div>

            <form className={"choose-route__form form"} onSubmit={submitFunc}>
                <label className={"form__label"} htmlFor={title}>{text}</label>
                <select className={"form__select"} value={currentRouteNumber}
                        onChange={event => setCurrentRouteNumber(event.target.value)}>
                    {
                        routes.map(route => {
                            return <option key={route.id} value={route.number}>{route.number}</option>
                        })
                    }
                </select><br />
                <button className={"form__button"} type={"submit"}>{setToRouteText}</button>
            </form>
        </div>
    )
}
