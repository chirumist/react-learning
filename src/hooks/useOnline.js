import { useEffect, useState } from "react";

export default () => {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handelOnline = () => setOnline(true);
    const handelOffline = () => setOnline(false);

    window.addEventListener("online", handelOnline);
    window.addEventListener("offline", handelOffline);

    return () => {
      window.removeEventListener("online", handelOnline);
      window.removeEventListener("offline", handelOffline);
    };
  }, []);

  return online;
};
