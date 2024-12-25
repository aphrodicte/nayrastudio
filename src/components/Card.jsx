import React from "react";
import CardTemplate from "../templates/CardTemplate";

const dataQuotes = [
  {
    text: "PURSUE YOUR PASSION",
    newText: "A hawkfish is a type of marine fish belonging to the family Cirrhitidae found in tropical seas and which are associated with coral reefs.",
    bgImage: "public/assets/Hawkfish.jpg",
  },
  {
    text: "BURN IN LIES",
    newText: "Angelfish are a popular group of fish found in both freshwater and marine environments, known for their striking appearance and graceful movements. They are a favorite in aquariums because of their beautiful, often brightly colored, and unique body shapes.",
    bgImage: "public/assets/Angelfish.jpg",
  },
  {
    text: "ITS STILL ABOUT YOU",
    newText: "Clownfish are one of the most well-known and beloved species of marine fish, both in the wild and in home aquariums. They are especially famous for their striking orange and white color pattern and their symbiotic relationship with sea anemones.",
    bgImage: "public/assets/Clownfish.jpg",
  },
];

const Card = () => {
  return (
    <div className="container mx-auto flex gap-6 flex-wrap justify-around mt-5">
      {dataQuotes.map((quote, index) => (
        <CardTemplate
          text={quote.text}
          bgImage={quote.bgImage}
          newText={quote.newText}
          key={index}
        />
      ))}
    </div>
  );
};

export default Card;
