import PropTypes from 'prop-types';

const Button = ({ className, disabled, iconLeft, iconRight, label, onClick, variant }) => {
  const buttonType = {
    smallPrimary: disabled ? 'bg-secondary opacity-60 w-28 h-8' : 'bg-secondary w-28 h-8',
    primary: disabled ? 'bg-secondary opacity-60 w-full h-8' : 'w-full bg-secondary h-8',
    transparent: 'w-full h-8 text-black',
  };

  return (
    <button
      className={`flex items-center px-2 rounded-md ${buttonType[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {iconLeft}
      {label}
      {iconRight}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  variant: PropTypes.string,
};

export default Button;
