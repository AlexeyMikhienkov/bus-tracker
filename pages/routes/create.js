import {useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";
import CreateBus from "../../components/create-bus/create-bus";
import {put} from "../../utils/requests";
import CreateRoute from "../../components/create-route/create-route";
import Header from "../../components/header/header";
import {headers} from "../../constants/constants";

export default function CreateRoutePage() {
    const [errors, setErrors] = useState({});
    const [buttonClicked, setButtonClicked] = useState(false);

    function createRoute(distance, needBusCount, number) {
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
            <Header headerTitle={headers.addRoute} />
            <CreateRoute onCreateRoute={createRoute} errors={errors} clicked={buttonClicked} className={"wrapper__create-route"}/>
        </Wrapper>
    )
}
