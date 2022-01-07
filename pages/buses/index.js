import {del, getWithParams} from "../../utils/requests";
import Wrapper from "../../components/wrapper/wrapper";
import Buses from "../../components/buses/buses";
import {useState} from "react";

export default function BusesPage({buses: serverBuses}) {
    const [buses, setBuses] = useState(serverBuses);

    function deleteBus(busId) {
        del(`/bus/${busId}`, {
            id: busId
        })
            .then(() => setBuses(buses.filter(bus => bus.id !== busId)))
            .catch(({response}) => {
                console.log("ОШИБКА УДАЛЕНИЯ", response)
            })
    }

    //TODO: Сделать компонент и добавить в страницы "автопарк" и "на маршруте"
    function searchByLastName(lastName) {
        if (lastName)
            getWithParams('/bus/filter', {driverLastNameStartWith: lastName})
                .then(res => setBuses(res.data))
                .catch(({response}) => console.log(response));
        else
            setBuses(serverBuses);
    }

    return (
        <Wrapper>
            <Buses buses={buses} className={"wrapper__buses"} onDeleteBus={deleteBus}
                   onSearchByLastName={searchByLastName}/>
        </Wrapper>
    )

}

export async function getStaticProps() {
    const params = {
        limit: 10000
    }

    const resBuses = await getWithParams('/bus', params);
    const buses = resBuses.data;

    return {
        props: {
            buses
        }
    }
}