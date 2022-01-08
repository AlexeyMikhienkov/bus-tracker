export default function FormField({param, onSetParam, fieldObj}) {
    const {title, text} = fieldObj;

    return (
        <div className={"form__field"} key={title}>
            <label className={"form__label"} htmlFor={title}>{text}</label><br/>
            {
                <input className={"form__input"} type={"text"} id={title}
                       value={param}
                       onChange={event => {
                           onSetParam(event.target.value)
                       }}/>
            }
            <br/>
        </div>
    )
}