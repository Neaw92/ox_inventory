import React from 'react';

const KeyboardShortcuts: React.FC = () => {
  return (
    <div className="keyboard-shortcuts">
      <div className="shortcut-group">
        <span className="shortcut-label">SPLIT STACK IN HALF</span>
        <div className="shortcut-keys">
          <kbd>SHIFT</kbd>
          <span>+</span>
          <kbd>DRAG</kbd>
        </div>
      </div>

      <div className="shortcut-group">
        <span className="shortcut-label">USE ITEM</span>
        <div className="shortcut-keys">
          <kbd>ALT</kbd>
          <span>+</span>
          <div className="mouse-icon">🖱️</div>
        </div>
      </div>

      <div className="shortcut-group">
        <span className="shortcut-label">DROP HALF STACK</span>
        <div className="shortcut-keys">
          <kbd>CTRL</kbd>
          <span>+</span>
          <kbd>SHIFT</kbd>
          <span>+</span>
          <div className="mouse-icon">🖱️</div>
        </div>
      </div>

      <div className="shortcut-group">
        <span className="shortcut-label">DROP STACK</span>
        <div className="shortcut-keys">
          <kbd>CTRL</kbd>
          <span>+</span>
          <div className="mouse-icon">🖱️</div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;