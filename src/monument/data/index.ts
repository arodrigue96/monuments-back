import Monument from "../Monument/Monument.js";

const angkorWat = new Monument(
  "Angkor Wat",
  "Angkor Wat is a stunning temple complex in Siem Reap, Cambodia, built in the early 12th century. Originally dedicated to the Hindu god Vishnu, it is the largest religious monument in the world, covering 162.6 hectares. The temple's design symbolizes Mount Meru, with intricate bas-reliefs depicting mythological scenes. Transitioning to a Buddhist site over the centuries, Angkor Wat is now a UNESCO World Heritage Site and a symbol of Cambodian culture, attracting millions of visitors each year.",
  "https://f7c7358c.rocketcdn.me/wp-content/uploads/2019/08/Cambodia-Angkor-Wat-Temple-Siem-Reap-690x400.jpg",
  {
    country: "Cambodja",
    city: "Siem Reap",
  },
);

const colosseum = new Monument(
  "Colosseum",
  "The Colosseum, also known as the Flavian Amphitheater, is an iconic elliptical amphitheater located in the heart of Rome, Italy. Construction began under Emperor Vespasian around 70 AD and was completed in 80 AD by his son, Titus. It was built as a grand venue for public spectacles, including gladiatorial contests and animal hunts, capable of seating approximately 65,000 spectators. Over the centuries, the Colosseum has endured significant damage from natural disasters and neglect, yet it remains one of the best-preserved ancient structures in the world. Today, it is a UNESCO World Heritage Site and one of Italy's most visited tourist attractions, drawing millions of visitors each year to witness its historical grandeur and architectural brilliance.",
  "https://acrobatadelcamino.com/wp-content/uploads/2024/06/como-visitar-coliseo-768x393.webp",
  {
    country: "Italy",
    city: "Rome",
  },
);

const monuments: Monument[] = [angkorWat, colosseum];

export default monuments;
