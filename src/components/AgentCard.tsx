import { AgentAnimation, AGENT_INFO, type AgentKey } from './AgentAnimation';

export function AgentCard({ agent }: {agent: AgentKey;}) {
  const info = AGENT_INFO[agent];
  return (
    <article className="flex min-w-0 flex-col gap-[18px]">
      <AgentAnimation agent={agent} />
      <div className="grid gap-1.5">
        <h2 className="font-display text-[34px] leading-none tracking-[-0.02em] text-ink">
          {info.name} <span className="text-muted">· {info.job}</span>
        </h2>
        <p className="font-mono text-xs tracking-[0.02em] text-muted">{info.maker}</p>
        <p className="mt-1 max-w-[52ch] text-graphite">{info.blurb}</p>
      </div>
    </article>);

}
