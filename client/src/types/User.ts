export interface WardrobeItem {
  imageUrl?: string;
  category?: string;
  size?: string;
  color?: string;
  description?: string;
}

export interface Look {
  imageUrl: string;
  description?: string;
  category?: string;
  tags?: string;
  likes: number;
}
 

export interface User {
  firstName: string;
  lastName: string;
  profileImg?: string;
  dateOfBirth?: Date;
  gender: string;
  email: string;
  password: string;
  country?: string;
  looks: Look[];
  wardrobe?: WardrobeItem[];
}

