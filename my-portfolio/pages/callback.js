import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAccessToken } from '../utils/auth';

const Callback = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    const handleCallback = async () => {
      const code = router.query.code;
      const accessToken = await getAccessToken(code);
      setAccessToken(accessToken);
    };

    handleCallback();
  }, [router]);

  return <div>Handling Spotify callback...</div>;
};

export default Callback;
