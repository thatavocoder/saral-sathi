export type LoginCredentials = {
  email: string
  password?: string
}

export type LoginResponse = {
  token: string
  userId: string
  expiresIn: string
}
