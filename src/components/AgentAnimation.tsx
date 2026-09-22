import { useEffect, useRef, type CSSProperties } from "react";
import { mountAgent, AGENT_INFO, type AgentKey } from "./agent-animations.js";

export { AGENT_INFO };
export type { AgentKey };

type Props = {
  /** "muse" | "instinct" | "grok" | "jev" */
  agent: AgentKey;
  /** Stage height in px (card header not included). Default 380. */
  height?: number;
  /** "visible" plays only while on screen (default), "always", or false for a still frame. */
  autoplay?: "visible" | "always" | false;
  /** ms to hold the finished frame before the loop starts. Default 1200. */
  delay?: number;
  className?: string;
};

export function AgentAnimation({ agent, height, autoplay = "visible", delay, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    return mountAgent(ref.current, agent, { autoplay, delay });
  }, [agent, autoplay, delay]);
  const style = height ? ({ "--psx-h": `${height}px` } as CSSProperties) : undefined;
  return <div ref={ref} className={className} style={style} />;
}
