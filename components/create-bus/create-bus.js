import {useState} from "react";
import {addBusText, busCreatedSuccessful, routeCreatedSuccessful} from "../../constants/copyright";
import {busFormFields} from "../../constants/constants";
import FormField from "../form-field/form-field";

export default function CreateBus({onCreateBus, errors, className, clicked}) {
    const [driverFirstName, setDriverFirstName] = useState('');
    const [driverLastName, setDriverLastName] = useState('');
    const [fuelPerKm, setFuelPerKm] = useState('');
    const [number, setNumber] = useState('')

    function handleSubmit(event) {
        event.preventDefault();

        onCreateBus(driverFirstName, driverLastName, fuelPerKm, number);
    }

    return (
        <div className={`${className} create-bus`}>
            <form className={"create-bus__form form"} onSubmit={handleSubmit}>
                <FormField param={driverFirstName} onSetParam={setDriverFirstName}
                           fieldObj={busFormFields.driverFirstName}/>
                <FormField param={driverLastName} onSetParam={setDriverLastName}
                           fieldObj={busFormFields.driverLastName}/>
                <FormField param={fuelPerKm} onSetParam={setFuelPerKm} fieldObj={busFormFields.fuelPerKm}/>
                <FormField param={number} onSetParam={setNumber} fieldObj={busFormFields.number}/>

                <div className={"form__footer"}>
                    <button className={"form__button"} type={"submit"}>{addBusText}</button>
                </div>
            </form>
            <div className={"create-bus__response"}>
                {
                    !Object.keys(errors).length && clicked ?
                        <p className={"create-bus__success-message"}>{busCreatedSuccessful}</p> :
                        null
                }
                {
                    Object.keys(errors).length ?
                        errors.map(error => {
                            return <p key={error.message} className={"create-bus__error-message"}>{error.message}</p>
                        })
                        : null
                }
            </div>
        </div>
    )
}
