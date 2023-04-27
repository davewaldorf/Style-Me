import { useEffect, useState } from "react";
import { ReactComponent as Heart } from "../../assets/favorite_border.svg";
import { ReactComponent as HeartFilled } from "../../assets/favorite.svg";
import PhotoModal from "../PhotoModal/PhotoModal";
import { render } from "@testing-library/react";

function Collection({ collection }: any) {
  const [liked, setLiked] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [renderCollection, setRenderCollection] = useState(collection); 
  
 
  const handleLike = (itemId: string) => {
    if (liked.includes(itemId)) {
      setLiked(liked.filter((id) => id !== itemId));
    } else {
      setLiked([...liked, itemId]);
    }
  };

  const handleSelectItem = (item: any) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    console.log('refreshed');
    setRenderCollection(collection); 
  }, [renderCollection]);

  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {renderCollection.map((item: any) => (
        <label htmlFor="my-modal-3">
        <div key={item._id} onClick={() => handleSelectItem(item)} className="relative">
          <img
            className="object-cover w-full h-64 shadow-lg transition-transform duration-500 transform hover:scale-110"
            src={item.imageUrl}
            alt="wardrobe item"
          />
          {/* {liked.includes(item._id) ? (
            <HeartFilled
              className="absolute bottom-1 right-1 fill-red cursor-pointer"
              onClick={() => handleLike(item._id)}
            />
          ) : (
            <Heart
              className="absolute bottom-1 right-1 cursor-pointer"
              onClick={() => handleLike(item._id)}
            />
          )} */}
        </div>
        <PhotoModal item={selectedItem} />
        </label>
      ))}
    </div>
  );
}

export default Collection;

//TODO: fix the likes
//TODO: show the details over hover
