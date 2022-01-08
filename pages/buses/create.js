import {useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";
import CreateBus from "../../components/create-bus/create-bus";
import {put} from "../../utils/requests";
import {headers} from "../../constants/constants";
import Header from "../../components/header/header";

export default function CreateBusPage() {
    const [errors, setErrors] = useState({});
    const [buttonClicked, setButtonClicked] = useState(false);

    function createBus(driverFirstName, driverLastName, fuelPerKm, number) {
        const data = {
            driverFirstName,
            driverLastName,
            fuelPerKm,
            number
        }

        console.log("!!")

        put('/bus', data)
            .then(() => {
                setErrors({});
                setButtonClicked(true);
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
                    setButtonClicked(true);
                } else if (response.status === 500) {
                    setErrors({
                        field: "default",
                        message: response.message
                    });

                    setButtonClicked(true);
                } else console.log("ИНАЯ ОШИБКА")
            })
    }

    return (
        <Wrapper>
            <Header headerTitle={headers.addBus} />
            <CreateBus onCreateBus={createBus} errors={errors} clicked={buttonClicked} className={"wrapper__create-bus"}/>
        </Wrapper>
    )
}
