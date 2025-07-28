"use client"

import { AccountWidget } from "@defuse-protocol/defuse-sdk"
import { Button } from "@radix-ui/themes"
import Paper from "@src/components/Paper"
import { LIST_TOKENS } from "@src/constants/tokens"
import { useConnectWallet } from "@src/hooks/useConnectWallet"
import { useTokenList } from "@src/hooks/useTokenList"
import { renderAppLink } from "@src/utils/renderAppLink"
import Link from "next/link"

export default function CryptoPage() {
  const { state } = useConnectWallet()
  const tokenList = useTokenList(LIST_TOKENS)

  return (
    <div className="flex flex-col gap-4 w-full">
      <header className="px-3 pt-2">
        <h1 className="text-lg font-bold">Crypto</h1>
        <div className="flex gap-6 mt-2 text-sm">
          <span className="font-bold">Portfolio</span>
          <span className="text-gray-11">Summary</span>
          <span className="text-gray-11">Coins</span>
        </div>
      </header>

      <Paper>
        <AccountWidget
          tokenList={tokenList}
          userAddress={(state.isVerified ? state.address : undefined) ?? null}
          userChainType={state.chainType ?? null}
          renderHostAppLink={renderAppLink}
        />
      </Paper>

      <div className="flex justify-around px-3 pb-4">
        <Link href="/deposit">
          <Button variant="soft" radius="full">Deposit</Button>
        </Link>
        <Link href="/withdraw">
          <Button variant="soft" radius="full">Withdraw</Button>
        </Link>
      </div>
    </div>
  )
}
