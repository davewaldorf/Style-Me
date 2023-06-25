import React from 'react';

const SuccessModal = () => {
  const modalId = 'my-modal-4';
  const closeButtonLabel = '✕';

  return (
    <section className="success-modal">
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-center">
          <label htmlFor={modalId} className="btn btn-sm btn-circle absolute right-2 top-2">
            {closeButtonLabel}
          </label>
          <h3 className="font-bold text-lg">Success!</h3>
          <p className="py-4">Your new look has been added!</p>
        </div>
      </div>
    </section>
  );
};

export default SuccessModal;
