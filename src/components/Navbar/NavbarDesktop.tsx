"use client"

import { Plus } from "@phosphor-icons/react"
import { Button } from "@radix-ui/themes"
import { navigation } from "@src/constants/routes"
import { useIsActiveLink } from "@src/hooks/useIsActiveLink"
import { cn } from "@src/utils/cn"
import Link from "next/link"

export function NavbarDesktop() {
  const { isActive } = useIsActiveLink()

  const isWalletActive = isActive(navigation.account)
  const isHomeActive = isActive(navigation.home) || isActive(navigation.otc)
  const isCryptoActive = isActive(navigation.crypto)

  return (
    <nav className="flex justify-between items-center gap-4">
      {/* Home */}
      <NavItem label="Home" isActive={isHomeActive} href={navigation.home} />

      {/* Crypto */}
      <NavItem label="Crypto" isActive={isCryptoActive} href={navigation.crypto} />

      {/* Wallet */}
      <NavItem label="Wallet" isActive={isWalletActive} href={navigation.account} />
    </nav>
  )
}

function NavItem({
  label,
  isActive,
  href,
}: {
  label: string
  isActive: boolean
  href: string
}) {
  return (
    <Link href={href}>
      <Button
        radius="full"
        color="gray"
        highContrast
        variant={isActive ? "solid" : "soft"}
        className={cn(
          "relative text-sm cursor-pointer",
          isActive ? "text-gray-1" : "bg-transparent"
        )}
        asChild
      >
        <span className="text-sm font-bold whitespace-nowrap">{label}</span>
      </Button>
    </Link>
  )
}

export function NavbarDeposit() {
  return (
    <Link href={navigation.deposit}>
      <Button
        radius="full"
        color="gray"
        highContrast
        variant="soft"
        className="flex items-center gap-2 text-sm cursor-pointer"
      >
        <Plus className="size-3 text-gray-12" weight="bold" />
        <span className="text-sm font-bold whitespace-nowrap">Deposit</span>
      </Button>
    </Link>
  )
}
