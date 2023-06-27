export interface WardrobeItem {
  _id?: string;
  imageUrl?: string;
  category?: string;
  size?: string;
  color?: string;
  description?: string;
}

export interface Look {
  _id :string;
  imageUrl: string;
  description?: string;
  category?: string;
  tags?: string;
  likes: number;
}
 

export interface User {
  _id?: { $oid: string};
  firstName: string;
  lastName: string;
  profileImg?: string;
  dateOfBirth: { $date: string } | string;
  gender: string;
  email: string;
  password: string;
  country?: string;
  looks: Look[];
  wardrobe: WardrobeItem[];
}

