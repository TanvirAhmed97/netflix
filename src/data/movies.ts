export interface Movie {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  backdrop: string;
  year: number;
  rating: string;
  duration: string;
  genre: string[];
  youtubeId: string;
  match: number;
}

export const featuredMovie: Movie = {
  id: 0,
  title: "Stranger Things",
  description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  thumbnail: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlYl4tO7zDvM8S5r3K5kN.jpg",
  year: 2022,
  rating: "TV-14",
  duration: "4 Seasons",
  genre: ["Sci-Fi", "Horror", "Drama"],
  youtubeId: "b9EkMc79ZSU",
  match: 98
};

export const trendingNow: Movie[] = [
  {
    id: 1,
    title: "The Witcher",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    thumbnail: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdiJq.jpg",
    year: 2023,
    rating: "TV-MA",
    duration: "3 Seasons",
    genre: ["Fantasy", "Action", "Adventure"],
    youtubeId: "ndl1W4ltcmg",
    match: 95
  },
  {
    id: 2,
    title: "Wednesday",
    description: "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic ability.",
    thumbnail: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    year: 2022,
    rating: "TV-14",
    duration: "1 Season",
    genre: ["Comedy", "Mystery", "Fantasy"],
    youtubeId: "Di310WS8zLk",
    match: 97
  },
  {
    id: 3,
    title: "Glass Onion",
    description: "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island. When someone turns up dead, Detective Blanc is put on the case.",
    thumbnail: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
    year: 2022,
    rating: "PG-13",
    duration: "2h 19m",
    genre: ["Mystery", "Comedy", "Crime"],
    youtubeId: "pdkdkZUYaCk",
    match: 92
  },
  {
    id: 4,
    title: "All Quiet on the Western Front",
    description: "A young German soldier's terrifying experiences and disillusionment in the trenches during World War I.",
    thumbnail: "https://image.tmdb.org/t/p/w500/2IRjbi9cADuDMKmqDMgHJ2trcJO.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/x2RS3uTcs09IfAKG5J3FkWl1tVO.jpg",
    year: 2022,
    rating: "R",
    duration: "2h 28m",
    genre: ["War", "Drama", "Action"],
    youtubeId: "hf8EYRYCKLA",
    match: 94
  },
  {
    id: 5,
    title: "Enola Holmes 2",
    description: "Now a detective-for-hire, Enola Holmes takes on her first official case to find a missing girl.",
    thumbnail: "https://image.tmdb.org/t/p/w500/tegBpjM5ODoYoM1NjaiCU3iL2h7.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/sdEOHhSdtfRcB5MNjgKcuqPt5Ys.jpg",
    year: 2022,
    rating: "PG-13",
    duration: "2h 9m",
    genre: ["Mystery", "Adventure", "Crime"],
    youtubeId: "WHTdQpMIVeM",
    match: 89
  },
  {
    id: 6,
    title: "The Crown",
    description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    thumbnail: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhD8UzrjyG.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8GVpIEBqlRBftpiHmVMrKexLmFb.jpg",
    year: 2023,
    rating: "TV-MA",
    duration: "6 Seasons",
    genre: ["Drama", "History"],
    youtubeId: "JWtnJjn6ng0",
    match: 91
  }
];

export const popularOnNetflix: Movie[] = [
  {
    id: 7,
    title: "Squid Game",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
    thumbnail: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg",
    year: 2021,
    rating: "TV-MA",
    duration: "1 Season",
    genre: ["Thriller", "Drama", "Action"],
    youtubeId: "oqxAJKy0ii4",
    match: 96
  },
  {
    id: 8,
    title: "Money Heist",
    description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    thumbnail: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
    year: 2021,
    rating: "TV-MA",
    duration: "5 Parts",
    genre: ["Crime", "Thriller", "Drama"],
    youtubeId: "_InqQJRqGW4",
    match: 93
  },
  {
    id: 9,
    title: "Dark",
    description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes relationships among four families.",
    thumbnail: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xPn1LnngPYvfpNjhPkBILXJxqTk.jpg",
    year: 2020,
    rating: "TV-MA",
    duration: "3 Seasons",
    genre: ["Sci-Fi", "Thriller", "Mystery"],
    youtubeId: "rrwycJ08PSA",
    match: 95
  },
  {
    id: 10,
    title: "Ozark",
    description: "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    thumbnail: "https://image.tmdb.org/t/p/w500/m73QVnKzL2cXUQsMmJiHrLkAlXp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/A2LwstHMOG4s1x5sNqHfXMoQz2.jpg",
    year: 2022,
    rating: "TV-MA",
    duration: "4 Seasons",
    genre: ["Crime", "Drama", "Thriller"],
    youtubeId: "5hAXVqrljbs",
    match: 90
  },
  {
    id: 11,
    title: "The Queen's Gambit",
    description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.",
    thumbnail: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg",
    year: 2020,
    rating: "TV-MA",
    duration: "Limited Series",
    genre: ["Drama"],
    youtubeId: "CDrieqwSdgI",
    match: 97
  },
  {
    id: 12,
    title: "Bridgerton",
    description: "Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.",
    thumbnail: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9yJ3L2FMRjWgNpJ0eHnJx1CQz2.jpg",
    year: 2022,
    rating: "TV-MA",
    duration: "2 Seasons",
    genre: ["Drama", "Romance"],
    youtubeId: "gp93vUu0YjQ",
    match: 88
  }
];

export const actionMovies: Movie[] = [
  {
    id: 13,
    title: "Extraction",
    description: "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
    thumbnail: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFlvnKpYqzFJz.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/1R68vl3eGKgmVdLcXJpVlJn0QqO.jpg",
    year: 2023,
    rating: "R",
    duration: "2h 3m",
    genre: ["Action", "Thriller"],
    youtubeId: "L6P3nI6VnlY",
    match: 91
  },
  {
    id: 14,
    title: "The Gray Man",
    description: "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative.",
    thumbnail: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpExzEH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/c6H7Z4u73i5fHOMkPjTbp8owe1T.jpg",
    year: 2022,
    rating: "PG-13",
    duration: "2h 9m",
    genre: ["Action", "Thriller"],
    youtubeId: "BmllggGO4pM",
    match: 87
  },
  {
    id: 15,
    title: "Red Notice",
    description: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive criminal.",
    thumbnail: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/4gIhHOhWRJm8Y0p2It1zq2JxX02.jpg",
    year: 2021,
    rating: "PG-13",
    duration: "1h 58m",
    genre: ["Action", "Comedy", "Thriller"],
    youtubeId: "c36vI5cB_qU",
    match: 85
  },
  {
    id: 16,
    title: "The Old Guard",
    description: "A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret.",
    thumbnail: "https://image.tmdb.org/t/p/w500/cjr4NWURcVNcGhMk8QxJoMk0XnL.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/cxMHjCfEpfWizAiRDwGg7PZMfAB.jpg",
    year: 2020,
    rating: "R",
    duration: "2h 5m",
    genre: ["Action", "Fantasy"],
    youtubeId: "aK-X2d0lJ_s",
    match: 86
  },
  {
    id: 17,
    title: "6 Underground",
    description: "Six individuals from all around the globe faked their deaths and form an elite vigilante squad.",
    thumbnail: "https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/cxMHjCfEpfWizAiRDwGg7PZMfAB.jpg",
    year: 2019,
    rating: "R",
    duration: "2h 8m",
    genre: ["Action", "Thriller"],
    youtubeId: "Y4D5e2VQ6aM",
    match: 82
  },
  {
    id: 18,
    title: "Triple Frontier",
    description: "Loyalties are tested when five former Army Rangers reunite to steal a drug lord's fortune in South America.",
    thumbnail: "https://image.tmdb.org/t/p/w500/A4LxfYCdoZyNNaGkM9cPjJkdlq0.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3uGtjELqUVaW54Xk7Y5V76n0fRz.jpg",
    year: 2019,
    rating: "R",
    duration: "2h 5m",
    genre: ["Action", "Adventure", "Crime"],
    youtubeId: "fZeBwSMz2pE",
    match: 84
  }
];

export const comedyMovies: Movie[] = [
  {
    id: 19,
    title: "Don't Look Up",
    description: "Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.",
    thumbnail: "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iNsQsz6sVFE1sI5NoB81lHmBP7f.jpg",
    year: 2021,
    rating: "R",
    duration: "2h 18m",
    genre: ["Comedy", "Drama", "Sci-Fi"],
    youtubeId: "RbIxYm3mKzI",
    match: 88
  },
  {
    id: 20,
    title: "Murder Mystery 2",
    description: "Nick and Audrey Spitz are now full-time detectives with their own agency, where they take on their toughest case yet.",
    thumbnail: "https://image.tmdb.org/t/p/w500/sHgvdC2G4n1XvXqOxGKXJMqb7TG.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8pjCz8z8pjmF4o2E5h5cVCEwI5s.jpg",
    year: 2023,
    rating: "PG-13",
    duration: "1h 29m",
    genre: ["Comedy", "Action", "Mystery"],
    youtubeId: "oYy4_gN3Rss",
    match: 83
  },
  {
    id: 21,
    title: "The Adam Project",
    description: "A time-traveling pilot teams up with his younger self to come to terms with his past while saving the future.",
    thumbnail: "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fOyYqzFxBsVbMmFjxHYc8wz20Tq.jpg",
    year: 2022,
    rating: "PG-13",
    duration: "1h 46m",
    genre: ["Comedy", "Sci-Fi", "Adventure"],
    youtubeId: "IjUgTIAgUJI",
    match: 86
  },
  {
    id: 22,
    title: "Senior Year",
    description: "A cheerleading accident leaves a high school star in a 20-year coma. When she wakes up, she must navigate a very different world.",
    thumbnail: "https://image.tmdb.org/t/p/w500/9OoCJARz5YKlWsCYHFz1S2R8mZp.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2E1uxXD5fEo0uYXq9V5m3Gv2z2.jpg",
    year: 2022,
    rating: "PG-13",
    duration: "1h 51m",
    genre: ["Comedy"],
    youtubeId: "3JZ_B6WO3h0",
    match: 79
  },
  {
    id: 23,
    title: "Glass Onion: A Knives Out Mystery",
    description: "Detective Benoit Blanc travels to Greece to peel back the layers of a mystery involving a new cast of suspects.",
    thumbnail: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
    year: 2022,
    rating: "PG-13",
    duration: "2h 19m",
    genre: ["Comedy", "Mystery", "Crime"],
    youtubeId: "pdkdkZUYaCk",
    match: 92
  },
  {
    id: 24,
    title: "The Bubble",
    description: "A group of actors and actresses try to shoot a sequel to a blockbuster franchise while quarantining at a luxury hotel during the pandemic.",
    thumbnail: "https://image.tmdb.org/t/p/w500/2m2Jx2oJxXq5xXxXxXxXxXxXxX.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2m2Jx2oJxXq5xXxXxXxXxXxXxX.jpg",
    year: 2022,
    rating: "PG-13",
    duration: "2h 6m",
    genre: ["Comedy"],
    youtubeId: "aI2UBwFvSsY",
    match: 76
  }
];

export const myList: Movie[] = [
  {
    id: 25,
    title: "Black Mirror",
    description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations collide with its darkest instincts.",
    thumbnail: "https://image.tmdb.org/t/p/w500/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/dqK9hl0TFa2p5MxSoATDlaP9OzP.jpg",
    year: 2023,
    rating: "TV-MA",
    duration: "6 Seasons",
    genre: ["Sci-Fi", "Thriller", "Drama"],
    youtubeId: "jDiYGjp5iFg",
    match: 94
  },
  {
    id: 26,
    title: "You",
    description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
    thumbnail: "https://image.tmdb.org/t/p/w500/7bEYwjUjMx5auBCJi22YnrJhPjz.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/jnq03dxHFRyIeQnQzPZmKfE3d0R.jpg",
    year: 2023,
    rating: "TV-MA",
    duration: "4 Seasons",
    genre: ["Thriller", "Crime", "Drama"],
    youtubeId: "cdL03Yh2Q3w",
    match: 91
  },
  {
    id: 27,
    title: "Narcos",
    description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.",
    thumbnail: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg",
    year: 2017,
    rating: "TV-MA",
    duration: "3 Seasons",
    genre: ["Crime", "Drama", "Biography"],
    youtubeId: "xl8zdCY-abw",
    match: 93
  },
  {
    id: 28,
    title: "Peaky Blinders",
    description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps.",
    thumbnail: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
    year: 2022,
    rating: "TV-MA",
    duration: "6 Seasons",
    genre: ["Crime", "Drama"],
    youtubeId: "oVzVdvGIC7U",
    match: 96
  },
  {
    id: 29,
    title: "Breaking Bad",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
    thumbnail: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu022Q9x0GKbD54Dl0.jpg",
    year: 2013,
    rating: "TV-MA",
    duration: "5 Seasons",
    genre: ["Crime", "Drama", "Thriller"],
    youtubeId: "HhesaQXLuRY",
    match: 99
  },
  {
    id: 30,
    title: "Arcane",
    description: "Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions.",
    thumbnail: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
    year: 2021,
    rating: "TV-14",
    duration: "1 Season",
    genre: ["Animation", "Action", "Adventure"],
    youtubeId: "fXmAurh012s",
    match: 97
  }
];

export const newReleases: Movie[] = [
  {
    id: 31,
    title: "Heart of Stone",
    description: "An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable and dangerous asset.",
    thumbnail: "https://image.tmdb.org/t/p/w500/vXtSOQFrMAG756WXZkHnAaQjWWL.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8pjCz8z8pjmF4o2E5h5cVCEwI5s.jpg",
    year: 2023,
    rating: "PG-13",
    duration: "2h 2m",
    genre: ["Action", "Thriller"],
    youtubeId: "RhD2jqbTQ3M",
    match: 84
  },
  {
    id: 32,
    title: "Luther: The Fallen Sun",
    description: "A serial killer terrorizes London. Brilliant but tormented detective John Luther breaks out of prison to bring him to justice.",
    thumbnail: "https://image.tmdb.org/t/p/w500/0EYqst8fE11gN7QwX7h2KZ2VX02.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8pjCz8z8pjmF4o2E5h5cVCEwI5s.jpg",
    year: 2023,
    rating: "R",
    duration: "2h 9m",
    genre: ["Crime", "Thriller"],
    youtubeId: "xjJgBOJZ5fI",
    match: 88
  },
  {
    id: 33,
    title: "Nowhere",
    description: "A young man with extraordinary powers is on the run. He is looking for a place to call home but finds himself pursued by relentless forces.",
    thumbnail: "https://image.tmdb.org/t/p/w500/3hAFGeVEjH82X2pLmX2VxXxXxXx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/3hAFGeVEjH82X2pLmX2VxXxXxXx.jpg",
    year: 2023,
    rating: "TV-14",
    duration: "1h 41m",
    genre: ["Sci-Fi", "Drama"],
    youtubeId: "Zi_XLO89RTE",
    match: 81
  },
  {
    id: 34,
    title: "The Mother",
    description: "A deadly female assassin comes out of hiding to protect the daughter that she gave up years before.",
    thumbnail: "https://image.tmdb.org/t/p/w500/A4LxfYCdoZyNNaGkM9cPjJkdlq0.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/A4LxfYCdoZyNNaGkM9cPjJkdlq0.jpg",
    year: 2023,
    rating: "R",
    duration: "1h 55m",
    genre: ["Action", "Thriller"],
    youtubeId: "DkFExKQ8bi0",
    match: 85
  },
  {
    id: 35,
    title: "You People",
    description: "A couple from different cultures face the wrath of their disapproving families when they announce their engagement.",
    thumbnail: "https://image.tmdb.org/t/p/w500/2E1uxXD5fEo0uYXq9V5m3Gv20Tq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2E1uxXD5fEo0uYXq9V5m3Gv20Tq.jpg",
    year: 2023,
    rating: "TV-MA",
    duration: "1h 47m",
    genre: ["Comedy", "Drama", "Romance"],
    youtubeId: "V-_O7nl0Ii0",
    match: 80
  },
  {
    id: 36,
    title: "Kaleidoscope",
    description: "A master thief and his crew attempt an epic and elaborate heist worth $7 billion.",
    thumbnail: "https://image.tmdb.org/t/p/w500/8pjCz8z8pjmF4o2E5h5cVCEwI5s.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8pjCz8z8pjmF4o2E5h5cVCEwI5s.jpg",
    year: 2023,
    rating: "TV-MA",
    duration: "Limited Series",
    genre: ["Crime", "Thriller", "Drama"],
    youtubeId: "e52JVh7TCQg",
    match: 87
  }
];
