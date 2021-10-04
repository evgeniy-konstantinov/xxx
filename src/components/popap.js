import React from 'react';
import styled, { keyframes } from 'styled-components';
import popupClose from '../img/ButtonClose.png';

const Animation = keyframes`
from{
     transform: scale(0)
  }
to{
     top:0;
     left:0;
     transform: scale(1)
     animation-fill-mode: forwards;
    
}
`;

const Block = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
  position: fixed;
  top: ${(props) => props.position.y}px;
  left: ${(props) => props.position.x}px;

  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Animation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const BlockImage = styled.div`
  width: 900px;
  height: 600px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
`;

const Btn = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  top: -25px;
  right: -25px;
  background-image: url(${popupClose});
  background-size: contain;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
const Foto = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const Popup = ({ onClose, uri, position }) => {
  console.log(position);
  return (
    <>
      {uri ? (
        <Block onClick={onClose} position={position}>
          <BlockImage onClick={(e) => e.stopPropagation()}>
            <Foto src={uri} />

            <Btn onClick={onClose} />
          </BlockImage>
        </Block>
      ) : null}
    </>
  );
};
