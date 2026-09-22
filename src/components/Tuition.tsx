import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const included = [
'Four live sessions, one-to-one with your guide',
'Your bot built, connected, and running on your accounts',
'A written log of everything it does, from day one',
'The handbook for adding the second thing yourself',
'Monthly alumni build sessions, for as long as you want them'];


export function Tuition() {
  return (
    <section id="tuition" className="border-b border-line">
      <div className="mx-auto max-w-page px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Tuition</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ink lg:text-5xl">
              One cohort, one price
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite">
              No tiers, no seats to count. Work or personal — the method is the same, so the
              tuition is too.
            </p>
          </div>

          <div id="apply" className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-surface p-8 lg:p-10">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-5xl tracking-tight text-ink">$1,200</span>
                <span className="text-base text-muted">for the four weeks</span>
              </div>

              <ul className="mt-8 space-y-3.5 border-t border-line pt-8">
                {included.map((item) =>
                <li key={item} className="flex gap-3 text-base leading-relaxed text-graphite">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                )}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hello@projects.school?subject=October%20cohort"
                  data-umami-event="Apply Click"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-canvas transition-transform duration-150 ease-out hover:-translate-y-px active:translate-y-0">
                  
                  Apply for the October cohort
                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                    aria-hidden="true" />
                  
                </a>
                <p className="text-sm text-muted">
                  Starts Oct 6 · 12 seats · applications close Sep 29
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}