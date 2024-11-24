import styled from 'styled-components';

const P = styled.div`
  font-size: clamp(14px, 0.7693rem + 0.3953vw, 18px);
  line-height: clamp(24px,1.2885rem + 0.7905vw, 32px);
  color: rgb(var(--text-gray));
`;
  
P.defaultProps = {
  className: 'P'
};
  
export default P;