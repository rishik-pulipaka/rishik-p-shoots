import PropTypes from 'prop-types'

function FormInput({ type, label, height = "h-[100px]", width = "w-[180px]" }) {
    const inputId = label.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <div className="flex flex-col">
        <label htmlFor={inputId} className="self-start ml-8 text-base font-bold text-white tracking-[2.85px] max-md:ml-2.5">
          {label}:
        </label>
        <input
          type={type}
          id={inputId}
          className={`flex shrink-0 mt-2.5 bg-[#5C5C5C] rounded-[34px] ${height} ${width} text-wrap pl-10 text-left text-white font-montserrat text-xl`}
          aria-label={label}
        />
      </div>
    );
  }
  
  FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
  }
  
  export default FormInput;