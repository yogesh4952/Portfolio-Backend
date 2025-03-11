import axios from "axios"
import dotenv from 'dotenv'
dotenv.config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
export const getRepos = async(req,res)=>{
   try {
    const response = await axios.get('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
      params: {
        visibility: 'public', // Fetch public, private, etc.
        affiliation: 'owner,collaborator', // Include repos you own or contribute to
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
}