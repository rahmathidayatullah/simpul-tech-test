import { useState, useEffect } from "react";
import { getMessages } from "services/apiMessages";

function useMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState({
    list: false,
    delete: false,
  });

  async function fetchMessages() {
    setLoading({ ...loading, list: true });
    try {
      const { data } = await getMessages();
      setMessages(data);
    } catch (error) {
      // handle error
    } finally {
      setTimeout(() => {
        setLoading({ ...loading, list: false });
      }, 2000);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  return [messages, loading];
}

export default useMessages;
