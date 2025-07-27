export const navigation = {
  home: "/",
  account: "/account",
  deposit: "/deposit",
  withdraw: "/withdraw",
  crypto: "/crypto",
  otc: "/otc/create-order",
  jobs: "/jobs",
} satisfies Record<AppRoutes, string>

export type AppRoutes =
  | "home"
  | "account"
  | "deposit"
  | "withdraw"
  | "crypto"
  | "otc"
  | "jobs"
