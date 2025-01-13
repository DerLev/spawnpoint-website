import {
  Anchor,
  Burger,
  Group,
  Title,
  AppShellHeader as MAppShellHeader,
} from '@mantine/core'
import Link from 'next/link'

interface HeaderProps {
  navOpen: boolean
  toggleNavOpen: () => void
}

const AppShellHeader = ({ navOpen, toggleNavOpen }: HeaderProps) => (
  <MAppShellHeader px={'md'}>
    <Group justify="space-between" h={'100%'} align="center">
      <Group gap={'xs'}>
        <Burger
          opened={navOpen}
          size={'sm'}
          display={{ base: 'block', sm: 'none' }}
          onClick={() => toggleNavOpen()}
        />
        <Anchor component={Link} href="/" c="dark.0">
          <Title size="h3">Spawnpoint VMM</Title>
        </Anchor>
      </Group>
      {/* Some user login thing here */}
    </Group>
  </MAppShellHeader>
)

export default AppShellHeader
