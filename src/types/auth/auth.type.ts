export interface LoginResponse extends Response {
  token: string;
  expired_at: string;
}

export interface SignupResponse extends Response {
  token: string;
  expired_at: string;
}
