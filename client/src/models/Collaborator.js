import api from '../services/api';

export async function save(coll) {

     try {
          const data = new FormData();
          
          for (var [key, value] of Object.entries(coll)) {
               if (value === "" || !value || (key === "photoURL")) {
                    continue;
               }

               data.append(key, value);
          }
          console.log(coll.photoURL);
          if (coll.photoURL) {
               if (coll.photoURL instanceof File) {
                    data.append("photoURL", coll.photoURL);
               } else {
                    const split = coll.photoURL.split('/');
                    const url = split[split.length - 1]
                    data.append("photoURL", url);
               }
          }

          if (!coll._id) {
               const response = await api.post("/collaborators", data);
               return response.data;
          } else {
               const id = coll._id;
               const response = await api.put(`/collaborators/${id}`, data);
               return response.data;
          }
          
     } catch (error) {
          console.log(error);
     }

}

export async function find() {
     const response = await api.get('/collaborators');;
     return response.data;
}

