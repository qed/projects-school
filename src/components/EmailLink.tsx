const ADDRESS = 'hello@projects.school';

export function EmailLink() {
  return (
    <a
      href={`mailto:${ADDRESS}?subject=Project`}
      className="rounded-sm text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-150 ease-out hover:text-ink hover:decoration-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink">
      {ADDRESS}
    </a>);

}
