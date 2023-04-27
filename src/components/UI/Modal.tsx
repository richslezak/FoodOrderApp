import {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

type BackdropProps = { onClose?: MouseEventHandler<HTMLDivElement> };

type ModalOverlayProps = {
  children?:
    | string
    | number
    | boolean
    | ReactFragment
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactPortal
    | null;
};

type ModalProps = {
  onClose?: MouseEventHandler<HTMLDivElement>;
  children?:
    | string
    | number
    | boolean
    | ReactFragment
    | ReactPortal
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null;
};

const Backdrop = (props: BackdropProps) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;

const Modal = (props: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
