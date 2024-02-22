export const food = '/brAm/food.jpg';
export const london = '/brAm/london.jpg';
export const tech = '/brAm/tech.jpg';
export const gym = '/brAm/gym.jpg';
export const negative = '/brAm/negative.jpg';
export const makeup = '/brAm/makeup.jpg';
export const football = '/brAm/football.jpg';
export const music = '/brAm/music.jpg';


//random quiz
export const holiday = '/brAm/random/holiday.jpg';
export const autumn = '/brAm/random/autumn.jpg';

//food quiz
export const cookies = '/brAm/food/cookies.jpg';
export const fries = '/brAm/food/fries.jpg';
export const starters = '/brAm/food/starters.jpg';
export const crisps = '/brAm/food/crisps.jpg';
export const eggplant = '/brAm/food/eggplant.jpg';
export const popsicle = '/brAm/food/popsicle.jpg';
export const candyfloss = '/brAm/food/candyfloss.jpg';


//should I create a separate object in another file for all the images?

export const brAmQuizzes = [
  {
    id: 1,
    title: "Food: is it British or American?",
    image: food,
    tags: ["exercise", "british", "american", "quiz", "vocabulary", "b2", "c1", "c2", "upper-intermediate", "advanced"],
    quizQuestions: [
      {
        questionId: 1,
        question: "Which is American?",
        image: fries,
        variants: [
          {
            wordIndex: 1,
            word1: "chips",
            variant: "British",
            isCorrect: false,
          },
          {
            wordIndex: 2,
            word2: "fries",
            variant: "American",
            isCorrect: true,
          },
        ],
        examplePhrase: "I'd have just fries and soda.",
      },
      {
        questionId: 2,
        question: "Which is American?",
        image: cookies,

        variants: [
          {
            wordIndex: 1,
            word1: "biscuit",
            variant: "British",
            isCorrect: false,
          },
          {
            wordIndex: 2,

            word2: "cookie",
            variant: "American",
            isCorrect: true,
          },
        ],
        examplePhrase: "I make chocolate cookies every Sunday.",
      },
      {
        questionId: 3,
        question: "Which is American?",
        image: popsicle,

        variants: [
          {
            wordIndex: 1,
            word1: "popsicle",
            variant: "American",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "ice lolly",
            variant: "British",
            isCorrect: false,
          },
        ],
        examplePhrase: "After a long day at the beach, I enjoyed a refreshing popsicle.",
      },
      {
        questionId: 4,
        question: "Which is British?",
        image: eggplant,

        variants: [
          {
            wordIndex: 1,
            word1: "aubergine",
            variant: "British",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "eggplant",
            variant: "American",
            isCorrect: false,
          },
        ],
        examplePhrase: "The chef grilled some aubergine slices for a quick and flavorful side dish.",
      },

      {
        questionId: 5,
        question: "Which is British?",
        image: crisps,

        variants: [
          {
            wordIndex: 1,
            word1: "crisps",
            variant: "British",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "chips",
            variant: "American",
            isCorrect: false,
          },
        ],
        examplePhrase: "I grabbed a bag of crisps for the movie night with friends.",
      },

      {
        questionId: 6,
        question: "Which is American?",
        image: starters,

        variants: [
          {
            wordIndex: 1,
            word1: "starter",
            variant: "British",
            isCorrect: false,
          },
          {
            wordIndex: 2,

            word2: "appetizer",
            variant: "American",
            isCorrect: true,
          },
        ],
        examplePhrase: "I’ve chosen a hot starter.",
      },

      {
        questionId: 7,
        question: "Which is American?",
        image: candyfloss,

        variants: [
          {
            wordIndex: 1,
            word1: "cotton candy",
            variant: "American",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "candyfloss",
            variant: "British",
            isCorrect: false,
          },
        ],
        examplePhrase: "Children laughed, enjoying sticky candyfloss at the fair.",
      },
      
    ],
  },
  {
    id: 2,
    title: "Is it British or American?",
    image: london,
    tags: ["exercise", "british", "american", "quiz", "vocabulary", "b2", "c1", "c2", "upper-intermediate", "advanced"],
    quizQuestions: [
      {
        questionId: 1,
        question: "Which is British?",
        image: autumn,
        variants: [
          {
            wordIndex: 1,

            word1: "autumn",
            variant: "British",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "fall",
            variant: "American",
            isCorrect: false,
          },
        ],
        examplePhrase: "In the autumn, I stay at home as much as I can.",
      },
      {
        questionId: 2,
        question: "Which is American?",
        image: holiday,
        variants: [
          {
            wordIndex: 1,

            word1: "holiday",
            variant: "British",
            isCorrect: false,
          },
          {
            wordIndex: 2,

            word2: "vacation",
            variant: "American",
            isCorrect: true,
          },
        ],
        examplePhrase: "I'm going on vacation next week.",
      },
    ],
  },

  {
    id: 3,
    title: "Are you a tech whiz?",
    image: tech,
    tags: ["exercise", "british", "american", "quiz", "vocabulary", "b2", "c1", "c2", "upper-intermediate", "advanced"],
    quizQuestions: [
      {
        questionId: 1,
        question: "Which is British?",
        image: autumn,
        variants: [
          {
            wordIndex: 1,

            word1: "autumn",
            variant: "British",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "fall",
            variant: "American",
            isCorrect: false,
          },
        ],
        examplePhrase: "In the autumn, I stay at home as much as I can.",
      },
      {
        questionId: 2,
        question: "Which is American?",
        image: holiday,
        variants: [
          {
            wordIndex: 1,

            word1: "holiday",
            variant: "British",
            isCorrect: false,
          },
          {
            wordIndex: 2,

            word2: "vacation",
            variant: "American",
            isCorrect: true,
          },
        ],
        examplePhrase: "I'm going on vacation next week.",
      },
    ],
  },

  {
    id: 4,
    title: "10 phrases to talk about your ❤ music",
    image: music,
    tags: ["exercise", "music", "phrases", "quiz", "vocabulary", "b2", "c1", "c2", "upper-intermediate", "advanced"],
    quizQuestions: [
      {
        questionId: 1,
        question: "Which is British?",
        image: autumn,
        variants: [
          {
            wordIndex: 1,

            word1: "autumn",
            variant: "British",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "fall",
            variant: "American",
            isCorrect: false,
          },
        ],
        examplePhrase: "In the autumn, I stay at home as much as I can.",
      },
      
    ],
  },

  {
    id: 5,
    title: "Are you a gym rat?",
    image: gym,
    tags: ["exercise", "sport", "gym", "quiz", "vocabulary", "b2", "c1", "c2", "upper-intermediate", "advanced"],
    quizQuestions: [
      {
        questionId: 1,
        question: "Which is British?",
        image: autumn,
        variants: [
          {
            wordIndex: 1,

            word1: "autumn",
            variant: "British",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "fall",
            variant: "American",
            isCorrect: false,
          },
        ],
        examplePhrase: "In the autumn, I stay at home as much as I can.",
      },
      
    ],
  },

  {
    id: 6,
    title: "Turn into a make-up pro!",
    image: makeup,
    tags: ["exercise", "sport", "gym", "quiz", "vocabulary", "b2", "c1", "c2", "upper-intermediate", "advanced"],
    quizQuestions: [
      {
        questionId: 1,
        question: "Which is British?",
        image: autumn,
        variants: [
          {
            wordIndex: 1,

            word1: "autumn",
            variant: "British",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "fall",
            variant: "American",
            isCorrect: false,
          },
        ],
        examplePhrase: "In the autumn, I stay at home as much as I can.",
      },
      
    ],
  },

  {
    id: 7,
    title: "How can you name a negative person?",
    image: negative,
    tags: ["exercise", "person", "emotions", "quiz", "vocabulary", "b2", "c1", "c2", "upper-intermediate", "advanced"],
    quizQuestions: [
      {
        questionId: 1,
        question: "Which is British?",
        image: autumn,
        variants: [
          {
            wordIndex: 1,

            word1: "autumn",
            variant: "British",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "fall",
            variant: "American",
            isCorrect: false,
          },
        ],
        examplePhrase: "In the autumn, I stay at home as much as I can.",
      },
      
    ],
  },
  {
    id: 8,
    title: "Fun football phrases",
    image: football,
    tags: ["exercise", "person", "emotions", "quiz", "vocabulary", "b2", "c1", "c2", "upper-intermediate", "advanced"],
    quizQuestions: [
      {
        questionId: 1,
        question: "Which is British?",
        image: autumn,
        variants: [
          {
            wordIndex: 1,

            word1: "autumn",
            variant: "British",
            isCorrect: true,
          },
          {
            wordIndex: 2,

            word2: "fall",
            variant: "American",
            isCorrect: false,
          },
        ],
        examplePhrase: "In the autumn, I stay at home as much as I can.",
      },
      
    ],
  },
];
