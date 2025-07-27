This is a [Next.js](https://nextjs.org/) project for the Defuse Protocol frontend, a decentralized exchange aggregator.

## Local Development

### Prerequisites

- Node.js 20.13.1 or later
- Yarn package manager
- [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started) (for local database)

### Quick Setup

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd denance-frontend
   yarn install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your configuration. For a minimal setup, you need:
   - Supabase local instance credentials
   - Generated JWT and CRON secrets
   - WalletConnect Project ID (for wallet functionality)

3. **Start Supabase locally**
   ```bash
   # Install Supabase CLI if you haven't already
   # See: https://supabase.com/docs/guides/cli/getting-started
   
   supabase start
   ```
   
   Copy the `API URL` and `service_role key` from the output to your `.env.local`:
   ```env
   SUPABASE_URL="http://127.0.0.1:54321"
   SUPABASE_SERVICE_ROLE_KEY="your-service-role-key-here"
   ```

4. **Generate required secrets**
   ```bash
   # Generate JWT secret
   openssl rand -hex 32
   
   # Generate CRON secret
   openssl rand -hex 16
   ```
   
   Add these to your `.env.local`:
   ```env
   AUTH_JWT_SECRET="your-generated-jwt-secret"
   CRON_SECRET="your-generated-cron-secret"
   ```

5. **Get WalletConnect Project ID** (required for wallet connections)
   - Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
   - Create a new project
   - Add the Project ID to `.env.local`:
   ```env
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID="your-project-id"
   ```

6. **Start the development server**
   ```bash
   yarn dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to see the application.

### Optional External Services

For full functionality, you may want to set up these external services:

#### Analytics & Monitoring
- **Mixpanel**: Token price tracking and analytics ([Get token](https://mixpanel.com/))
- **Sentry**: Error monitoring ([Get DSN](https://sentry.io/))
- **HelpScout**: Customer support widget ([Get Beacon ID](https://helpscout.com/))

#### Data Sources
- **CoinGecko API**: For token price data ([Get API key](https://www.coingecko.com/api/pricing))
- **ClickHouse**: For analytics data storage (optional for basic functionality)

#### Development with Dummy Values
If you don't want to set up external services, you can use dummy values:

```env
# Disable analytics
NEXT_PUBLIC_MIXPANEL_TOKEN=""
NEXT_PUBLIC_SENTRY_ENABLED="false"
NEXT_PUBLIC_HELPSCOUT_BEACON_ID=""

# Disable price data
COINGECKO_API_KEY=""

# Disable advanced analytics
CLICKHOUSE_SERVICE_URL=""
CLICKHOUSE_API_KEY=""
```

### Database Management

#### Updating Database Types
When you make changes to your Supabase schema:

```bash
yarn update-types
```

This generates TypeScript types from your local Supabase instance.

#### Database Migrations
To apply migrations or reset your local database:

```bash
# Reset database and apply migrations
supabase db reset

# Apply specific migration
supabase db push
```

### Development Workflow

1. **Run type checking**
   ```bash
   yarn typecheck
   ```

2. **Run linting**
   ```bash
   yarn check
   ```

3. **Run tests**
   ```bash
   yarn test
   ```

4. **Build for production**
   ```bash
   yarn build
   ```

### Troubleshooting

#### Common Issues

**1. Supabase connection errors**
- Ensure Supabase is running: `supabase status`
- Check that `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` match the output from `supabase start`
- Verify the database is accessible: `supabase db push`

**2. Missing environment variables**
- Check console for specific missing variables
- Compare your `.env.local` with `.env.local.example`
- Ensure no extra spaces around variable values

**3. Wallet connection issues**
- Verify `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` is set correctly
- Check the [WalletConnect documentation](https://docs.walletconnect.com/) for setup

**4. Build failures due to missing static assets**
- Some SVG imports may fail in TypeScript - this is expected in development
- These don't affect runtime functionality

**5. Analytics/monitoring not working**
- Check that external service tokens are correctly configured
- Verify services are active in their respective dashboards
- For development, you can disable these services safely

#### Development vs Production Features

**Works in local development:**
- Core trading functionality
- Wallet connections
- Basic UI components
- Local database operations

**Requires external services:**
- Real-time price data (CoinGecko)
- Error monitoring (Sentry)
- Analytics tracking (Mixpanel)
- Customer support widget (HelpScout)
- Advanced analytics (ClickHouse)

#### Getting Help

- Check the console for specific error messages
- Review the `.env.local.example` file for configuration guidance
- Ensure all required services are running with `supabase status`

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Supabase Documentation](https://supabase.com/docs) - learn about Supabase backend services
- [Defuse Protocol Documentation](https://docs.defuse.org/) - learn about the protocol
- [NEAR Protocol Documentation](https://docs.near.org/) - learn about NEAR blockchain
- [WalletConnect Documentation](https://docs.walletconnect.com/) - learn about wallet connections

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) for Next.js feedback and contributions.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Before deploying, ensure you have:
- Set up production environment variables in your hosting platform
- Configured your production Supabase instance
- Set up required external services (WalletConnect, analytics, etc.)

