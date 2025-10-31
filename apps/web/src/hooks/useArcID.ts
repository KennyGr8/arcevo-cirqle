import { useState } from "react";

export function useArcID() {
  const [user, setUser] = useState<{ id?: string; name?: string }>({});
  return {
    user,
    login: async () => setUser({ id: "demo", name: "Arcevo Member" }),
    logout: () => setUser({}),
  };
}
