import React from 'react';
import { audience, curriculum } from '../data/curriculum';

export function Program() {
  return (
    <section id="program" className="border-b border-line">
      <div className="mx-auto max-w-page px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">The program</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink lg:text-5xl">
            Four weeks, one working thing
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-graphite">
            Each week is a live session with your guide plus the work in between. You do not leave
            with notes. You leave with something running.
          </p>
        </div>

        <ol className="mt-14 border-l border-line">
          {curriculum.map((step) =>
          <li key={step.week} className="relative grid grid-cols-1 gap-4 pb-12 pl-8 last:pb-0 lg:grid-cols-12 lg:gap-10">
              <span
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
              aria-hidden="true" />
            
              <div className="lg:col-span-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {step.week}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight text-ink lg:text-3xl">
                  {step.title}
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base leading-relaxed text-graphite lg:text-lg">{step.body}</p>
              </div>
              <div className="lg:col-span-3">
                <p className="text-sm leading-relaxed text-muted">
                  <span className="text-ink">You end with:</span> {step.outcome}
                </p>
              </div>
            </li>
          )}
        </ol>

        <div className="mt-20 border-t border-line pt-12">
          <h3 className="font-display text-3xl tracking-tight text-ink">Who this is for</h3>
          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {audience.map((item) =>
            <div key={item.title} className="flex flex-col">
                <h4 className="text-base font-medium text-ink">{item.title}</h4>
                <p className="mt-2 text-base leading-relaxed text-graphite">{item.body}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}