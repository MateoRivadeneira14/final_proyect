
import axios from 'axios';

const API_VALIDATE = 'http://localhost:3005/api/validate'; // Cambiar si tu micro usa otro puerto

export async function validateToken(token) {
  try {
    const response = await axios.get(API_VALIDATE, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al validar token:', error);
    return null;
  }
}
