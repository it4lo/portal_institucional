import api from '../services/api';

export async function save(user) {
     try {
          const response = await api.post('/users', user);
          return response.data;
     } catch (error) {
          console.log(error);
     }
}

