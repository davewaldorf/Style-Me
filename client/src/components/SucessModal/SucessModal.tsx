const SuccessModal = () => {
  return (
    <div>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box text-center">
              <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="font-bold text-lg">Success!</h3>
              <p className="py-4">Your new look has been added!</p>
            </div>
          </div>
        </div>
  );
};

export default SuccessModal;