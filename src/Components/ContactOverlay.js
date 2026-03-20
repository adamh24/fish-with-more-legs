import { useState } from 'react';
import '../Style/ContactOverlay.css';

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
      {copied ? 'copied ✓' : 'copy'}
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

          <a className="contact-row" href="mailto:adam.hannay@fishwithlegs.co.uk">
            <span className="contact-label">Email</span>
            <span className="contact-value">adam.hannay@fishwithlegs.co.uk</span>
            <CopyButton text="adam.hannay@fishwithlegs.co.uk" />
          </a>

          <a className="contact-row" href="tel:00000 000000">
            <span className="contact-label">Phone</span>
            <span className="contact-value">00000 000000</span>
            <CopyButton text="00000 000000" />
          </a>

          <a className="contact-row" href="https://instagram.com/fishwithlegs" target="_blank" rel="noreferrer">
            <span className="contact-label">Instagram</span>
            <span className="contact-value">@fishwithlegs</span>
            <CopyButton text="@fishwithlegs" />
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