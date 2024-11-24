
import H3 from 'lib/ui/H3';
import H7 from 'lib/ui/H7';
import React from 'react';
import styled from 'styled-components';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  H7: string,
  H3: string,
  color: string,
  children: JSX.Element;

}

export default function (props: IProps) {
  return (
    <DecorotiveContainer color={props.color} className={props?.className}>
      <H7>{props.H7}</H7>
      <H3>{props.H3}</H3>
      {props.children}
    </DecorotiveContainer>
  )
};

const DecorotiveContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(var(${({color}) => color}));
    width: min(100%, 1120px);
    height: 340px;
    border-radius: 20px;
    padding: 0 24px;
    .H7,.H3 {
      color: rgb(var(--white));
    }

    .H3 {
      margin-bottom: 32px;
      margin-top: 16px;
    }
`;

