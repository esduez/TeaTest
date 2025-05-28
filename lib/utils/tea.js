import axios from 'axios';

const TEA_API = 'https://api.tea.xyz/v1';

export async function verifyProject(ownerAddress) {
  try {
    const { data } = await axios.get(`${TEA_API}/verify`, {
      params: { owner: ownerAddress }
    });
    return data.verified === true;
  } catch (error) {
    console.error('API Hatası:', error.response?.data || error.message);
    return false;
  }
}
