module.exports = {
  LEDGER_CANISTER_ID: process.env.LEDGER_CANISTER_ID || "ryjl3-tyaaa-aaaaa-aaaba-cai",
  NNS_CYCLES_MINTING_CANISTER_ID: process.env.NNS_CYCLES_MINTING_CANISTER_ID || "rkp4c-7iaaa-aaaaa-aaaca-cai",
  GOVERNANCE_CANISTER_ID: process.env.GOVERNANCE_CANISTER_ID || "rrkah-fqaaa-aaaaa-aaaaq-cai",
  NNS_UI_CANISTER_ID: process.env.NNS_UI_CANISTER_ID || "qoctq-giaaa-aaaaa-aaaea-cai",
  METRICS_CANISTER_ID: process.env.METRICS_CANISTER_ID || "bsusq-diaaa-aaaah-qac5q-cai",

  SUBNET_ENDPOINT: process.env.SUBNET_ENDPOINT || "https://ic0.app",
  GOVERNANCE_METRICS_ENDPOINT: process.env.GOVERNANCE_METRICS_ENDPOINT || `https://${this.GOVERNANCE_CANISTER_ID}.raw.ic0.app/metrics`,
  CANDID_UI_URL: process.env.CANDID_UI_URL || "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.ic0.app/",
  API_ENDPOINT: process.env.API_ENDPOINT || "http://api.ic.rocks",
};
