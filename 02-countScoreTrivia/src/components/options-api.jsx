/* -------Itera las opciones de respuesta para poner tantas opciones como me de la Api*/
export function OptionsComponent({ allOptions, onOptionChange, selectedOption }) {
    if (!allOptions) {
        return null;
    }

    return (
        <div>
            {allOptions.map((option, index) => (
                <div key={index} className="optionBox">
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                        />
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
}