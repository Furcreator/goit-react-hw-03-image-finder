import { Btn, BtnWrapper } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <BtnWrapper>
      <Btn type="button" onClick={onClick}>
        Load more
      </Btn>
    </BtnWrapper>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
