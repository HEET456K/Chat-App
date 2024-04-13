const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
                    <span className='label-text text-white'>Male</span>
                    <input
                        type='checkbox'
                        checked={selectedGender === "male"}
                        className='dark:bg-black/10 dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5 bg-blue-600 '
                        onChange={() => onCheckboxChange("male")}
                    />

                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className='label-text text-white'>Female</span>
                    <input
                        type='checkbox'
                        className='dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5 '
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};
export default GenderCheckbox;