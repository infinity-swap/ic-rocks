import { HttpAgent } from "@dfinity/agent";
import { atomWithReset } from "jotai/utils";
import { SUBNET_ENDPOINT } from "../config";

export const agentAtom = atomWithReset<HttpAgent>(
  new HttpAgent({ host: SUBNET_ENDPOINT })
);

export const authAtom = atomWithReset("");
