import React from 'react';
import { workActions, workTools } from '../data/tracks';

export function WorkTrack() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-page px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Track one</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink lg:text-5xl">
              Work projects
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              Build your company using bots that sign into your real tools and use them the way you
              do. Not a dashboard that watches your work — a worker inside it.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {workTools.map((tool) =>
              <span
                key={tool}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-graphite">
                
                  {tool}
                </span>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="divide-y divide-line border-y border-line">
              {workActions.map((action, i) =>
              <li key={action} className="flex items-baseline gap-5 py-5">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg text-ink">{action}</span>
                </li>
              )}
            </ol>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              It keeps working after you shut your laptop. We start with one bot that does one
              thing, and build from there.
            </p>
          </div>
        </div>
      </div>
    </section>);

}