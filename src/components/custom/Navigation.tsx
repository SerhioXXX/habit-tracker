'use client'

import { RiDashboardLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { GiHabitatDome } from 'react-icons/gi'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

type Props = {}

const Navigation = (props: Props) => {
  const pathname = usePathname()

  const navigationItems = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: RiDashboardLine,
    },
    {
      label: 'Profile',
      href: '/profile',
      icon: CgProfile,
    },
    {
      label: 'Habits',
      href: '/habits',
      icon: GiHabitatDome,
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-background border-t">
      <div className="grid h-full grid-cols-3 max-w-md mx-auto">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary',
              pathname === item.href && 'text-primary',
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
export default Navigation
