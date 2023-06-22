import PropTypes from 'prop-types';

const Card = ({ className, title, subtitle, children, iconTopLeft }) => {
  return (
    <div
      className={`flex flex-col justify-around bg-white h-96 w-112 border rounded-md border-gray ${className}`}>
      {iconTopLeft ? (
        <div className='flex w-full items-center'>
          <div className='flex items-start pr-6'>{iconTopLeft}</div>
          <div>
            <div className='text-lg font-bold pt-2'>{title}</div>
            <div className='text-sm'>{subtitle}</div>
          </div>
        </div>
      ) : (
        <>
          <div className='text-lg font-bold pt-2'>{title}</div>
          <div className='text-sm'>{subtitle}</div>
        </>
      )}

      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  iconTopLeft: PropTypes.any,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
