import { useState } from 'react';
import '../Style/ContactOverlay.css';
import CopyIcon from '../Assets/copy.png';
import CheckedIcon from '../Assets/checked.png';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className="copy-btn" onClick={handleCopy}>
      <img src={copied ? CheckedIcon : CopyIcon} alt={copied ? 'Copied' : 'Copy'} />
    </button>
  );
}

function ContactOverlay({ onClose, closing }) {
  return (
    <div className={`contact-overlay ${closing ? 'closing' : ''}`} onClick={onClose}>
      <div className={`contact-card ${closing ? 'closing' : ''}`} onClick={e => e.stopPropagation()}>

        <button className="contact-close" onClick={onClose}>✕</button>

        <div className="contact-pre-title">Get in Touch</div>
        <div className="contact-title">Fish With Legs</div>

        <div className="contact-divider" />

        <div className="contact-details">

          <a className="contact-row">
            <span className="contact-label">Email</span>
            <div className="contact-info-set">
              <a className="contact-value"  href="mailto:adam.hannay@fishwithlegs.co.uk">adam.hannay@fishwithlegs.co.uk</a>
              <CopyButton text="adam.hannay@fishwithlegs.co.uk" />
            </div>
          </a>

          <a className="contact-row">
            <span className="contact-label">Phone</span>
            <div className="contact-info-set">
              <a className="contact-value"  href="tel:00000 000000">00000 000000</a>
              <CopyButton text="00000 000000" />
            </div>
          </a>

          <a className="contact-row">
            <span className="contact-label">Instagram</span>
            <div className="contact-info-set">
              <a className="contact-value"  href="https://instagram.com/fishwithlegs.co.uk" target="_blank" rel="noreferrer">@fishwithlegs.co.uk</a>
              <CopyButton text="@fishwithlegs.co.uk" />
            </div>
          </a>

        </div>

        <div className="contact-footer">
          <span className="contact-footer-text">Glasgow · Scotland</span>
        </div>

      </div>
    </div>
  );
}

export default ContactOverlay;