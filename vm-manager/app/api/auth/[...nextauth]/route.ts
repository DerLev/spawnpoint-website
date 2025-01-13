import NextAuth from 'next-auth'
import AuthentikProvider from 'next-auth/providers/authentik'

const handler = NextAuth({
  providers: [
    AuthentikProvider({
      clientId: process.env.AUTHENTIK_ID,
      clientSecret: process.env.AUTHENTIK_SECRET,
      issuer: process.env.AUTHENTIK_ISSUER,
      profile(profile, tokens) {
        return {
          id: profile.sub,
          name: profile.name ?? profile.preferred_username,
          email: profile.email,
          image: profile.picture,
          tokens,
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      /* Only for debug */
      // session['token'] = token

      // @ts-ignore
      const groups = token.profile.groups as string[]
      const filteredGroups = groups.filter((group) => group.startsWith('VMM '))
      const filterRoles = filteredGroups.find(
        (group) => group === 'VMM Superuser',
      )
        ? 'superuser'
        : filteredGroups.find((group) => group === 'VMM Admin')
          ? 'admin'
          : filteredGroups.find((group) => group === 'VMM User')
            ? 'user'
            : undefined
      
      // @ts-ignore
      session['user']['groups'] = filteredGroups
      // @ts-ignore
      session['user']['username'] = token.profile.preferred_username
      // @ts-ignore
      session['user']['role'] = filterRoles

      return session
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.profile = profile
      }

      return token
    },
  },
})

export { handler as GET, handler as POST }
