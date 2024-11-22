import "./DropdownList.css";

export const DropdownList = (props) => {
    return (
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select
                required={props.required}
                value={props.value}
                onChange={(evento) => props.onChange(evento.target.value)}
            >
                <option value="" disabled></option>
                {props.items.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};
