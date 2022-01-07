import Wrapper from "../../components/wrapper/wrapper";
import CheckFuel from "../../components/check-fuel/check-fuel";
import {get} from "../../utils/requests";

export default function CheckFuelPage({consumptions}) {
    return (
        <Wrapper>
            <CheckFuel className={"wrapper__check-fuel"} consumptions={consumptions} />
        </Wrapper>
    )
}

export async function getStaticProps() {
    const res = await get('/action/fuel-consumption');
    const consumptions = res.data;

    return {
        props: {
            consumptions
        }
    }
}