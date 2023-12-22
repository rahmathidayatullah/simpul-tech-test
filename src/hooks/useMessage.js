import { useEffect, useState } from "react";
import { getMessage } from "services/apiMessages";

function useMessage(id) {
  const [message, setMessage] = useState(null);

  const [loading, setLoading] = useState({
    list: false,
    delete: false,
  });

  async function fetchMessage(id) {
    setLoading({ ...loading, list: true });
    try {
      const { data } = await getMessage(id);
      setMessage(data);
    } catch (error) {
      // handle error
    } finally {
      setLoading({ ...loading, list: false });
    }
  }

  useEffect(() => {
    fetchMessage(id);
  }, [id]);

  return [message, loading, setLoading];
}

export default useMessage;
