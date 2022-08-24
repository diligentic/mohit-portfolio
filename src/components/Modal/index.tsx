import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  ReactElement,
  useEffect,
} from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import OutsideAlerter from '../hooks/checkOutside';
import './style.css';

const Modal = (props: any, ref: any): ReactElement | null => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
    };
  });

  useEffect(() => {
    if (display) return document.body.classList.add('model-open');

    document.body.classList.remove('model-open');
  }, [display]);
  const handleOpen = () => {
    setDisplay(true);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  return (
    <OutsideAlerter setDisplay={setDisplay} display={display}>
      {props.children}
      <button onClick={handleClose} className="cross">
        <StaticImage src="../../assets/close.png" alt="Close Model" />
      </button>
    </OutsideAlerter>
  );
};

export default forwardRef(Modal);
