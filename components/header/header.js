import Image from 'next/image';
import {useRouter} from "next/router";
import {altTextBack, menuTitle} from "../../constants/copyright";
import backArrowPath from '../../public/images/back-left.png'
import {headers} from "../../constants/constants";

export default function Header({headerTitle}) {
    const router = useRouter();

    return (
        <div className={"wrapper__header header"}>
            <div className={`header__title ${headerTitle === menuTitle ? "header__title_without-button" : ""}`}>
                {headerTitle}
            </div>
            {
                headerTitle !== menuTitle ?
                    <button className={"header__button"}
                            onClick={() => {
                                if (headerTitle === headers.autoPark)
                                    router.push('/')
                                else router.back();
                            }}>

                        <Image className={"header__image"} src={backArrowPath} alt={altTextBack}/>
                    </button> :
                    null
            }
        </div>
    )
}
