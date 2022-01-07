import {useState} from "react";
import {
    addBusText,
    addRouteText,
    busCreatedSuccessful,
    routeCreatedSuccessful,
    typeData
} from "../../constants/copyright";
import {routeFormFields} from "../../constants/constants";

export default function CreateRoute({onCreateRoute, errors, clicked, className}) {
    const [distance, setDistance] = useState('');
    const [needBusCount, setNeedBusCount] = useState('');
    const [number, setNumber] = useState('')

    function handleSubmit(event) {
        event.preventDefault();

        onCreateRoute(distance, needBusCount, number);
    }

    function titleToState(propTitle) {
        switch (propTitle.toString()) {
            case "distance":
                return distance;
            case "needBusCount":
                return needBusCount;
            case "number":
                return number;
            default:
                return;
        }
    }

    function titleToSetter(propTitle) {
        switch (propTitle.toString()) {
            case "distance":
                return setDistance;
            case "needBusCount":
                return setNeedBusCount;
            case "number":
                return setNumber;
            default:
                return;
        }
    }

    return (
        <>
            <div className={`${className} create-route`}>
                <h3 className={"create-route__text"}>{typeData}</h3>
                <form className={"create-route__form form"} onSubmit={handleSubmit}>
                    {routeFormFields.map(fieldObj => {
                        const {title, text} = fieldObj;

                        let errorObj;

                        if (Object.keys(errors).length)
                            errorObj = errors?.find(error => error.field === title)

                        return (
                            <div className={"form__field"} key={title}>
                                <label className={"form__label"} htmlFor={title}>{text}</label><br/>
                                {
                                    <input className={"form__input"} type={"text"} id={title}
                                           value={titleToState(title)}
                                           onChange={event => {
                                               const func = titleToSetter(title);

                                               if (typeof func === "function")
                                                   func(event.target.value)
                                           }}/>
                                }
                                <br/>
                                <p className={"form__error-message"}>{errorObj?.message}</p>
                            </div>
                        )
                    })}

                    <div className={"form__footer"}>
                        <button className={"form__button"} type={"submit"}>{addRouteText}</button>
                        {
                            !Object.keys(errors).length && clicked ?
                                <p className={"form__success-message"}>{routeCreatedSuccessful}</p> : null
                        }
                    </div>
                </form>
            </div>
        </>
    )
}