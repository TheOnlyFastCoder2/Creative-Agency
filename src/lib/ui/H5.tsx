import styled from 'styled-components';

const H5 = styled.div`
  font-weight: 600;
  font-size: clamp(20px,1.1443rem + 0.3953vw,24px);
  line-height: clamp(28px,1.6443rem + 0.3953vw,32px);
`;
  
H5.defaultProps = {
  className: 'H5'
};
  
export default H5;