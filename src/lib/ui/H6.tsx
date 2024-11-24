import styled from 'styled-components';

const H6 = styled.div`
  font-weight: 600;
  font-size: clamp(16px,0.6828rem + 1.1858vw,20px);
  line-height: clamp(24px,1.3943rem + 0.3953vw,28px);
`;
  
H6.defaultProps = {
  className: 'H6'
};
  
export default H6;