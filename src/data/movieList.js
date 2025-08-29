const movieList = [

  {
    id: 1,
    title: "Stranger Things",
    synopsis: "A group of kids uncover a secret government experiment and a supernatural mystery.",
    poster_path: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    trailerId: "b9EkMc79ZSU" 
  },
  {
    id: 2,
    title: "Harry Potter: Order of the Phoenix",
    synopsis: "Harry faces new challenges as the Ministry interferes at Hogwarts.",
    poster_path: "https://image.tmdb.org/t/p/w500/5jkE2SzR5uR2egEb1rRhF22JyWN.jpg",
    trailerId: "LLAaW1EgyY8" 
  },
  {
    id: 3,
    title: "Breaking Bad",
    synopsis: "A chemistry teacher turns to crime after a terminal diagnosis.",
    poster_path: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    trailerId : "HhesaQXLuRY"

  },
  {
    id: 4,
    title: "The Witcher",
    synopsis: "A monster hunter struggles to find his place in a world of magic and beasts.",
    poster_path: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
    trailerId:"ndl1W4ltcmg"
  },
  {
    id: 5,
    title: "Wednesday",
    synopsis: "Wednesday Addams attends a school for outcasts.",
    poster_path: "https://image.tmdb.org/t/p/w500/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg",
    trailerId:"Di310WS8zLk"
  },
  {
    id: 6,
    title: "Harry Potter and the Prisoner of Azkaban",
    synopsis: "Harry discovers secrets about his past while a dangerous prisoner escapes Azkaban.",
    poster_path: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    trailerId:"VwErvYgoH70"
  },
  {
    id: 7,
    title: "Narcos",
    synopsis: "The story of Colombia's infamously violent drug cartels.",
    poster_path: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    trailerId:"xl8zdCY-abw"
  },
  {
    id: 8,
    title: "Loki",
    synopsis: "The God of Mischief steps out of his brother's shadow.",
    poster_path: "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    trailerId:"nW948Va-l10"
  },
  {
    id: 9,
    title: "Peaky Blinders",
    synopsis: "A gangster family epic set in 1900s England.",
    poster_path: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    trailerId:"oVzVdvGIC7U"
  },
  {
    id: 10,
    title: "Friends",
    synopsis: "Follows the personal and professional lives of six friends in NYC.",
    poster_path: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    trailerId:"Zg2LCD5QOJs"
  },
  {
    id: 11,
    title: "The Flash",
    synopsis: "Barry Allen becomes the fastest man alive.",
    poster_path: "https://image.tmdb.org/t/p/w500/rg8N7x27Ef6PvlIiioLStf9ZaIO.jpg",
    trailerId:"hebWYacbdvc"
  },
  {
    id: 12,
    title: "The Queen's Gambit",
    synopsis: "An orphan chess prodigy battles addiction in pursuit of greatness.",
    poster_path: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    trailerId:"oZn3qSgmLqI"

  },
  {
    id: 13,
    title: "The Umbrella Academy",
    synopsis: "A dysfunctional family of adopted superhero siblings reunite.",
    poster_path: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
    trailerId:"0DAmWHxeoKw"

  },
  {
    id: 14,
    title: "Squid Game",
    synopsis: "Hundreds of cash-strapped players accept a strange invitation to compete.",
    poster_path: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    trailerId:"oqxAJKy0ii4"

  },
  {
    id: 15,
    title: "Dark",
    synopsis: "A time travel conspiracy threatens to unravel reality itself.",
    poster_path: "https://image.tmdb.org/t/p/w500/3LqfWmv0eHRJdZbZgNZB3P2iGxi.jpg",
    trailerId:"ESEUoa-mz2c"
  },
  {
    id: 16,
    title: "Lucifer",
    synopsis: "The Devil relocates to Los Angeles and runs a nightclub.",
    poster_path: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
    trailerId:"X4bF_quwNtw"
  },
  {
    id: 17,
    title: "The Mandalorian",
    synopsis: "A lone bounty hunter makes his way through the outer reaches.",
    poster_path: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    trailerId:"aOC8E8z_ifw"
  },
  {
    id: 18,
    title: "Vikings",
    synopsis: "The legendary Norse hero Ragnar Lothbrok rises to fame.",
    poster_path: "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
    trailerId:"9GgxinPwAGc"
  },
  {
    id: 19,
    title: "The 100",
    synopsis: "Survivors return to Earth a century after a nuclear apocalypse.",
    poster_path: "https://image.tmdb.org/t/p/w500/wIE0LA6vAGnQbKJuozWzF4dKqvP.jpg",
    trailerId:"0N5AZo7AAGQ"
  },
  {
    id: 20,
    title: "Brooklyn Nine-Nine",
    synopsis: "A hilarious police precinct led by detective Jake Peralta.",
    poster_path: "https://image.tmdb.org/t/p/w500/yGNnjoIGOdQy3douq60tULY8teK.jpg",
    trailerId:"sEOuJ4z5aTc"
  },
];

export default movieList;
