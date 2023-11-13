import { useEffect, useState } from "react";
import { AdminView } from "./AdminView";
import { NonAdminView } from "./NonAdminView";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localDreamUser = localStorage.getItem("dreams_user");
    const dreamUserObject = JSON.parse(localDreamUser);

    setCurrentUser(dreamUserObject);
  }, []);

  return currentUser.id === 1 ? (
    <AdminView currentUser={currentUser} />
  ) : (
    <NonAdminView currentUser={currentUser} />
  );
};
