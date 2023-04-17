import React, { Dispatch, useRef } from 'react';
import '../styles/Modal.css';
import { Character } from '../helpers/types';
import { Progressing } from './Progressing';

export function Modal(props: {
  characterInfo: Character | null;
  setCurrentCharacter: Dispatch<React.SetStateAction<Character | null>>;
  active: boolean;
  setActive: Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const modalContentContainer = useRef<HTMLDivElement>(null);

  function closeModal() {
    props.setActive(false);
    props.setCurrentCharacter(null);
  }

  return (
    <>
      {props.active && (
        <div data-testid="modalTestId" className="modal" onClick={closeModal}>
          <div
            ref={modalContentContainer}
            className="modal__content"
            data-testid="modalContentTestId"
            onClick={(e) => e.stopPropagation()}
          >
            {(props.characterInfo && (
              <>
                <div>
                  Name: <b>{props.characterInfo?.name}</b>
                </div>
                <div>
                  Gender: <b>{props.characterInfo?.gender}</b>
                </div>
                <div>
                  Status: <b>{props.characterInfo?.status}</b>
                </div>
                <div>
                  Type: <b>{props.characterInfo?.type}</b>
                </div>
                <div>
                  Location: <b>{props.characterInfo?.location.name}</b>
                </div>
                <div>
                  Species: <b>{props.characterInfo?.species}</b>
                </div>
                <div>
                  Origin location: <b>{props.characterInfo?.origin.name}</b>
                </div>
                <img src={props.characterInfo?.image} alt={`${props.characterInfo?.name} image`} />
              </>
            )) || <Progressing />}
          </div>
        </div>
      )}
    </>
  );
}
