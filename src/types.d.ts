/* eslint-disable @typescript-eslint/no-explicit-any */
type Store = {
  user: User | null;
  setUser: (user: User) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

type User = {
  id: string;
  name: string;
  email: string;
};
