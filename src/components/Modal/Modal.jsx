import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalWrap } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  clickEsc = e => {
    if (e.code === 'Escape') {
      this.props.togleModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.clickEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEsc);
  }

  hideModal = e => {
    if (e.currentTarget === e.target) {
      this.props.togleModal();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.hideModal}>
        <ModalWrap>
          <img src={this.props.imageLink} alt="#" />
        </ModalWrap>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  togleModal: PropTypes.func.isRequired,
  imageLink: PropTypes.string.isRequired,
};
