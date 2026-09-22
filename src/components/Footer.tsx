import React from 'react';

export function Footer() {
  return (
    <footer className="bg-canvas">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl tracking-tight text-ink">
            projects<span className="text-accent">.</span>school
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            One bot. One job. Running after you shut your laptop.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <a
            href="#work"
            className="text-sm text-graphite transition-colors duration-150 ease-out hover:text-ink">
            
            Work
          </a>
          <a
            href="#personal"
            className="text-sm text-graphite transition-colors duration-150 ease-out hover:text-ink">
            
            Personal
          </a>
          <a
            href="https://firstprofit.school"
            className="text-sm text-graphite transition-colors duration-150 ease-out hover:text-ink">
            
            firstprofit.school
          </a>
          <a
            href="mailto:hello@projects.school"
            className="text-sm text-graphite transition-colors duration-150 ease-out hover:text-ink">
            
            hello@projects.school
          </a>
        </nav>
      </div>
      <div className="mx-auto max-w-page px-6 pb-10">
        <p className="border-t border-line pt-6 text-xs text-muted">
          © {new Date().getFullYear()} projects.school
        </p>
      </div>
    </footer>);

}