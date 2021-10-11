import React from 'react';
import { BsFileEarmarkMusic, BsBricks } from 'react-icons/bs';
import { FaRegCopyright } from 'react-icons/fa';
import { MdOutlineHighQuality } from 'react-icons/md';
import './Details.css';

export const Details = () => {
  return (
    <div className="details-main">
      <div className="details-grid-container">
        <div className="detail-item">
          <div className="details-icon-circle">
            <BsFileEarmarkMusic className="details-icon" />
          </div>
          <h2 className="details-title">Multiple Formats</h2>
          <p className="details-text">
            Our samples come in many formats. Wav, Rex, Aiff, MIDI
          </p>
        </div>
        <div className="detail-item">
          <div className="details-icon-circle">
            <BsBricks className="details-icon" />
          </div>
          <h2 className="details-title">Highly Customizable</h2>
          <p className="details-text">
            Drag and drop audio or use MIDI with our Synth Presets for Massive
            and Serum
          </p>
        </div>
        <div className="detail-item">
          <div className="details-icon-circle">
            <FaRegCopyright className="details-icon" />
          </div>
          <h2 className="details-title">Copyright Free</h2>
          <p className="details-text">
            You can use this sounds freely without worrying about Copyright
            claims
          </p>
        </div>
        <div className="detail-item">
          <div className="details-icon-circle">
            <MdOutlineHighQuality className="details-icon" />
          </div>
          <h2 className="details-title">High Quality</h2>
          <p className="details-text">
            24 bits, 96khz, lossless, carefully processed and mixed
          </p>
        </div>
      </div>
    </div>
  );
};
