import { AgentCard } from './components/AgentCard';
import { EmailLink } from './components/EmailLink';
import { FirstProfitCard } from './components/FirstProfitCard';
import type { AgentKey } from './components/AgentAnimation';

const AGENTS: AgentKey[] = ['muse', 'instinct', 'grok', 'jev'];

export function App() {
  return (
    <div className="min-h-full w-full bg-canvas px-6 font-sans text-base leading-relaxed text-ink max-[420px]:px-4">
      <main className="mx-auto max-w-[1080px] pb-24 pt-[72px] max-[860px]:pb-[72px] max-[860px]:pt-12">
        <h1 className="mb-[18px] max-w-[16ch] text-balance font-display text-[clamp(40px,6vw,64px)] leading-[1.02] tracking-[-0.025em]">
          Four new agents. Give one of them a job.
        </h1>
        <p className="max-w-[58ch] text-[17px] text-graphite">
          Muse, Instinct, Grok Bot and Jev are new this fall. Tell us the one thing you want off
          your plate, and we'll set one of them up to do it.
        </p>
        <p className="mt-4 text-[17px] text-graphite">
          Write to <EmailLink />
        </p>

        <div className="mt-14 grid grid-cols-2 gap-x-9 gap-y-14 max-[860px]:grid-cols-1">
          {AGENTS.map((agent) =>
          <AgentCard key={agent} agent={agent} />
          )}
          <FirstProfitCard />
        </div>

        <section className="mt-[72px] border-t border-line pt-10">
          <p className="font-display text-[clamp(28px,4vw,40px)] leading-tight tracking-[-0.02em]">
            Have a job for one of them?
          </p>
          <p className="mt-3 text-[17px] text-graphite">
            Start a project: <EmailLink />
          </p>
        </section>

        <p className="mt-16 text-xs text-muted">© {new Date().getFullYear()} projects.school</p>
      </main>
    </div>);

}
