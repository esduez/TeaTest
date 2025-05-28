import axios from 'axios';

const TEA_API = 'https://api.tea.xyz/v1';

export async function verifyProject(ownerAddress) {
  try {
    const response = await axios.get(`${TEA_API}/verify?owner=${ownerAddress}`);
    return response.data.verified;
  } catch (error) {
    console.error('Doğrulama hatası:', error);
    return false;
  }
}
