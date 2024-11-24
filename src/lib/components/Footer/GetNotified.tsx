import SVGSend from 'assets/svg/SVGSend';
import DecorotiveContainer from 'lib/ui/DecorotiveContainer';
import styled from 'styled-components';

export default function () {
  return (
    <DecorotiveContainer className="GetNotified" color='--primary-1' H3='Subscribe Now' H7="Get Notified About Project">
      <Input>
        <input placeholder="Email" type="text" />
        <button><SVGSend/></button>
      </Input>
    </DecorotiveContainer>
  )
};

const Input = styled.div`
  padding: 10px 19px;
  background-color: rgb(var(--white));
  border-radius: 11px;
  display:flex;
  align-items: center;
  justify-content: center;
  width: min(500px, 100%);
  gap: 20px;

  input {
    width: 100%;
    font-size: 18px;
    line-height: 32px;
    color: rgb(var(--text-dark));
    border:none;
    padding: 10px 19px;

    &:focus {
      outline: 0.5px solid rgb(var(--grayscale-5),0.3);
    }
    &::placeholder {
      color: rgb(var(--grayscale-5));
    }
  }
`;
