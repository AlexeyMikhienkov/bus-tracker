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
            <p>{`${bus.id}, ${bus.driverLastName}`}</p>

            <form className={"choose-route__form form"} onSubmit={submitFunc}>
                <label className={"form__label"} htmlFor={title}>{text}</label><br/>
                <select className={"form__select"} value={currentRouteNumber}
                        onChange={event => setCurrentRouteNumber(event.target.value)}>
                    {
                        routes.map(route => {
                            return <option key={route.id} value={route.number}>{route.number}</option>
                        })
                    }
                </select>
                <button type={"submit"}>{setToRouteText}</button>
            </form>


        </div>
    )
}

/*

                          <select className={"form__select"} disabled={!filterParam.length}
                                    value={filterParam === "genre" ? currentGenre : currentWriter}
                                    onChange={event => {
                                        filterParam === "genre" ?
                                            setCurrentGenre(event.target.value) :
                                            setCurrentWriter(event.target.value)
                                    }}>

                                    currentServerParams.map(param => {
                                        return <option key={param}
                                                       value={param}>
                                            {filterParam === "genre" ? genres[param] : param}</option>
                                    })
 */