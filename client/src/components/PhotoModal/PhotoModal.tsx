import React from 'react';

function PhotoModal(item: any) {
  const { description, imageUrl, category, title, size, color, tags } = item.item || {};

  return (
    <div>
      <input type="checkbox" id="photo-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-96 p-10">
          <label htmlFor="photo-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className="card-body flex items-center justify-center">
            <figure>
              <img src={imageUrl} alt={description} 
              />
            </figure>
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p>{description}</p>
            
              {size && color && (
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Size: {size}</div>
                <div className="badge badge-outline">Color: {color}</div>
                </div>
              )}
              {tags  && (
                <div className="card-actions">
                <div className="badge badge-outline">Tags: {tags}</div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

</div>

export default PhotoModal;