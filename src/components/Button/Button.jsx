import { ButtonStyled } from './Button.styled';

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
}) => {
  return (
    <ButtonStyled type={type} disabled={disabled}>
      {Icon && <Icon size="18" />}
      {children}
    </ButtonStyled>
  );
};
