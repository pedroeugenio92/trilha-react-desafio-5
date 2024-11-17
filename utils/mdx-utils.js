import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts');

    if(data){
        return data;
    }

    return []
}

export const getPostById = async (id) => {
  try {
    const { data, error } = await api.get(`/posts?id=eq.${id}`);

    if (error) {
      return null;
    }

    if (data && data.length > 0) {
      return data[0];
    }
    return null;
  } catch (error) {
    return null;
  }
}
