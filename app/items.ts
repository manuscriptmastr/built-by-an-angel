import { Item } from "@/app/models/item";

// - "Sharp hat": You'll just melt over this one. It's black, which is this year's pink. You and this hat deserve each other.
// - "Library book": lightly abused, trampled, and stepped upon by the Prince
// - "Ball GOWN": Be the swimmingest fish in the sea
// - "Figurine": for just the sentimental man
// - "Wicked Witch's Cape": size down as this dusty black black grows the louder you sing.
// - "Froat": We're actually not sure what this is, but you're welcome to buy it from us for a severe markup.
// - "Magic wand": It don't work if you ain't magical.
// - "Cage": To keep your pets from talking back at you.
// - "Sky balloon": used twice, could use some repair.
// - Feelings chart: for the next time you ask yourself, "oh, what is this feeling?"
//   - "loathing
//   - "I don't want it"
//   - "I hope you're happy"
//   - "every time I get angry, a coin levitates"
//   - "they are going to miss me so much"
//   - "let's DANCE!"
//   - "moodified"
//   - "disgusticified"
//   - "blonde"
//   - "dancing through life"
//   - "rejoicifying"
//   - "Like I'm not that girl"
//   - Confusifying
//   - Unuusualllyyy and exceeedinglyyy peculiaarr and altogether quite impooossibleee to descriiibbeeee
// Wicked
// Brainless
// Thoughtless
// Seasick
// Outraged
// Hideoteous
// - Red chalkboard paint: for getting out of class early

export const ITEMS: Item[] = [
  {
    id: 1,
    title: "Cozy Corner Bed",
    description: "It's great!",
    price: "$200.00",
    image: {
      src: "/images/cozy-corner-bed.avif",
      alt: "Elphaba's tiny bed",
    },
  },
  {
    id: 2,
    title: "Blowout",
    description:
      "I'll fix your hair so you're populer. LAR. (Just not quite as popular as me.)",
    price: "$65.00",
    image: {
      src: "/images/blowout.jpeg",
      alt: "Ga-linda's hair",
    },
  },
  {
    id: 3,
    title: "Unlimited Breadsticks",
    description:
      "These will have your soul defying gravity and your garlic breath repelling every winged monkey the madame sends your way.",
    price: "$4.99",
    image: {
      src: "/images/unlimited-breadsticks.jpeg",
      alt: "Elphaba's Olive Garden breadsticks",
    },
  },
  {
    id: 4,
    title: "Pastry",
    description: "When you don't get your way. Best administered by croons.",
    price: "$3.50",
    image: {
      src: "/images/pastry.jpeg",
      alt: "Chocolate croissant",
    },
  },
  {
    id: 5,
    title: "Best friend",
    description: "Out of stock and technically scandalocious.",
    price: "$999999.99",
    image: {
      src: "/images/best-friend.jpeg",
      alt: "Elphaba Thropp",
    },
  },
  {
    id: 6,
    title: "Autographed Grimmerie",
    description:
      "Your personal copy of the Grimmerie, signed by the Wizard of Oz himself. Which you won't know since you're not magical enough to open it yourself.",
    price: "$14.49",
    image: {
      src: "/images/autographed-grimmerie.jpeg",
      alt: "Grimmerie in a museum",
    },
  },
];
