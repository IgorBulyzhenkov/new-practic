import s from './Modal.module.css';
import { createPortal } from 'react-dom';
const { Component } = require('react');

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

  componentDidMount() {
    console.log('modal componentDidMount');
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    console.log('modal componentWillUnmount');
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackdropClick}>
        <div className={s.content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
