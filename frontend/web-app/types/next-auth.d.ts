import  { type DefaultSession } from "next-auth"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {JWT} from 'next-auth/jwt';
 
declare module "next-auth" {
  interface Session {
    user: {
      username: string
    } & DefaultSession["user"]
    accessToken: string
  }

  interface Profile {
    username: string;
  }

  interface User {
    username: string;
  }
}
 
declare module "next-auth/jwt" {
    interface JWT {
        username: string;
        accessToken: string;
    }
}