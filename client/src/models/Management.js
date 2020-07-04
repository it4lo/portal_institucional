import api from '../services/api';

export async function find() {
     try {
          const response = await api.get('/managements');
          return response.data;
     } catch (error) {
          console.log(error);
          return [];
     }
}
