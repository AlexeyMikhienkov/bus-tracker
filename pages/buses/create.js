import {useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";
import CreateBus from "../../components/create-bus/create-bus";
import {putRequest} from "../../utils/requests";
import {busFormFields, headers} from "../../constants/constants";
import Header from "../../components/header/header";
import {checkFloatNumberFieldValidation} from "../../utils/validations";

export default function CreateBusPage() {
    const [errors, setErrors] = useState({});
    const [clicked, setClicked] = useState(false);

    function createBus(driverFirstName, driverLastName, fuelPerKm, number) {
        if (!checkFloatNumberFieldValidation(fuelPerKm)) {
            const error = {
                field: busFormFields.fuelPerKm.title,
                message: `Поле "${busFormFields.fuelPerKm.text}" не является целым числом или дробным числом, разделенным точкой`
            }

            setErrors([error]);
            setClicked(true);

            return;
        }

        const data = {
            driverFirstName,
            driverLastName,
            fuelPerKm,
            number
        }

        putRequest('/bus', data)
            .then(() => {
                setErrors({});
                setClicked(true);
            })
            .catch(({response}) => {
                if (response.status === 400) {
                    const {errors: responseErrors} = response.data;

                    const errors = [];

                    responseErrors.map(error => {
                        errors.push({
                            field: error.field,
                            message: error.defaultMessage
                        })
                    })

                    setErrors(errors);
                    setClicked(true);
                } else if (response.status === 500) {
                    setErrors({
                        field: "default",
                        message: response.message
                    });

                    setClicked(true);
                } else console.log("Другая ошибка:", response.status)
            })
    }

    return (
        <Wrapper>
            <Header headerTitle={headers.addBus} />
            <CreateBus onCreateBus={createBus} errors={errors} clicked={clicked} className={"wrapper__create-bus"}/>
        </Wrapper>
    )
}
