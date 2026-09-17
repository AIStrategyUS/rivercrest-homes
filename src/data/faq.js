export const faqCategories = [
  {
    category: 'Our Offer & Process',
    items: [
      { q: 'Is this a scam?', a: "We're a Tennessee company, we'll give you our name and phone number, and we never ask you for money up front. You're the one being paid, not us. If anything about an offer feels off, ask us directly." },
      { q: 'How do you calculate my offer?', a: "As-is market value, minus a fair estimate of repairs, minus what it costs us to hold and resell the property." },
      { q: 'Is the offer negotiable?', a: "Yes, it's a conversation, not a take-it-or-leave-it number." },
      { q: 'Do I have any obligation once I submit my info?', a: 'None. Submitting your address is a request for us to look at your property, not a commitment to sell.' },
      { q: "What if I don't like the offer?", a: "No hard feelings. You're free to walk away at any point before signing anything." },
    ],
  },
  {
    category: 'Money & Fees',
    items: [
      { q: 'Are there any fees or commissions?', a: 'None. What we offer is what closes, minus anything already owed on the property itself (like a mortgage balance or back taxes).' },
      { q: 'Who pays closing costs?', a: 'We do.' },
      { q: 'What happens to my existing mortgage or liens?', a: 'At closing, the title company pays off your mortgage balance, any liens, and any back taxes directly from the sale proceeds before you receive the rest.' },
      { q: 'Do I need to pay for an appraisal or inspection?', a: "No, we don't require either before making an offer." },
    ],
  },
  {
    category: 'Timing & Closing',
    items: [
      { q: 'How fast can you actually close?', a: 'As few as 10 days if you need that, or a date further out if you don\'t. You choose.' },
      { q: 'Do I get to pick the closing date?', a: "Yes, that's the point." },
      { q: 'Where does closing happen?', a: 'At a licensed local title company, the same way a traditional sale would.' },
      { q: 'What if my situation changes before closing?', a: "Tell us. We'd rather know early than have you feel stuck." },
    ],
  },
  {
    category: 'Special Situations',
    items: [
      { q: 'Will you buy a house with tenants still in it?', a: 'Yes, including mid-eviction in most cases.' },
      { q: 'Can you buy a house in probate?', a: "Often, yes. We're used to working with an executor or multiple heirs." },
      { q: 'Does the condition of the house matter?', a: 'We buy houses in any condition, from move-in ready to seriously damaged.' },
      { q: 'What areas do you actually buy in?', a: "Davidson, Rutherford, Sumner, Wilson, Maury, and Montgomery counties in Middle Tennessee. Not sure if you're included? Submit your address and we'll tell you plainly." },
    ],
  },
];

export const faqFlat = faqCategories.flatMap((c) => c.items);
