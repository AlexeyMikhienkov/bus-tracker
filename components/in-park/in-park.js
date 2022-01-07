import {chooseRouteText} from "../../constants/copyright";
import {useRouter} from "next/router";

export default function InPark({buses, className}) {
    const router = useRouter();

    return (
        <div className={`${className} in-park`}>
            {
                buses.map(bus => {
                    return (
                        <>
                            <p>{`id: ${bus.id}, driver: ${bus.driverLastName}`}</p>

                            <button onClick={() => router.push(`/choose-route/${bus.id}`)}>{chooseRouteText}</button>
                        </>
                    )
                })
            }
        </div>
    )
}