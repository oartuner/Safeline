import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, content, icon }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => document.body.style.overflow = 'unset';
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    {icon && <span className="modal-icon">{icon}</span>}
                    <h3>{title}</h3>
                </div>
                <div className="modal-body">
                    <p>{content}</p>
                </div>
            </div>

            <style jsx="true">{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: white;
          width: 90%; max-width: 500px;
          padding: 2.5rem;
          border-radius: 16px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          animation: slideUp 0.3s ease;
          border-top: 4px solid var(--secondary);
        }

        .modal-close {
          position: absolute;
          top: 15px; right: 20px;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: var(--text-muted);
          transition: color 0.3s;
          line-height: 1;
        }

        .modal-close:hover { color: var(--error); }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .modal-icon {
          font-size: 2rem;
          background: var(--bg-alt);
          width: 50px; height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--secondary);
        }

        .modal-header h3 {
          font-size: 1.4rem;
          color: var(--primary);
          font-weight: 700;
        }

        .modal-body p {
          color: var(--text-main);
          line-height: 1.8;
          font-size: 1.05rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default Modal;
