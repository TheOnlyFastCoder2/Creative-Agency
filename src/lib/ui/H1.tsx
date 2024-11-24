import styled from 'styled-components';

const H1 = styled.div`
  color: rgb(var(--text-dark));
  font-weight: 600;
  text-wrap: pretty;
  font-size: clamp(24px, -0.086rem + 5.9289vw, 84px);
  line-height: clamp(32px,0.9427rem + 3.9526vw, 72px);
  span {color: rgb(var(--primary-2));}
`;
  
H1.defaultProps = {
  className: 'H1'
};
  
export default H1;