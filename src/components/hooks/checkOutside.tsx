import React, { useRef, useEffect, ReactElement } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: any, props: Props) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert('You clicked outside of me!');
        props.setDisplay(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', (e) => handleClickOutside(e));
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', (e) => handleClickOutside(e));
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */

interface Props {
  display: boolean;
  children: ReactElement[];
  setDisplay: (val: boolean) => void;
}
export default function OutsideAlerter(props: Props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props);

  return (
    <div
      ref={wrapperRef}
      className={`modal-container ${props.display ? 'show-modal' : ''}`}
    >
      <div className="modal-body">{props.children}</div>
    </div>
  );
}
