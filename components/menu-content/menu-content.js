import {menuContentTitles} from "../../constants/constants";
import Link from "next/link";

export default function MenuContent() {
    return Object.entries(menuContentTitles).map(([title, item]) => {
        return (
            <div key={title} className={"menu-content__link-wrapper"}>
                <Link href={item.path}>
                    <a className={"menu-content__link"}>{item.title}</a>
                </Link>
            </div>
        )
    })
}