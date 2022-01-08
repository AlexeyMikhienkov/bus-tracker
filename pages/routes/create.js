import {useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";
import {put} from "../../utils/requests";
import CreateRoute from "../../components/create-route/create-route";
import Header from "../../components/header/header";
import {headers, routeFormFields} from "../../constants/constants";
import {checkFloatNumberFieldValidation, checkIntNumberFieldValidation} from "../../utils/validations";

export default function CreateRoutePage() {
    const [errors, setErrors] = useState({});
    const [buttonClicked, setButtonClicked] = useState(false);

    function createRoute(distance, needBusCount, number) {
        const paramErrors = [];

        if (!checkFloatNumberFieldValidation(distance)) {
            const error = {
                field: routeFormFields.distance.title,
                message: `Поле "${routeFormFields.distance.text}" не является целым числом или дробным числом, разделенным точкой`
            }

            paramErrors.push(error);
        }

        if (!checkIntNumberFieldValidation(needBusCount)) {
            const error = {
                field: routeFormFields.needBusCount.title,
                message: `Поле "${routeFormFields.needBusCount.text}" не является целым числом`
            }

            paramErrors.push(error);
        }

        if (paramErrors.length) {
            setErrors(paramErrors);
            setButtonClicked(true);

            return;
        }

        const data = {
            distance,
            needBusCount,
            number
        }

        put('/route', data)
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
            <Header headerTitle={headers.addRoute}/>
            <CreateRoute onCreateRoute={createRoute} errors={errors} clicked={buttonClicked}
                         className={"wrapper__create-route"}/>
        </Wrapper>
    )
}
