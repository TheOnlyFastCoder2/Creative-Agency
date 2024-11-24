import styled from 'styled-components';

const H4 = styled.div`
  font-size: clamp(20px,1.0385rem + 0.7905vw,28px);
  line-height: clamp(32px, 1.7885rem + 0.7905vw,40px);
`;
  
H4.defaultProps = {
  className: 'H4'
};
  
export default H4;