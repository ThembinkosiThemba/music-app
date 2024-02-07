import { harry, jordi, major, sade, song, v } from "../../assets";

export const mockSongs = [
  {
    key: 1,
    title: "The Sweetest Taboo",
    artists: [{ adamid: 1, name: "Sade" }],
    subtitle: "Sade",
    images: { coverart: sade },
  },
  {
    key: 2,
    title: "Beautiful Mistakes",
    artists: [{ adamid: 2, name: "Maroon 5" }],
    subtitle: "Maroon 5",
    images: { coverart: jordi },
  },
  {
    key: 4,
    title: "Ladders",
    artists: [{ adamid: 4, name: "Mac Miller" }],
    subtitle: "Mac Miller",
    images: { coverart: song },
  },
  {
    key: 5,
    title: "As You Are",
    artists: [{ adamid: 5, name: "Harry Styles" }],
    subtitle: "Harry Styles",
    images: { coverart: harry },
  },
  {
    key: 6,
    title: "Sugar",
    artists: [{ adamid: 5, name: "Maroon 5" }],
    subtitle: "Maroon 5",
    images: { coverart: v },
  },

  {
    key: 3,
    title: "What's The Use?",
    artists: [{ adamid: 4, name: "Mac Miller" }],
    subtitle: "Mac Miller",
    images: { coverart: song },
  },
  // Add more mock songs as needed
];
