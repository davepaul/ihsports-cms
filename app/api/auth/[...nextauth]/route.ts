import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = { 
  secret: process.env.NEXTAUTH_SECRET,
  providers : [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

      const res: any = await new Promise((resolve, reject) => {
        resolve({ok: true, user: {user: 'Dave', token: 'asdfaf', access_token: 'asadsfdas'}});
      });

      // const user = await res.json()
      if (res.ok && res.user) {
        return res.user
      }
      return {user: 'Dave', token: 'asdfaf', access_token: 'asadsfdas', ...credentials};
    }
  }),
],
callbacks: {
  jwt: ({ token, user }: any) => {
    if (user) {
      const { access_token, ...rest } = user;
      token.access_token = access_token;
      token.user = rest;

      // let valid_until_temp = 10800;
      // try {
      //   valid_until_temp = valid_until as number;
      // } catch(e) {
      //   valid_until_temp = 10800;
      // }
      // var valid_until_date = new Date(valid_until_temp*1000);
      // var now = new Date().getTime();
      // const idleTimeout = valid_until_date.getTime() - now;
      // token.valid_until = idleTimeout;
    }
    return token;
  },
  async session({ session, token }: any) {
    session.user = {
      ...session.user,
      ...token.user,
    };

    session.access_token = token.access_token;
    return session;
  },
},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }


