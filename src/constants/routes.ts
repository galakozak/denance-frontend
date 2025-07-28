export const navigation = {
  home: "/",
  account: "/account",
  crypto: "/crypto",
  deposit: "/deposit",
  withdraw: "/withdraw",
  otc: "/otc/create-order",
  jobs: "/jobs",
} satisfies Record<AppRoutes, string>

export type AppRoutes =
  | "home"
  | "account"
  | "crypto"
  | "deposit"
  | "withdraw"
  | "otc"
  | "jobs"
