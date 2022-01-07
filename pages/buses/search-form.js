import {search, searchPlaceholder} from "../../constants/copyright";
import {useEffect, useState} from "react";

export default function SearchForm({onSearchByLastName}) {
    const [lastNameSearch, setLastNameSearch] = useState('');

    useEffect(() => {
        onSearchByLastName(lastNameSearch);
    }, [lastNameSearch])

    function handleSubmit(event) {
        event.preventDefault();

        onSearchByLastName(lastNameSearch);
    }

    return (
        <form className={"buses__search-form search-form"} onSubmit={handleSubmit}>
            <div className={"search-form__field"}>
                <input className={"search-form__input"} type={"text"} placeholder={searchPlaceholder}
                       value={lastNameSearch}
                       onChange={event => {
                           setLastNameSearch(event.target.value)
                       }}/>
            </div>
            <button className={"form__button"} type={"submit"}>{search}</button>
        </form>
    )
}