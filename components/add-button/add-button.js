import {addBusText} from "../../constants/copyright";
import {useRouter} from "next/router";

export default function AddButton({text, path}) {
    const router = useRouter();

    return (
        <div className={"add-button__container"}>
            <button className={"add-button"}
                    onClick={() => router.push('/buses/create')}>{addBusText}
            </button>
        </div>
    )
}