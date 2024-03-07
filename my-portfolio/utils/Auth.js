import axios from "axios";
import querystring from "querystring";

const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/api/token';
SPOTIFY_REDIRECT_URL='http://localhost:3000/callback'


export default  async function(code){
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    try{
        const response = await axios.post(
            SPOTIFY_AUTH_URL,
            querystring.stringify({
                grant_type:'authorization_code',
                code,
                redirect_url:SPOTIFY_REDIRECT_URL,
            }),
            {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${Buffer.form(`${clientId}:${clientSecret}`).toString('base64')}`,
                },
            }
            
            
            );
            return response.data.access_token
        }catch (error){
            console.error('Error getting access token:', error);
        }
}
