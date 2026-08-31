import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { email } from '@config';

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledTooltip = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background-color: var(--light-navy);
  border: 1px solid var(--lightest-navy);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: var(--light-slate);
  white-space: nowrap;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-4px')});
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }

  .copy-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    padding: 4px;
    margin: -4px;
    color: var(--light-slate);
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover,
    &:focus {
      color: var(--green);
    }
  }
`;

const EmailButton = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle the tooltip alongside the link's normal mailto navigation — the
  // anchor still opens the mail client in a new tab, the tooltip just gives
  // a copy-the-address fallback for anyone without one configured.
  const handleToggle = () => setIsOpen(prev => !prev);

  const handleCopy = async e => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (unsupported browser, insecure context) —
      // the tooltip still shows the address so it can be copied by hand.
    }
  };

  return (
    <StyledWrapper ref={wrapperRef}>
      <a
        className="email-link"
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleToggle}>
        {label}
      </a>
      <StyledTooltip $isOpen={isOpen}>
        <Icon name="Globe" />
        <span>{email}</span>
        <button type="button" className="copy-btn" onClick={handleCopy} aria-label="Copy email address">
          <Icon name={isCopied ? 'Check' : 'Copy'} />
        </button>
      </StyledTooltip>
    </StyledWrapper>
  );
};

EmailButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default EmailButton;
