import styled from 'styled-components';

const H2 = styled.div`
  color: rgb(var(--text-dark));
  font-weight: 600;
  text-wrap: pretty;
  font-size: clamp(24px, 0.6542rem + 3.1621vw, 56px);
  line-height: clamp(32px,0.9427rem + 3.9526vw, 72px);
  span {color: rgb(var(--primary-2));}
`;
  
H2.defaultProps = {
  className: 'H2'
};
  
export default H2;