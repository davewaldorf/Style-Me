import { User } from '../types/User';
const BASE_URL = 'https://style-me-server.vercel.app';


export const signUp = async (user: User) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
  }
};

export const signIn = async (user: User) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
  }
}

export const getProfile = async (userId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/profile/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
  }
}

export const getLooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/looks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
  }
}

export const addLook = async (look: any) => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await fetch(`${BASE_URL}/looks/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(look),
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
  }
}

export const uploadImage = async (image: any) => {
  try {
    const response = await fetch(`${BASE_URL}/upload`, {
      method: 'POST',
      body: image,
    });
    if (!response.ok) {
      throw new Error('Failed to upload image');
    }
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw error;
  }
};

export const addToWardrobe = async (wardrobeItem: any) => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await fetch(`${BASE_URL}/wardrobe/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wardrobeItem),
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
  }
}

export const getLikes = async () => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await fetch(`${BASE_URL}/looks/${userId}/likes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
  }
}

export const addLike = async (lookId: string) => {
  try {
    const userId = localStorage.getItem('userId');
    const response = await fetch(`${BASE_URL}/looks/${lookId}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
  }
}

export const logout = async () => {
  localStorage.removeItem('authorized');
  localStorage.removeItem('userId');
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
  }
}