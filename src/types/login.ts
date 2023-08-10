export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IContext {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  token?: string;
}

export interface IAuthProvider {
  children: JSX.Element;
}
