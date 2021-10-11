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
import './SamplePads.css';

export const SamplePads = () => {
  const kickPress = useKeyPress('a');
  const hhClosedPress = useKeyPress('s');
  const snarePress = useKeyPress('d');
  const clapPress = useKeyPress('f');
  const tomOnePress = useKeyPress('g');
  const tomTwoPress = useKeyPress('h');

  const [playKick] = useSound(Kick, { interrupt: true });
  const [playHhClosed] = useSound(HhClosed, { interrupt: true });
  const [playSnare] = useSound(Snare, { interrupt: true });
  const [playClap] = useSound(Clap, { interrupt: true });
  const [playTomOne] = useSound(TomOne, { interrupt: true });
  const [playTomTwo] = useSound(TomTwo, { interrupt: true });

  const cssClassesKick = ['pad', kickPress && 'on-play'];
  const cssClassesHhClosed = ['pad', hhClosedPress && 'on-play'];
  const cssClassesSnare = ['pad', snarePress && 'on-play'];
  const cssClassesClap = ['pad', clapPress && 'on-play'];
  const cssClassesTomOne = ['pad', tomOnePress && 'on-play'];
  const cssClassesTomTwo = ['pad', tomTwoPress && 'on-play'];

  return (
    <div className="sample-pads-grid-main">
      <div className="sample-pads-grid-container">
        <p className="pads-title">Try this kit using your keyboard!</p>
        <div className={cssClassesKick.join(' ')}>
          <div className="pad-text">A</div>
          {kickPress && playKick()}
        </div>
        <div className={cssClassesHhClosed.join(' ')}>
          <div className="pad-text">S</div>
          {hhClosedPress && playHhClosed()}
        </div>
        <div className={cssClassesSnare.join(' ')}>
          <div className="pad-text">D</div>
          {snarePress && playSnare()}
        </div>

        <div className={cssClassesClap.join(' ')}>
          <div className="pad-text">F</div>
          {clapPress && playClap()}
        </div>
        <div className={cssClassesTomOne.join(' ')}>
          <div className="pad-text">G</div>
          {tomOnePress && playTomOne()}
        </div>
        <div className={cssClassesTomTwo.join(' ')}>
          <div className="pad-text">H</div>
          {tomTwoPress && playTomTwo()}
        </div>
      </div>
    </div>
  );
};
