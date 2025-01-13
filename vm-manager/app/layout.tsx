import type { Metadata } from 'next'
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core'
import '@mantine/core/styles.css'
import AppShell from '@/components/AppShell'

export const metadata: Metadata = {
  title: 'Spawnpoint VMM',
  description: 'Manage Proxmox VMs and CTs with much more granular permissions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider>
          <AppShell>{children}</AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
