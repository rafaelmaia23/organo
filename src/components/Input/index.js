import "./Input.css";

const Input = ({
    label,
    placeholder,
    value,
    onChange,
    required = false,
    type = "text",
}) => {
    const onType = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className={`input input-${type}`}>
            <label>{label}</label>
            <input
                value={value}
                onChange={onType}
                required={required}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
};

export default Input;
