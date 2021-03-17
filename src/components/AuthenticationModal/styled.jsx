import Modal from 'react-modal';
import styled from 'styled-components';

export const ModalWrapper = styled(Modal)`
  min-width: 400px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 1px solid black;

  .modal-dialog,
  .modal-content {
    height: 100%;
    width: 100%;
    margin: 0;
    border-radius: 10px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 100%;
    min-width: unset;
  }
`;

export const FormErrors = styled.div`
  color: #ff0000;
  background: #ffb6b6;
  margin-bottom: 10px;
  padding: 5px 0;
`;

Modal.setAppElement('#root');
