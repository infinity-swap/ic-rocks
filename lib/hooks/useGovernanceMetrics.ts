import { useQuery } from "react-query";
import { FIVE_MINUTES_MS } from "../durations";
import { GOVERNANCE_METRICS_ENDPOINT } from "../../config";

type Gauge = {
  name: string;
  value: bigint;
  timestamp: string;
  description: string;
};

export default function useGovernanceMetrics() {
  return useQuery(
    "governance/metrics",
    async () => {
      const res = await fetch(
        GOVERNANCE_METRICS_ENDPOINT
      );
      const text = await res.text();
      const arr = text.split("\n");
      const gauges: Record<string, Gauge> = {};
      let i = 0;
      while (i < arr.length - 3) {
        const [name, value, timestamp] = arr[i + 2].split(" ");
        const [_, desc] = arr[i].split(name);

        gauges[name] = {
          name,
          value: BigInt(value),
          timestamp,
          description: desc.trim(),
        };
        i += 3;
      }
      return gauges;
    },
    {
      staleTime: FIVE_MINUTES_MS,
    }
  );
}
