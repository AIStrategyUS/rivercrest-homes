// Every situation page is generated from this one file via
// src/pages/situations/[slug].astro - add an entry here to add a page.
//
// dropdownValue must be one of the 7 fixed LeadForm option strings exactly,
// or '' to leave the dropdown on its default "Select one" state. Three
// situations below have no matching dropdown option of their own, so they
// pre-select the closest existing one instead of inventing a new option.

export const situations = [
  {
    slug: 'foreclosure',
    title: 'Facing Foreclosure',
    blurb: 'Behind on payments and worried about what comes next? We move quickly to help you avoid foreclosure on your record.',
    heroHeadline: 'Behind on Payments? We Can Close Before Your Sale Date.',
    heroSub: "Tennessee's foreclosure process moves fast once a sale date is set. Ours can move faster.",
    body: "Once a sale date is on the calendar, every week matters. We can typically get you an offer within days and close before that date, which can mean avoiding a foreclosure sale on your record entirely. Every lender and loan is a little different, so we'll walk through your specific timeline with you directly rather than guessing from general rules of thumb.",
    goodToKnow: null,
    solves: [
      'A fast cash offer, often within days',
      "We can work with your lender's payoff timeline",
      'Closing scheduled around your sale date',
      "No repairs needed before we'll buy",
    ],
    faq: [
      { q: 'Can you still buy it if a sale date is already set?', a: 'In most cases, yes. The sooner we hear from you, the more options we usually have.' },
      { q: 'What if I owe more than the house is worth?', a: "We'll look at the numbers with you and tell you honestly what's possible." },
    ],
    ctaLabel: 'Get My Fair Cash Offer Before My Sale Date',
    dropdownValue: 'Facing foreclosure',
  },
  {
    slug: 'inherited-property',
    title: 'Inherited a Property',
    blurb: "Dealing with an estate you didn't plan for? We make the process simple so you can focus on what matters.",
    heroHeadline: "Inherited a House You Didn't Plan For? We Can Help You Settle It.",
    heroSub: "Whether probate is finished, still open, or you and other heirs haven't agreed on what to do yet.",
    body: "We can often move forward before probate is fully closed, and we're used to working with an executor or multiple siblings who don't all agree yet. A fast, neutral cash sale is frequently the easiest way to split proceeds without one person feeling pressured by the others.",
    goodToKnow: null,
    solves: [
      'As-is purchase, no cleanout needed',
      'Works with executor or estate attorney',
      'One point of contact for all heirs to simplify a multi-party decision',
    ],
    faq: [
      { q: 'Can you buy before probate closes?', a: "Often, yes. We'll work with whoever's been appointed to act for the estate." },
      { q: "What if my siblings and I don't agree?", a: 'We\'re happy to talk to everyone involved and keep things fair and straightforward.' },
    ],
    ctaLabel: 'Get a Cash Offer for the Inherited Property',
    dropdownValue: 'Inherited a property',
  },
  {
    slug: 'divorce',
    title: 'Going Through Divorce',
    blurb: 'When you need a clean break, we help both parties move forward without the drawn-out traditional sale process.',
    heroHeadline: 'A Clean, Neutral Way to Split a Shared Property.',
    heroSub: 'One offer, one closing, split however you and your attorney have agreed.',
    body: 'A cash sale removes the ongoing friction of competing preferences on listing price, showings, and timing. One number both parties can evaluate together.',
    goodToKnow: null,
    solves: [
      'One offer both parties can evaluate together',
      'No showings to coordinate around two schedules',
      'Proceeds split at closing per your own agreement',
    ],
    faq: [
      { q: 'Do both owners need to agree?', a: "Yes. We'll work with both of you, and your attorneys if that's easier." },
      { q: 'Can proceeds be split directly at closing?', a: 'Yes, through the title company per your agreement.' },
    ],
    ctaLabel: 'Get a Cash Offer to Simplify the Split',
    dropdownValue: 'Going through divorce',
  },
  {
    slug: 'major-repairs',
    title: 'Distressed Property or Major Repairs Needed',
    blurb: "Own a distressed house you can't afford to fix before selling? We buy homes as-is, so you don't spend a dime on repairs.",
    heroHeadline: 'Too Much to Fix Before Selling? We Buy It As-Is.',
    heroSub: "Deferred maintenance, storm or fire damage, or just decades of updates that never happened. Condition doesn't rule a house out.",
    body: "Foundation issues, an old roof, storm or fire damage, a house that hasn't been updated in decades. We buy these as-is. You won't spend a dollar or a weekend fixing anything before we make an offer.",
    goodToKnow: null,
    solves: [
      'No repair credits re-negotiated after inspection',
      'No re-trading the price once an offer is made',
    ],
    faq: [
      { q: 'How bad can the condition be?', a: "We've bought homes with structural damage, fire damage, and decades of deferred maintenance. Ask us." },
      { q: 'Do I need to clean it out first?', a: 'No, leave whatever you don\'t want.' },
    ],
    ctaLabel: 'Get an As-Is Cash Offer',
    dropdownValue: 'Too many repairs needed',
  },
  {
    slug: 'relocation',
    title: 'Relocating Fast',
    blurb: 'Job change, family situation, or ready for a fresh start? We work around your timeline, not ours.',
    heroHeadline: 'Moving Fast? Your Closing Date Can Move Just as Fast.',
    heroSub: "A new job, a family situation, or a move that can't wait. We work around your move date, not a buyer's mortgage timeline.",
    body: "We regularly work with homeowners relocating for a new job, a family situation, or any move that can't wait for a traditional listing timeline.",
    goodToKnow: null,
    solves: [
      'Closing date set to match your move-out date',
      "Can close remotely if you've already left the state",
      'No need to be present for showings',
    ],
    faq: [
      { q: "Can I close if I've already moved out of state?", a: 'Yes, this is one of the most common situations we handle.' },
      { q: 'What if I need extra time after closing?', a: 'Tell us. We can often build that in.' },
    ],
    ctaLabel: 'Get a Cash Offer That Fits My Move Date',
    dropdownValue: 'Need to relocate',
  },
  {
    slug: 'tired-landlord',
    title: 'Tired Landlord & Problem Tenants',
    blurb: 'Done with tenants and maintenance headaches? We\'ll take the property off your hands so you can move on for good.',
    heroHeadline: "Done With Tenants? We'll Take It From Here.",
    heroSub: "Occupied, mid-eviction, or sitting vacant between renters. We buy rental property in whatever state it's actually in.",
    body: "We can buy a property with tenants still in it, including one where you're in the middle of an eviction. You don't have to wait for it to sit empty first.",
    goodToKnow: null,
    solves: [
      'Buys occupied properties',
      'Handles the landlord-side handoff at closing',
      'No requirement to evict before selling',
    ],
    faq: [
      { q: 'Can you buy it with tenants still living there?', a: 'Yes, in most cases.' },
      { q: "What if I'm mid-eviction right now?", a: "Tell us where things stand. We've worked through this before." },
    ],
    ctaLabel: 'Get a Cash Offer for My Rental',
    dropdownValue: 'Tired landlord',
  },
  {
    slug: 'tax-liens-code-violations',
    title: 'Tax Delinquency & Code Violations',
    blurb: 'Behind on property taxes and watching the interest add up? We can often close before things go further.',
    heroHeadline: "Fines Adding Up, or a Tax Sale on the Calendar? Let's Beat the Deadline.",
    heroSub: 'Back taxes and code violations both come with a clock attached. We move on your clock, not a listing timeline.',
    body: "Delinquent property taxes and code violations both tend to compound the longer they sit. Interest and fines add up, and in some cases a county can eventually force a sale. We won't pretend to know your county's exact process better than you do, but we move fast enough that it's usually worth a call before things go further.",
    goodToKnow: null,
    solves: [
      'Back taxes and any recorded liens settled at closing from proceeds',
      'We can often close ahead of a scheduled tax sale',
      'No requirement to bring the property into code compliance before selling',
    ],
    faq: [
      { q: 'Can you buy a house with back taxes owed?', a: 'In most cases, yes.' },
      { q: "Do I have to fix code violations before you'll buy it?", a: 'No.' },
    ],
    ctaLabel: 'Get a Cash Offer Before the Deadline',
    dropdownValue: 'Other / Just curious',
  },
  {
    slug: 'vacant-property',
    title: 'Vacant or Absentee Property',
    blurb: "Own a vacant property that's getting harder to manage from a distance? We buy it as-is.",
    heroHeadline: 'Vacant, and Getting Harder to Manage From Where You Are?',
    heroSub: "Break-ins, insurance headaches, a lawn nobody's cutting. A vacant house is a liability the longer it sits empty.",
    body: "Insurance is often harder to keep on a vacant house, code enforcement notices are more likely, and every month it sits empty is a month of taxes and utilities with nothing coming back.",
    goodToKnow: null,
    solves: [
      'A walkthrough only if we need one, situation dependent',
      'No need for the owner to be local or present for it',
      'Handles a property vacant for years just as readily as one vacant a month',
    ],
    faq: [
      { q: 'Do I need to be there in person if I live out of state?', a: 'No, we can handle most of this remotely.' },
      { q: "Does it matter how long it's been vacant?", a: 'Not to us.' },
    ],
    ctaLabel: 'Get a Cash Offer for the Vacant Property',
    dropdownValue: 'Tired landlord',
  },
  {
    slug: 'downsizing-estate',
    title: 'Downsizing or Settling an Estate',
    blurb: "Ready for a simpler next step, or finishing up a family estate? We offer a fast, simple exit.",
    heroHeadline: 'Ready for a Simpler Next Step.',
    heroSub: 'Downsizing, moving closer to family, or finally closing out a family estate, without months of showings first.',
    body: "Whether it's your own home and you're ready for less to manage, or you're the one still finishing up a parent's estate months after the funeral, a straightforward cash sale can close that chapter on a specific date instead of an open-ended one.",
    goodToKnow: null,
    solves: [
      'No need to clear out decades of belongings first',
      'Flexible timing to arrange your next living situation',
      "Works directly with an executor if the estate isn't yours alone",
    ],
    faq: [
      { q: 'Do I need to move everything out first?', a: 'No.' },
      { q: 'Can we set a closing date that gives me time to find my next place?', a: 'Yes, within reason. Tell us what you need.' },
    ],
    ctaLabel: 'Get a Cash Offer, On My Timeline',
    dropdownValue: 'Need to relocate',
  },
  {
    slug: 'other-situations',
    title: 'Any Other Situation',
    blurb: "Don't see your exact situation? Odds are we've still seen it. There's no situation too unusual to ask about.",
    heroHeadline: "Don't See Your Exact Situation Listed? Odds Are We've Still Seen It.",
    heroSub: 'The situations before this one cover the most common reasons people call us. Here\'s a shortlist of others we regularly handle too.',
    body: "We've closed on properties mid-bankruptcy with trustee approval, houses in rough condition that needed a full clear-out, homes where the payoff was more than the sale price, and properties with liens that needed to be resolved as part of closing. If your situation is some combination of the above, or something else entirely, call us. There's no situation too unusual to at least ask about.",
    goodToKnow: null,
    solves: [
      'The core mechanics (as-is, no fees, a real person on the phone) apply regardless of the specific circumstance.',
    ],
    faq: [],
    ctaLabel: 'Tell Us Your Situation',
    dropdownValue: '',
  },
];

export function getSituation(slug) {
  return situations.find((s) => s.slug === slug);
}
