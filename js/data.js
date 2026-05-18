const categories = [
  {
    title: "Trending Now",
    items: [
      {
        title: "Dark",
        year: "2020",
        match: "98%",
        desc: "A family saga with a supernatural twist.",
        image: "assets/images/dark.jpg",
      },

      {
        title: "Money Heist",
        year: "2021",
        match: "95%",
        desc: "The Professor plans the biggest heist.",
        image: "assets/images/moneyheist.jpg",
      },

      {
        title: "The Witcher",
        year: "2023",
        match: "92%",
        desc: "Geralt of Rivia fights monsters.",
        image: "assets/images/witcher.jpg",
      },
      {
        title: "Wednesday",
        year: "2022",
        match: "96%",
        desc: "Wednesday Addams investigates mysteries at Nevermore Academy.",
        image: "assets/images/wednesday.jpg",
      },
      {
        title: "Ozark",
        year: "2022",
        match: "94%",
        desc: "A financial adviser launders money for a dangerous cartel.",
        image: "assets/images/ozark.jpg",
      },

      {
        title: "Squid Game",
        year: "2021",
        match: "97%",
        desc: "Hundreds compete in deadly games for a huge cash prize.",
        image: "assets/images/squidgame.jpg",
      },
    ],
  },

  {
    title: "Popular on Netflix",
    items: [
      {
        title: "Breaking Bad",
        year: "2013",
        match: "99%",
        desc: "A chemistry teacher becomes a drug kingpin.",
        image: "assets/images/breakingbad.jpg",
      },

      {
        title: "Narcos",
        year: "2017",
        match: "94%",
        desc: "Story of Pablo Escobar.",
        image: "assets/images/narcos.jpg",
      },

      {
        title: "Peaky Blinders",
        year: "2022",
        match: "96%",
        desc: "A gangster family rises to power in Birmingham.",
        image: "assets/images/peakyblinders.jpg",
      },

      {
        title: "The Crown",
        year: "2023",
        match: "91%",
        desc: "The reign and life of Queen Elizabeth II.",
        image: "assets/images/thecrown.jpg",
      },

      {
        title: "Black Mirror",
        year: "2023",
        match: "93%",
        desc: "A dark anthology exploring technology and society.",
        image: "assets/images/blackmirror.jpg",
      },

      {
        title: "Mindhunter",
        year: "2019",
        match: "97%",
        desc: "FBI agents interview serial killers to solve cases.",
        image: "assets/images/mindhunter.jpg",
      },
    ],
  },
  {
    title: "Action & Adventure",

    items: [
      {
        title: "Extraction",
        year: "2023",
        match: "88%",
        desc: "A mercenary is hired to rescue a kidnapped boy.",
        image: "assets/images/extraction.jpg",
      },

      {
        title: "The Gray Man",
        year: "2022",
        match: "85%",
        desc: "A CIA operative uncovers dangerous agency secrets.",
        image: "assets/images/thegrayman.jpg",
      },

      {
        title: "Red Notice",
        year: "2021",
        match: "82%",
        desc: "An FBI profiler teams up with an art thief.",
        image: "assets/images/rednotice.jpg",
      },

      {
        title: "6 Underground",
        year: "2019",
        match: "80%",
        desc: "Six vigilantes fake their deaths to fight criminals.",
        image: "assets/images/6underground.jpg",
      },

      {
        title: "Old Guard",
        year: "2020",
        match: "87%",
        desc: "Immortal warriors secretly protect the world.",
        image: "assets/images/oldguard.jpg",
      },

      {
        title: "Triple Frontier",
        year: "2019",
        match: "83%",
        desc: "Former soldiers reunite for a dangerous heist.",
        image: "assets/images/triplefrontier.jpg",
      },
    ],
  },
  {
    title: "Top 10 Shows in India Today",

    items: [
      {
        title: "Berlin",
        year: "2024",
        match: "95%",
        desc: "Berlin plans one of the greatest heists ever.",
        image: "assets/images/berlin.jpg",
      },

      {
        title: "The Wonder Fools",
        year: "2024",
        match: "92%",
        desc: "A thrilling adventure full of mysteries.",
        image: "assets/images/wonderfools.jpg",
      },

      {
        title: "The Glory",
        year: "2023",
        match: "97%",
        desc: "A woman seeks revenge against her bullies.",
        image: "assets/images/theglory.jpg",
      },

      {
        title: "If Wishes Could Kill",
        year: "2024",
        match: "90%",
        desc: "Dark secrets unfold among students.",
        image: "assets/images/ifwishescouldkill.jpg",
      },

      {
        title: "My Royal Nemesis",
        year: "2024",
        match: "95%",
        desc: "A royal romance mixed with rivalry.",
        image: "assets/images/myroyalnemesis.jpg",
      },

      {
        title: "Devil May Cry",
        year: "2024",
        match: "94%",
        desc: "A demon hunter battles dark forces.",
        image: "assets/images/devilmaycry.jpg",
      },
    ],
  },
  {
    title: "We Think You'll Love These",

    items: [
      {
        title: "Homebound",
        year: "2023",
        match: "91%",
        desc: "A touching emotional drama.",
        image: "assets/images/homebound.jpg",
      },

      {
        title: "Delhi Crime",
        year: "2022",
        match: "96%",
        desc: "A gripping police investigation drama.",
        image: "assets/images/delhicrime.jpg",
      },

      {
        title: "Gossip Girl",
        year: "2021",
        match: "89%",
        desc: "Elite lives and scandals unfold in New York.",
        image: "assets/images/gossipgirl.jpg",
      },

      {
        title: "OK Jaanu",
        year: "2017",
        match: "85%",
        desc: "A romantic drama about modern relationships.",
        image: "assets/images/okjaanu.jpg",
      },
      {
        title: "Border 2",
        year: "2025",
        match: "93%",
        desc: "An intense patriotic war drama.",
        image: "assets/images/border2.jpg",
      },

      {
        title: "Single Papa",
        year: "2024",
        match: "89%",
        desc: "A heartfelt family comedy-drama.",
        image: "assets/images/singlepapa.jpg",
      },
    ],
  },
  {
    title: "Because You Watched Stranger Things",

    items: [
      {
        title: "The Perks of Being a Wallflower",
        year: "2012",
        match: "94%",
        desc: "A coming-of-age emotional journey.",
        image: "assets/images/perks.jpg",
      },

      {
        title: "Outer Banks",
        year: "2023",
        match: "91%",
        desc: "Teenagers hunt treasure on dangerous islands.",
        image: "assets/images/outerbanks.jpg",
      },

      {
        title: "Enola Holmes",
        year: "2022",
        match: "93%",
        desc: "Sherlock Holmes' sister solves mysteries.",
        image: "assets/images/enolaholmes.jpg",
      },

      {
        title: "Passengers",
        year: "2016",
        match: "90%",
        desc: "Two passengers awaken early on a space mission.",
        image: "assets/images/passengers.jpg",
      },
      {
        title: "Better Call Saul",
        year: "2022",
        match: "97%",
        desc: "The rise of lawyer Saul Goodman.",
        image: "assets/images/bettercallsaul.jpg",
      },

      {
        title: "Gilmore Girls",
        year: "2007",
        match: "92%",
        desc: "A charming mother-daughter story.",
        image: "assets/images/gilmoregirls.jpg",
      },
    ],
  },
  {
    title: "Because You Watched Emily in Paris",

    items: [
      {
        title: "The Office",
        year: "2013",
        match: "99%",
        desc: "Comedy series about office employees.",
        image: "assets/images/theoffice.jpg",
      },

      {
        title: "Perfect Pairing",
        year: "2022",
        match: "88%",
        desc: "A romantic countryside love story.",
        image: "assets/images/perfectpairing.jpg",
      },

      {
        title: "The Kissing Booth",
        year: "2021",
        match: "86%",
        desc: "Teen romance and friendship challenges.",
        image: "assets/images/kissingbooth.jpg",
      },

      {
        title: "To All The Boys I've Loved Before",
        year: "2020",
        match: "92%",
        desc: "Love letters create unexpected romance.",
        image: "assets/images/toalltheboys.jpg",
      },
      {
        title: "My Oxford Year",
        year: "2024",
        match: "90%",
        desc: "A romantic journey at Oxford University.",
        image: "assets/images/myoxfordyear.jpg",
      },

      {
        title: "Shameless",
        year: "2021",
        match: "94%",
        desc: "A chaotic but lovable family drama.",
        image: "assets/images/shameless.jpg",
      },
    ],
  },
];
