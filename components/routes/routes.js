import {addRouteText, cantDeleteRoute,} from "../../constants/copyright";
import {useRouter} from "next/router";
import RoutesTable from "../routes-table/routes-table";
import AddButton from "../add-button/add-button";

export default function Routes({
                                   routes, error, className, busSufficiency, onCheckSufficiency,
                                   checkingRouteId, onDeleteRoute
                               }) {
    return (
        <div className={`${className} routes`}>

            <AddButton text={addRouteText} path={'/routes/create'}/>

            <RoutesTable routes={routes} busSufficiency={busSufficiency} onCheckSufficiency={onCheckSufficiency}
                         checkingRouteId={checkingRouteId} onDeleteRoute={onDeleteRoute}/>
            {
                Object.keys(error).length ?
                    <div className={"routes__error-container"}>
                        <p className={"routes__error-text"}>{cantDeleteRoute}</p>
                    </div> : null
            }
        </div>
    )
}