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

type Blockly = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  code: string;
  setCode: (code: string) => void;
  xml: string;
  setXml: (xml: string) => void;
};
