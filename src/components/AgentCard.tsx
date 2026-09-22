import type { ReactNode } from 'react';
import { AgentAnimation, AGENT_INFO, type AgentKey } from './AgentAnimation';

type CaptionProps = {name: string;job: string;maker: string;blurb: string;};

export function ShowcaseCard({ media, name, job, maker, blurb }: CaptionProps & {media: ReactNode;}) {
  return (
    <article className="flex min-w-0 flex-col gap-[18px]">
      {media}
      <div className="grid gap-1.5">
        <h2 className="font-display text-[34px] leading-none tracking-[-0.02em] text-ink">
          {name} <span className="text-muted">· {job}</span>
        </h2>
        <p className="font-mono text-xs tracking-[0.02em] text-muted">{maker}</p>
        <p className="mt-1 max-w-[52ch] text-graphite">{blurb}</p>
      </div>
    </article>);

}

export function AgentCard({ agent }: {agent: AgentKey;}) {
  const { name, job, maker, blurb } = AGENT_INFO[agent];
  return <ShowcaseCard media={<AgentAnimation agent={agent} />} name={name} job={job} maker={maker} blurb={blurb} />;
}
