import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { ActivityLog } from './ActivityLog';

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-14 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
            Start with one bot
            <br />
            that does one thing.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-graphite">
            projects.school is a four-week guided program. You and a guide build a single agent
            that signs into the tools you already use and does real work — then you keep adding to
            it.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-canvas transition-transform duration-150 ease-out hover:-translate-y-px active:translate-y-0">
              
              Apply for the October cohort
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                aria-hidden="true" />
              
            </a>
            <a
              href="#program"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors duration-150 ease-out hover:bg-raised">
              
              See the four weeks
            </a>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
            Starts Oct 6 · 12 seats · no code required
          </p>
        </div>

        <div className="lg:col-span-5 lg:pt-3">
          <ActivityLog />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A real log from a first project: one bot, one job, running on its own by week four.
          </p>
        </div>
      </div>
    </section>);

}