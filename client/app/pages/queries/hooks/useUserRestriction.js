import { currentUser } from "@/services/auth";
import { useState, useEffect } from "react";

export default function useUserRestriction() {
  const [isUserRestricted, setIsUserRestricted] = useState(currentUser.isUserRestricted());

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUserRestricted(currentUser.isUserRestricted());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return isUserRestricted;
}
