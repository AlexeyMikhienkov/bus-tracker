import {search, searchPlaceholder} from "../../constants/copyright";
import {useEffect, useState} from "react";

export default function SearchForm({onSearchByParam, className}) {
    const [paramSearch, setParamSearch] = useState('');

    useEffect(() => {
        onSearchByParam(paramSearch);
    }, [paramSearch])

    function handleSubmit(event) {
        event.preventDefault();

        onSearchByParam(paramSearch);
    }

    return (
        <form className={`${className}__search-form search-form`} onSubmit={handleSubmit}>
            <div className={"search-form__field"}>
                <input className={"search-form__input"} type={"text"} placeholder={searchPlaceholder}
                       value={paramSearch}
                       onChange={event => {
                           setParamSearch(event.target.value)
                       }}/>
            </div>
            <button className={"search-form__button"} type={"submit"}>{search}</button>
        </form>
    )
}