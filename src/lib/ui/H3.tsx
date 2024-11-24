import styled from 'styled-components';

const H3 = styled.div`

  font-weight: 600;
  font-size: clamp(20px,0.6685rem + 2.1739vw,42px);
  line-height: clamp(28px,1.0099rem + 2.7668vw,56px);
`;
  
H3.defaultProps = {
  className: 'H3'
};
  
export default H3;