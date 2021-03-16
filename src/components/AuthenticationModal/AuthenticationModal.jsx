import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { AuthenticationLabels } from '../../constants/constans';
import { useAuthentication } from '../contexts/AuthenticationContext';
import { bool, string, func } from 'prop-types';

import * as S from './styled';

const AuthenticationModal = ({ action, isOpen, language, onClose }) => {
  const [file, updateFile] = useState(null);
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const { handleAuthentication, errors, updateErrors } = useAuthentication();
  const isSignUp = action === 'sign_up';

  const resetStates = () => {
    updateFile(null);
    updateUsername('');
    updatePassword('');
    updateErrors();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    if (isSignUp) {
      formData.append('file', file);
    }
    formData.append('username', username);
    formData.append('password', password);

    handleAuthentication(action.replace('_', ''), formData, resetStates);
  };

  const handleClose = () => {
    onClose();
    resetStates();
  };

  return (
    <S.ModalWrapper
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{ overlay: { background: '#a2a2a2bf' } }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onHide={onClose}>
          <Modal.Title>{AuthenticationLabels[action][language]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {errors && <S.FormErrors>{errors}</S.FormErrors>}
            {isSignUp && (
              <Form.Group>
                <Form.File
                  required
                  label={
                    file ? file.name : AuthenticationLabels.fileLabel[language]
                  }
                  data-browse={AuthenticationLabels.fileButton[language]}
                  custom
                  onChange={(event) => updateFile(event.target.files[0])}
                ></Form.File>
              </Form.Group>
            )}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                {AuthenticationLabels.usernameLabel[language]}
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={AuthenticationLabels.usernamePlaceholder[language]}
                onChange={(event) => updateUsername(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                {AuthenticationLabels.passwordLabel[language]}
              </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder={AuthenticationLabels.passwordPlaceholder[language]}
                onChange={(event) => updatePassword(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {AuthenticationLabels[action][language]}
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </S.ModalWrapper>
  );
};

AuthenticationModal.propTypes = {
  action: string.isRequired,
  isOpen: bool.isRequired,
  language: string.isRequired,
  onClose: func.isRequired
};

export default AuthenticationModal;
