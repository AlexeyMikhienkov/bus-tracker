import {useState} from "react";
import {
    addBusText, addRouteText, routeCreatedSuccessful,
} from "../../constants/copyright";
import {routeFormFields} from "../../constants/constants";
import FormField from "../form-field/form-field";

export default function CreateRoute({onCreateRoute, errors, clicked, className}) {
    const [distance, setDistance] = useState('');
    const [needBusCount, setNeedBusCount] = useState('');
    const [number, setNumber] = useState('')

    function handleSubmit(event) {
        event.preventDefault();

        onCreateRoute(distance, needBusCount, number);
    }

    return (
        <>
            <div className={`${className} create-route`}>
                <form className={"create-route__form form"} onSubmit={handleSubmit}>
                    <FormField param={distance} onSetParam={setDistance}
                               fieldObj={routeFormFields.distance}/>
                    <FormField param={needBusCount} onSetParam={setNeedBusCount}
                               fieldObj={routeFormFields.needBusCount}/>
                    <FormField param={number} onSetParam={setNumber} fieldObj={routeFormFields.number}/>

                    <div className={"form__footer"}>
                        <button className={"form__button"} type={"submit"}>{addRouteText}</button>
                    </div>
                </form>

                <div className={"create-route__response"}>
                    {
                        !Object.keys(errors).length && clicked ?
                            <p className={"create-route__success-message"}>{routeCreatedSuccessful}</p> :
                            null
                    }
                    {
                        Object.keys(errors).length ?
                            errors.map(error => {
                                return <p key={error.message} className={"create-route__error-message"}>{error.message}</p>
                            })
                            : null
                    }
                </div>
            </div>
        </>
    )
}