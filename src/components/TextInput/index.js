import "./TextInput.css";

const TextInput = (props) => {
    const onType = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <div className="text-input">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={onType}
                required={props.required}
                placeholder={props.placeholder}
                type="text"
            />
        </div>
    );
};

export default TextInput;
