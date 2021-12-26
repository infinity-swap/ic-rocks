# ic-rocks

UI for [ic.rocks](https://ic.rocks).

Uses [Next.js](https://nextjs.org/docs), [react-query](https://react-query.tanstack.com/), and [tailwind](https://tailwindcss.com/).

## Environment Variables

Here are environment variables with default values, If specified an env var of them, will override its default
Create a `.env` file:

```
LEDGER_CANISTER_ID = "ryjl3-tyaaa-aaaaa-aaaba-cai"
NNS_CYCLES_MINTING_CANISTER_ID = "rkp4c-7iaaa-aaaaa-aaaca-cai"
GOVERNANCE_CANISTER_ID = "rrkah-fqaaa-aaaaa-aaaaq-cai"
NNS_UI_CANISTER_ID = "qoctq-giaaa-aaaaa-aaaea-cai"
METRICS_CANISTER_ID = "bsusq-diaaa-aaaah-qac5q-cai"
SUBNET_ENDPOINT = "https://ic0.app"
GOVERNANCE_METRICS_ENDPOINT = "https://rrkah-fqaaa-aaaaa-aaaaq-cai.raw.ic0.app/metrics"
CANDID_UI_URL = "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/"

API_ENDPOINT = http://localhost:3001
```

## Development

```bash
npm run dev
```

## Building and Running

```bash
npm run build
npm start
```
