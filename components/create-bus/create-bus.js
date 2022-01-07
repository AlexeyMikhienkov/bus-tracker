import {useState} from "react";
import {addBusText, busCreatedSuccessful, typeData} from "../../constants/copyright";
import {busFormFields} from "../../constants/constants";

export default function CreateBus({onCreateBus, errors, className, clicked}) {
    const [driverFirstName, setDriverFirstName] = useState('');
    const [driverLastName, setDriverLastName] = useState('');
    const [fuelPerKm, setFuelPerKm] = useState('');
    const [number, setNumber] = useState('')

    function handleSubmit(event) {
        event.preventDefault();

        onCreateBus(driverFirstName, driverLastName, fuelPerKm, number);
    }

    function titleToState(propTitle) {
        switch (propTitle.toString()) {
            case "driverFirstName":
                return driverFirstName;
            case "driverLastName":
                return driverLastName;
            case "fuelPerKm":
                return fuelPerKm;
            case "number":
                return number;
            default:
                return;
        }
    }

    function titleToSetter(propTitle) {
        switch (propTitle.toString()) {
            case "driverFirstName":
                return setDriverFirstName;
            case "driverLastName":
                return setDriverLastName;
            case "fuelPerKm":
                return setFuelPerKm;
            case "number":
                return setNumber;
            default:
                return;
        }
    }

    return (
        <>
            <div className={`${className} create-bus`}>
                <h3 className={"create-bus__text"}>{typeData}</h3>
                <form className={"create-bus__form form"} onSubmit={handleSubmit}>
                    {busFormFields.map(fieldObj => {
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
                        <button className={"form__button"} type={"submit"}>{addBusText}</button>
                        {
                            !Object.keys(errors).length && clicked ?
                                <p className={"form__success-message"}>{busCreatedSuccessful}</p> : null
                        }
                    </div>
                </form>
            </div>
        </>
    )

}