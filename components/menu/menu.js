import MenuContent from "../menu-content/menu-content";

export default function Menu({className}) {
    return (
        <div className={`${className} menu`}>
            <MenuContent />
        </div>
    )
}