import { ShowcaseCard } from './AgentCard';
import screenshot from '../assets/firstprofit.jpg';

const URL = 'https://firstprofit.school';

// Same frame as the .psx animation cards: dark card, mono header bar, 380px stage.
function Frame() {
  return (
    <a
      href={URL}
      className="block overflow-hidden rounded-2xl border border-[#332F26] bg-[#15140F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink">
      <div className="flex items-center justify-between gap-3 border-b border-[#332F26] px-5 py-[13px] font-mono text-xs leading-none">
        <span className="flex items-center gap-2.5 truncate uppercase tracking-[0.1em] text-[rgba(250,247,240,.7)]">
          <i className="h-2 w-2 flex-none rounded-full bg-[#D9A62B]" />
          Kid business builder
        </span>
        <span className="whitespace-nowrap text-[rgba(250,247,240,.45)]">firstprofit.school</span>
      </div>
      <img
        src={screenshot}
        alt="The First Profit home page: “Your kid, the hero of their first $10,000.”"
        loading="lazy"
        className="h-[380px] w-full object-cover object-top" />
    </a>);

}

export function FirstProfitCard() {
  return (
    <ShowcaseCard
      media={<Frame />}
      name="First Profit"
      job="Kid Business Builder"
      maker="firstprofit.school"
      blurb="125 steps to help your kid make their first $10,000 in profit." />);

}
