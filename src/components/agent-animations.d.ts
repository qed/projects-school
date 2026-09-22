export type AgentKey = "muse" | "instinct" | "grok" | "jev";
export const AGENT_KEYS: AgentKey[];
export const AGENT_INFO: Record<AgentKey, { name: string; maker: string; track: string; job: string; blurb: string }>;
export const AGENT_CSS: string;
export function mountAgent(
  el: HTMLElement,
  key: AgentKey,
  options?: { autoplay?: "visible" | "always" | false; delay?: number }
): () => void;
