import styled from 'styled-components';

export default function () {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      className="SVGLogo"
      viewBox="0 0 48 48"
      >
      <path
        fill="#4C40F7"
        d="M15.471 0H32.53C41.073 0 48 6.984 48 15.6v16.8C48 41.016 41.073 48 32.529 48H15.47C6.927 48 0 41.016 0 32.4V15.6C0 6.984 6.927 0 15.471 0"
      ></path>
      <path
        fill="#fff"
        d="M32.398 18.57a10 10 0 1 0 .534 9.927l-5.36-2.698a4 4 0 1 1-.213-3.97z"
      ></path>
      </SVG>

  )
};

const SVG = styled.svg`
  background-color: #4C40F7;
  box-shadow: -5px 10px 30px rgba(76, 64, 247, 0.5);
  border-radius: 12px;
  z-index: 99;
`;