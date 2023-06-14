import React from 'react';
import './ProjectModal.scss';

function ProjectModal({ children, visible, setVisible }) {
  const classes = ['project-modal'];

  if (visible) {
    classes.push('active');
  }

  return (
    <div className={classes.join(' ')} onClick={() => setVisible(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ProjectModal;
