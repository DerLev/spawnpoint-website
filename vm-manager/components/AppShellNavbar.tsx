import {
  AppShellSection,
  NavLink,
  ScrollArea,
  AppShellNavbar as MAppShellNavbar,
} from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiOutlineHomeModern } from 'react-icons/hi2'

const AppShellNavbar = () => {
  const pathname = usePathname()

  return (
    <MAppShellNavbar p="xs">
      <AppShellSection grow component={ScrollArea} scrollbarSize={6} h={'100%'}>
        <NavLink
          label="Home"
          component={Link}
          href="/"
          leftSection={<HiOutlineHomeModern />}
          active={pathname === '/'}
        />
      </AppShellSection>
    </MAppShellNavbar>
  )
}

export default AppShellNavbar
