import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Image1 from '../img/01.jpg';
import Image2 from '../img/02.jpg';
import Image3 from '../img/03.jpg';
import { Popup } from '../components/popap';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const BlockImg = styled.div`
  width: 400px;
  height: 400px;
`;
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default function MainContainer() {
  const [uri, setUri] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onClose = useCallback(() => setUri(''), []);

  const showPopup = (uri) => {
    setUri(uri);
  };

  // useEffect(() => {
  //   const setEvent = (e) => {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener('click', setEvent);
  //   return () => window.removeEventListener('click', setEvent);
  // }, []);

  return (
    <Container>
      <BlockImg>
        <Img
          src={Image1}
          onClick={(e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            showPopup(Image1);
          }}
        />
      </BlockImg>
      <BlockImg>
        <Img
          src={Image2}
          onClick={(e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            showPopup(Image2);
          }}
        />
      </BlockImg>
      <BlockImg>
        <Img
          src={Image3}
          onClick={(e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            showPopup(Image3);
          }}
        />
      </BlockImg>
      <Popup onClose={onClose} uri={uri} position={position} />
    </Container>
  );
}
