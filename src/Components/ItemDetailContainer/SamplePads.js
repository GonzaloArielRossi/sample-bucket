import React from 'react';
import useSound from 'use-sound';
import { BsPlayCircle } from 'react-icons/bs';

import { itemDetailsPadsInfo } from '../../Helpers/itemDetailsPadsInfo';
import { useKeyPress } from '../../Helpers/padKeyPress';

import './SamplePads.css';

export const SamplePads = ({ itemId }) => {
  const padData = itemDetailsPadsInfo(itemId);
  const keyPresses = {
    pad1: useKeyPress('a'),
    pad2: useKeyPress('s'),
    pad3: useKeyPress('d'),
    pad4: useKeyPress('f'),
    pad5: useKeyPress('g'),
    pad6: useKeyPress('h')
  };
  const cssClasses = {
    pad1: ['pad', keyPresses.pad1 && 'on-play'],
    pad2: ['pad', keyPresses.pad2 && 'on-play'],
    pad3: ['pad', keyPresses.pad3 && 'on-play'],
    pad4: ['pad', keyPresses.pad4 && 'on-play'],
    pad5: ['pad', keyPresses.pad5 && 'on-play'],
    pad6: ['pad', keyPresses.pad6 && 'on-play']
  };
  const [playPad1] = useSound(padData.data.kick);
  const [playPad2] = useSound(padData.data.hhClosed);
  const [playPad3] = useSound(padData.data.snare);
  const [playPad4] = useSound(padData.data.hhOpen);
  const [playPad5] = useSound(padData.data.perc);
  const [playPad6] = useSound(padData.data.cymbal);

  return (
    <div className="sample-pads-grid-main">
      <div className="sample-pads-grid-container">
        <div className="pads-loop-main">
          <p className="pads-title">Try this kit using your keyboard!</p>
          <audio
            controls
            loop
            className="pads-loop "
            src={padData.data.loop}
          ></audio>
          <p className="pad-info --no-margin">Play Melody in loop</p>
        </div>

        <div className={cssClasses.pad1.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad1 && playPad1()}
          <p className="pad-info">Kick | Key: A</p>
        </div>
        <div className={cssClasses.pad2.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad2 && playPad2()}
          <p className="pad-info">HH Closed | Key: S</p>
        </div>
        <div className={cssClasses.pad3.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad3 && playPad3()}
          <p className="pad-info">Snare | Key: D</p>
        </div>

        <div className={cssClasses.pad4.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad4 && playPad4()}
          <p className="pad-info">HH open | Key:F</p>
        </div>
        <div className={cssClasses.pad5.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad5 && playPad5()}
          <p className="pad-info">Perc | Key: G</p>
        </div>
        <div className={cssClasses.pad6.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad6 && playPad6()}
          <p className="pad-info">Cymbal | Key: H</p>
        </div>
      </div>
    </div>
  );
};
