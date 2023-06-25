import { useState } from "react";
import PhotoModal from "../PhotoModal/PhotoModal";
import { Look, WardrobeItem, User } from "../../types/User";

interface CollectionProps {
  collection: (Look | WardrobeItem)[];
}

function Collection({ collection }: CollectionProps) {
  const [selectedItem, setSelectedItem] = useState<Look | WardrobeItem | null>(null);

  const handleSelectItem = (item: Look | WardrobeItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {collection.map((item: Look | WardrobeItem) => (
        <label htmlFor="photo-modal" key={item._id}>
          <div onClick={() => handleSelectItem(item)} className="relative">
            <img
              className="object-cover w-full h-64 shadow-lg transition-transform duration-500 transform hover:scale-110"
              src={item.imageUrl}
              alt="wardrobe item"
            />
          </div>
        </label>
      ))}
      <PhotoModal item={selectedItem} />
    </div>
  );
}

export default Collection;
