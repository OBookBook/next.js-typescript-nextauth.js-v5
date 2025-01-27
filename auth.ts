import GitHub from "next-auth/providers/github";
import NextAuth, { NextAuthConfig } from "next-auth";

export const config: NextAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/protected-page") return !!auth;

        return true;
      } catch (error) {
        console.error(error);
      }
    },
    jwt: async ({ token, trigger, session }) => {
      if (trigger === "update") token.name = session?.user?.name;

      return token;
    },
  },
};

export const { auth, handlers, signIn, signOut } = NextAuth(config);
