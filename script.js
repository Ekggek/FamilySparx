const questions = {
    fun: [
        "If you could have any superpower, what would it be and why?",
        "What’s the funniest thing that happened to you this week?",
        "If you could trade places with any celebrity for a day, who would it be?",
        "If your pet could talk, what would they say?",
        "What’s the most bizarre food you’ve ever eaten?",
        "If you could have an unlimited supply of one thing, what would it be?",
        "What’s the weirdest dream you’ve ever had?",
        "If you could create a new emoji, what would it be?",
        "What’s your favorite joke?",
        "If you had to live in a video game world, which one would you pick?"
    ],
    self_reflection: [
        "What’s a belief you’ve changed in the last year?",
        "What are you most proud of about yourself?",
        "What’s something about yourself that you’re working on improving?",
        "What’s one lesson you’ve learned the hard way?",
        "If you could master any skill instantly, what would it be?",
        "What’s a goal you have for the next year?",
        "What’s your biggest strength?",
        "How do you handle stress?",
        "What motivates you the most?",
        "If you could give advice to your younger self, what would it be?"
    ],
    big_questions: [
        "What’s a popular opinion that you completely disagree with?",
        "How do you know if a piece of news is trustworthy?",
        "What’s an example of something that people blindly follow?",
        "Why do you think people believe conspiracy theories?",
        "If you had to create a 'BS detector' for spotting fake news, what would it include?",
        "If you could change one law, what would it be?",
        "Why do people tend to believe things that confirm what they already think?",
        "Is there such a thing as an absolute truth, or is everything subjective?",
        "What’s an idea or belief you used to have but no longer do?",
        "What’s a question you think more people should be asking?"
    ],
    life_skills: [
        "What’s one practical skill you think all teens should learn?",
        "How do you handle stress when things feel overwhelming?",
        "What’s a financial tip you think young people should know?",
        "What’s the best advice you’ve ever received?",
        "If you could teach a class on any life skill, what would it be?",
        "How do you decide what’s a want vs. a need?",
        "What’s one thing about adulthood that seems confusing to you?",
        "How do you make sure you're spending your time wisely?",
        "What’s the best way to stay organized?",
        "What’s a common money mistake people make that you want to avoid?"
    ]
};

// Populate "Surprise Me!" category
questions.surprise = [
    ...questions.fun,
    ...questions.self_reflection,
    ...questions.big_questions,
    ...questions.life_skills
];

function sho
