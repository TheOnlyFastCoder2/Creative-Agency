import styled from 'styled-components';

const Button = styled.button`
  display:flex;
  align-items: center;
  gap: 16px;
  background-color: rgb(var(--primary-1));
  padding: 19px 35px;
  border-radius: 12px;
  box-shadow: -10px 30px 70px rgb(var(--primary-1), 0.5);
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
  & , & > *  {
    color: rgb(var(--white));
    font-size: clamp(14px, 0.8221rem + 0.1976vw, 16px);
    line-height: 24px;
  }

  @media (max-width: 768px) {
    font-weight: 600;
  }
`;
  
Button.defaultProps = {
  className: 'Button'
};

export default Button;