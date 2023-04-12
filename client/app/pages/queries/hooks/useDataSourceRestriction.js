import { currentUser } from "@/services/auth";
import { useState, useEffect } from "react";

export default function useDataSourceRestriction(dataSource) {
  const [isDataSourceRestricted, setDataSourceRestricted] = useState(currentUser.isDataSourceRestricted(dataSource));

  useEffect(() => {
    setDataSourceRestricted(currentUser.isDataSourceRestricted(dataSource));
  }, [dataSource]);

  return isDataSourceRestricted;
}
