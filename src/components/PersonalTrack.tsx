import React from 'react';
import {
  ActivityIcon,
  CalendarDaysIcon,
  HeartIcon,
  SparklesIcon,
  TagIcon } from
'lucide-react';
import { personalAgents } from '../data/tracks';

const icons = {
  tag: TagIcon,
  calendar: CalendarDaysIcon,
  activity: ActivityIcon,
  broom: SparklesIcon,
  heart: HeartIcon
};

export function PersonalTrack() {
  return (
    <section id="personal" className="border-b border-line bg-raised">
      <div className="mx-auto max-w-page px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Track two</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink lg:text-5xl">
            Personal projects
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-graphite">
            Create a personal agent that runs a corner of your home life. Pick one of these, or
            bring the thing that actually bothers you.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {personalAgents.map((agent) => {
            const Icon = icons[agent.icon as keyof typeof icons];
            return (
              <li key={agent.name} className="flex flex-col bg-canvas p-7">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl tracking-tight text-ink">
                  {agent.name}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-graphite">{agent.does}</p>
              </li>);

          })}
          <li className="flex flex-col justify-center bg-canvas p-7">
            <h3 className="font-display text-2xl leading-snug tracking-tight text-muted">
              Or the one you keep meaning to deal with.
            </h3>
            <p className="mt-2.5 text-base leading-relaxed text-muted">
              One agent, one job. We build from there.
            </p>
          </li>
        </ul>
      </div>
    </section>);

}