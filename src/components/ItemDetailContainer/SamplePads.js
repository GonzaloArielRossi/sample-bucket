import React, { PureComponent } from 'react';
import '../../Hooks/pad-keypress';
import { useKeyPress } from '../../Hooks/pad-keypress';
import useSound from 'use-sound';
import {
  Kick,
  HhClosed,
  Snare,
  Clap,
  TomOne,
  TomTwo
} from '../../Assets/Audio';
import { BsPlayCircle } from 'react-icons/bs';
import './SamplePads.css';

export const SamplePads = () => {
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

  const [playPad1] = useSound(Kick, { interrupt: true });
  const [playPad2] = useSound(HhClosed, { interrupt: true });
  const [playPad3] = useSound(Snare, { interrupt: true });
  const [playPad4] = useSound(Clap, { interrupt: true });
  const [playPad5] = useSound(TomOne, { interrupt: true });
  const [playPad6] = useSound(TomTwo, { interrupt: true });

  return (
    <div className="sample-pads-grid-main">
      <div className="sample-pads-grid-container">
        <p className="pads-title">Try this kit using your keyboard!</p>
        <div className={cssClasses.pad1.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad1 && playPad1()}
          <p className="pad-info">Kick | Key: A</p>
        </div>
        <div className={cssClasses.pad2.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad2 && playPad2()}
          <p className="pad-info">HH | Key: S</p>
        </div>
        <div className={cssClasses.pad3.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad3 && playPad3()}
          <p className="pad-info">Snare | Key: D</p>
        </div>

        <div className={cssClasses.pad4.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad4 && playPad4()}
          <p className="pad-info">Clap | Key:F</p>
        </div>
        <div className={cssClasses.pad5.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad5 && playPad5()}
          <p className="pad-info">Tom 1 | Key: G</p>
        </div>
        <div className={cssClasses.pad6.join(' ')}>
          <BsPlayCircle className="pad-icon" />
          {keyPresses.pad6 && playPad6()}
          <p className="pad-info">Tom 2 | Key: H</p>
        </div>
      </div>
    </div>
  );
};
