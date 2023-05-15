import { MouseEventHandler, ReactNode } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

type BackdropProps = { onClose?: MouseEventHandler<HTMLDivElement> };

type ModalOverlayProps = { children?: ReactNode };

type ModalProps = {
  onClose?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
};

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
