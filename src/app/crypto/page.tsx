"use client"

import { useState } from "react"
import { Plus } from "@phosphor-icons/react"
import { Button } from "@radix-ui/themes"
import Paper from "@src/components/Paper"
import { cn } from "@src/utils/cn"

interface WalletItem {
  symbol: string
  name: string
  balance: number
  fiatValue: number
  dailyChange: number
}

const demoWallets: WalletItem[] = [
  { symbol: "BTC", name: "Bitcoin", balance: 0.5, fiatValue: 30000, dailyChange: 1.2 },
  { symbol: "ETH", name: "Ethereum", balance: 10, fiatValue: 25000, dailyChange: -0.5 },
  { symbol: "USDT", name: "Tether", balance: 2000, fiatValue: 2000, dailyChange: 0.0 },
]

export default function CryptoPage() {
  const [showBalance, setShowBalance] = useState(true)

  const totalCrypto = demoWallets.reduce((acc, w) => acc + w.fiatValue, 0)

  return (
    <Paper>
      <div className="flex flex-col gap-4">
        {/* Header with tabs */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-gray-12">Crypto</h1>
          <div className="flex gap-4">
            <Tab active>Portfolio</Tab>
            <Tab>Summary</Tab>
            <Tab>Coins</Tab>
          </div>
        </div>

        {/* Total crypto widget */}
        <div className="flex items-center justify-between bg-gray-3 rounded-xl p-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-11">Total crypto</span>
            <span className="text-2xl font-bold text-gray-12">
              {showBalance ? `$${totalCrypto.toLocaleString()}` : "******"}
            </span>
          </div>
          <Button
            size="2"
            variant="ghost"
            onClick={() => setShowBalance((v) => !v)}
            className="ml-2"
          >
            {showBalance ? "Hide" : "Show"}
          </Button>
        </div>

        {/* Wallet list */}
        <div className="flex flex-col gap-2">
          {demoWallets.map((w) => (
            <WalletRow key={w.symbol} item={w} />
          ))}
        </div>

        {/* Staking placeholder */}
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2 text-gray-12">Staking</h2>
          <div className="flex items-center justify-between bg-gray-3 rounded-xl p-4">
            <span className="text-gray-11">Coming soon</span>
            <Plus className="text-gray-11" />
          </div>
        </div>
      </div>
    </Paper>
  )
}

function Tab({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={cn(
        "text-sm font-medium cursor-pointer",
        active ? "text-gray-12" : "text-gray-10"
      )}
    >
      {children}
    </span>
  )
}

function WalletRow({ item }: { item: WalletItem }) {
  return (
    <div className="flex items-center justify-between bg-gray-2 rounded-xl p-3">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-gray-5 flex items-center justify-center text-xs font-bold text-gray-12">
          {item.symbol}
        </div>
        <div className="flex flex-col">
          <span className="text-gray-12 font-medium text-sm">{item.name}</span>
          <span className="text-gray-11 text-xs">
            {item.balance} {item.symbol}
          </span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-gray-12 font-medium text-sm block">
          ${item.fiatValue.toLocaleString()}
        </span>
        <span
          className={cn(
            "text-xs",
            item.dailyChange >= 0 ? "text-green-9" : "text-red-9"
          )}
        >
          {item.dailyChange >= 0 ? "+" : ""}
          {item.dailyChange}%
        </span>
      </div>
    </div>
  )
}

