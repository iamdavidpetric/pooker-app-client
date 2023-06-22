import PropTypes from 'prop-types';

const TextField = ({
  area,
  className,
  label,
  labelSize,
  onChange,
  placeholder,
  required,
  type,
  value,
}) => {
  const labelType = { small: 'text-xs', medium: 'text-sm' };
  const labelClass = labelSize ? labelType[labelSize] : '';

  return (
    <div>
      {label && <label className={labelClass}>{label}</label>}
      {area ? (
        <textarea
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          // eslint-disable-next-line
          className={`rounded-md border-gray w-full px-3 py-2 border focus:outline-none focus:ring-primary focus:border-secondary text-sm focus:z-10 transition-all duration-300 ${className}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          // eslint-disable-next-line
          className={`rounded-md border-gray w-full px-3 py-2 border focus:outline-none focus:border-secondary text-sm focus:z-10 transition-all duration-300 ${className}`}
        />
      )}
    </div>
  );
};

TextField.propTypes = {
  area: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  labelSize: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TextField;
