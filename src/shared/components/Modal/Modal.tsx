import * as React from 'react';
import styled from 'styled-components';
import Portal from '../Portal/Portal';

interface ModalProps {
  children: React.ReactChild;
  visible: boolean;
  toggle: () => void;
}

export default class Modal extends React.Component<ModalProps, {}> {
  render() {
    const { children, visible, toggle } = this.props;

    return (
      <Portal>
        <>
          {visible && (
            <ModalWrapper>
              <ModalWindow>
                <CloseButton onClick={toggle}>Close</CloseButton>
                {children}
              </ModalWindow>
            </ModalWrapper>
          )}
        </>
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWindow = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
