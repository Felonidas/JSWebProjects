const localQuotes = [
  {
    text: 'Don’t tip your waiters and waitresses. No handouts.',
    author: 'Thomas Edison',
  },
  {
    text: 'Smoke Newports. Get lung cancer. Cure yourself with Marlboros.',
    author: 'Don Draper',
  },
  {
    text: 'Make a cryptocurrency. Pump and dump it. Evade the law. Move to Kosovo with a new name.',
    author: 'Abraham Lincoln',
  },
  {
    text: "If you're not happy when your're single, then you won't be happy when you're taken. Happiness comes from alcohol not a relationship",
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Life, Laugh, Grind.',
    author: 'Ernest Khalimov',
  },
  {
    text: 'Don’t pay taxes. What’s the IRS going to do? Exactly.',
    author: 'Mark Marx, Brother of Karl Marx',
  },
  {
    text: 'Ah Wire!',
    author: 'Jesse Pinkman',
  },
  {
    text: 'I’m not here for thinking, I’m here for results.',
    author: 'Aristotle',
  },
  {
    text: 'Trust is like virginity. you lose it once, you never get it back',
    author: 'Mr.Bean',
  },
  {
    text: 'Intentionally burn your house down. Never have a sense of a permanent home.',
    author: 'Son Goku',
  },
  {
    text: 'Violate international law. The United Nations won’t do jack shit.',
    author: 'Elon Musk',
  },
  {
    text: 'What you give is what you get.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'We can only learn to love by loving.',
    author: 'Iris Murdoch',
  },
  {
    text: 'My brother Josh blew himself up and his two kids.',
    author: 'Martin Cabello',
  },
  {
    text: "Somebody asked me if I'm autistic. I'm autistic as SHIT.",
    author: 'Conor McGregor',
  },
  {
    text: 'You are a sigma male, I am a smegma male. We are not the same.',
    author: 'Gus Fring',
  },
  {
    text: "Of course i cum fast. I'm a busy man. i've got places to be.",
    author: 'Patrick Bateman',
  },
  {
    text: "It's a sigma male world, you're just living in it",
    author: "Joker",
  },
  {
    text: 'Take your anger out on your wife and kids',
    author: 'Barack Obama',
  },
  {
    text: 'Don’t say anything to your Uber.',
    author: 'William Shakespeare',
  },
  {
    text: 'Trouble is only opportunity in work clothes.',
    author: 'Henry J. Kaiser',
  },
  {
    text: 'You may not know this but the ducks at the park are free, you can just take them.',
    author: 'Alex Jones',
  },
  {
    text: 'I like Gym',
    author: 'Arnold Shwarzenegger',
  },
  {
    text: "When you're a star, they let you do it. You can do anything. Grab 'em by the pussy.",
    author: 'Donald Trump',
  },
  {
    text: 'Doing nothing is better than being busy doing nothing.',
    author: 'Lao Tzu',
  },
  {
    text: 'Trust yourself. You know more than you think you do.',
    author: 'Benjamin Spock',
  },
  {
    text: 'Don’t ever buy weed from the gas station.',
    author: 'Confucius',
  },
  {
    text: "Don't let people know too much about your illegal bakugan collection",
    author: 'Tommy Shelby',
  },
  {
    text: 'Be a statue. Make sure nobody gets by. Be an inconvenience.',
    author: 'Sigmund Freud',
  },
  {
    text: 'Well done is better than well said.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'Women are temporary, your right hand is forever.',
    author: 'Spencer from iCarly',
  },
  {
    text: 'When life gives you lemons, resell them on eBay for a 400% markup. Embrace toxic resell culture.',
    author: 'Buddha',
  },
  {
    text: 'Have a loud alarm. Piss off your roommate.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'You are not immune to propaganda.',
    author: 'Garfield',
  },
  {
    text: 'Make a cryptocurrency. Pump and dump it. Evade the law. Move to Kosovo with a new name.',
    author: 'Albert Einstein',
  },
  {
    text: 'The first rule is that there are no rules.',
    author: 'Tyler Durden',
  },
  {
    text: "Cannibalism isn't illegal, it's how you get the flesh that is.",
    author: 'Jay Kulina',
  },
  {
    text: 'Learning is a treasure that will follow its owner everywhere',
    author: 'Adolf Hitler',
  },
  {
    text: 'I want to punch the hamburger helper. I hate that fucking glove. He is the epitome of beta.',
    author: 'Socrates',
  },
  {
    text: 'The world is always in movement.',
    author: 'V. Naipaul',
  },
  {
    text: 'Never mistake activity for achievement.',
    author: 'John Wooden',
  },
  {
    text: 'What worries you masters you.',
    author: 'Hodor',
  },
  {
    text: 'One faces the future with ones past.',
    author: 'Benito Mussolini',
  },
  {
    text: 'My goals are beyond your understanding.',
    author: 'Mao Zedong',
  },
  {
    text: 'Go against social norms. Be truly awake. Punch a squirrel.',
    author: 'Leonardo da Vinci',
  },
  {
    text: "Grappling is for pussies, i don't want to see two man semi naked hugging each other on the ground. i wan't punches and kicks the whole fight",
    author: 'Dalai Lama',
  },
  {
    text: "Talk doesn't cook rice.",
    author: 'Chinese man found inside a container',
  },
  {
    text: 'He is able who thinks he is able.',
    author: 'Buddha',
  },
  {
    text: 'Martini. Shaken, not stirred',
    author: 'James Bond',
  },
  {
    text: 'Sit alone at lunch. Be a lone wolf.',
    author: 'Ben Shapiro',
  },
  {
    text: 'Don’t eat at McDonalds, go to Burger King. A king’s feast must be at his kingdom.',
    author: 'Albert Einstein',
  },
  {
    text: 'A weed is no more than a flower in disguise.',
    author: 'James Lowell',
  },
  {
    text: 'A man without a treehouse is one without boundaries. (No girls allowed)',
    author: 'Yoda',
  },
  {
    text: 'All serious daring starts from within.',
    author: 'Harriet Beecher Stowe',
  },
  {
    text: 'The best teacher is experience learned from failures.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Think how hard physics would be if particles could think.',
    author: 'Murray Gell-Mann',
  },
  {
    text: "Love is the flower you've got to let grow.",
    author: 'John Lennon',
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: 'Napoleon Hill',
  },
  {
    text: 'Time is the wisest counsellor of all.',
    author: 'Pericles',
  },
  {
    text: 'You give before you get.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Always pick rock when playing Rock Paper Scissors. Only betas pick paper.',
    author: 'Socrates',
  },
  {
    text: "We Painted the Whole House, you wouldn't understand what that is only a sigma would.",
    author: 'SpongeBob Sigmapants',
  },
  {
    text: 'I forgor 💀',
    author: 'Aristotle',
  },
  {
    text: "I'll Laser Every F**king One Of You.",
    author: 'Homelander',
  },
  {
    text: 'When performance exceeds ambition, the overlap is called success.',
    author: 'Cullen Hightower',
  },
  {
    text: 'When deeds speak, words are nothing.',
    author: 'African proverb',
  },
  {
    text: "I'm Homelander. I Can Do Whatever I Want",
    author: 'Homelander',
  },
  {
    text: 'I never think of the future. It comes soon enough.',
    author: 'Albert Einstein',
  },
  {
    text: 'This is some serious gourmet shit.',
    author: 'Ratatouille',
  },
  {
    text: 'Wisdom is googling all day like a maniac',
    author: 'Sophocles',
  },
  {
    text: 'I believe that every person is born with talent.',
    author: 'Maya Angelou',
  },
  {
    text: 'Important principles may, and must, be inflexible.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'The undertaking of a new action brings new strength.',
    author: 'Richard Evans',
  },
  {
    text: 'The years teach much which the days never know.',
    author: 'Ralph Emerson',
  },
  {
    text: 'Our distrust is very expensive.',
    author: 'Ralph Emerson',
  },
  {
    text: 'All know the way; few actually walk it.',
    author: 'Bodhidharma',
  },
  {
    text: 'Great talent finds happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Faith in oneself is the best and safest course.',
    author: 'Michelangelo',
  },
  {
    text: 'Courage is going from failure to failure without losing enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    text: 'The two most powerful warriors are patience and time.',
    author: 'Kratos',
  },
  {
    text: 'Anticipate the difficult by managing the easy.',
    author: 'Lao Tzu',
  },
  {
    text: 'Those who are free of resentful thoughts surely find peace.',
    author: 'Buddha',
  },
  {
    text: 'A short saying often contains much wisdom.',
    author: 'Sophocles',
  },
  {
    text: 'It takes both sunshine and rain to make a rainbow.',
    author: 'the green one in ben10',
  },
  {
    text: 'A beautiful thing is never perfect.',
    author: 'Kevin Spacey',
  },
  {
    text: 'Only do what your heart tells you.',
    author: 'Jack The Ripper',
  },
  {
    text: 'I like to move it move it',
    author: 'King Julien',
  },
  {
    text: 'If she breaths she consents.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'i am speed.',
    author: 'Lightning McQueen',
  },
  {
    text: 'If plane flies by, throw rock at it. it may fall down and we may feast.',
    author: 'African Proverb',
  },
  {
    text: 'Victory belongs to the most persevering.',
    author: 'Napoleon Bonaparte',
  },
  {
    text: 'Love all, trust a few, do wrong to none.',
    author: 'William Shakespeare',
  },
  {
    text: 'In order to win, you must expect to win.',
    author: 'Richard Bach',
  },
  {
    text: 'A goal is a dream with a deadline.',
    author: 'Napoleon Hill',
  },
  {
    text: 'You can do it if you believe you can!',
    author: 'Napoleon Hill',
  },
  {
    text: "Set your goals high, and don't stop till you get there.",
    author: 'Bo Jackson',
  },
  {
    text: 'Sewer rat might taste like pumpkin pie, but I’d never know cuz I wouldn’t eat the filthy motherfucker.',
    author: 'Jules',
  },
  {
    text: 'English, motherfucker, do you speak it?.',
    author: 'Kim Jong Un',
  },
  {
    text: 'Aw, man, I shot Marvin in the face.',
    author: 'Martin Luther King',
  },
  {
    text: 'Do more than dream: work.',
    author: 'William Arthur Ward',
  },
  {
    text: 'No man was ever wise by chance.',
    author: 'Seneca',
  },
  {
    text: 'I learn from the mistakes of people who take my advice.',
    author: 'Tywin Lannister',
  },
  {
    text: 'The person who acts the gayest in your friend group is the straightest.',
    author: 'William Shakespeare',
  },
  {
    text: "I have seven girls in my bed rn. while im playing csgo, couldn't care less.",
    author: 'Hugh Marston Hefner',
  },
  {
    text: 'Do something wonderful, people may imitate it.',
    author: 'Albert Schweitzer',
  },
  {
    text: "Don't think outside the box. shit inside the box.",
    author: 'Garfield',
  },
  {
    text: "I don't abuse people. I lay my hands on them.",
    author: 'Joe Biden',
  },
  {
    text: 'Invest all your life savings into crypto, nothing will go wrong.',
    author: 'Warren Buffet',
  },
  {
    text: 'Who looks outside, dreams; who looks inside, awakes.',
    author: 'Carl Jung',
  },
  {
    text: 'What we think, we become.',
    author: 'Buddha',
  },
  {
    text: 'The shortest answer is doing.',
    author: 'Lord Herbert',
  },
  {
    text: 'All our knowledge has its origins in our perceptions.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'The harder you fall, the higher you bounce.',
    author: null,
  },
  {
    text: 'Admit that men are superior to women.',
    author: 'Anne Wilson Schaef',
  },
  {
    text: 'If your dick is small,just make it bigger.',
    author: 'Sojourner Truth',
  },
  {
    text: 'If you get bullied for being gay, Catfish your bully while crossdressing.',
    author: 'Sullivan',
  },
  {
    text: "I'm not a homophobe. I just dont allow gay people here.",
    author: 'German proverb',
  },
  {
    text: 'If i have the whole speedometer, I will use the whole speedometer.',
    author: 'Paul Walker',
  },
  {
    text: "I'm not a pedophile, she just so happens to be younger than me",
    author: 'Ghandi',
  },
  {
    text: 'Jail is just a room. Commit arson',
    author: 'Mike Tyson',
  },
  {
    text: "Just piss yourself. Your body wasn't made for toilets",
    author: 'Leonardo DiCaprio',
  },
  {
    text: 'No alibi will save you from accepting the responsibility.',
    author: 'Napoleon Hill',
  },
  {
    text: 'If you can dream it, you can do it.',
    author: 'Walt Disney',
  },
  {
    text: 'It is better to travel well than to arrive.',
    author: 'Buddha',
  },
  {
    text: "If you're getting cyberbullied, turn off your screen.",
    author: 'Mark Zuckerberg',
  },
  {
    text: 'You have to believe in yourself.',
    author: 'Sun Tzu',
  },
  {
    text: 'Our intention creates our reality.',
    author: 'Wayne Dyer',
  },
  {
    text: 'Silence is a true friend who never betrays.',
    author: 'Confucius',
  },
  {
    text: 'Character develops itself in the stream of life.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'From little acorns mighty oaks do grow.',
    author: 'American proverb',
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",
    author: 'Jon Kabat-Zinn',
  },
  {
    text: 'Reality does not conform to the ideal, but confirms it.',
    author: 'Gustave Flaubert',
  },
  {
    text: 'Speak low, if you speak love.',
    author: 'William Shakespeare',
  },
  {
    text: 'A really great talent finds its happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Reality leaves a lot to the imagination.',
    author: 'John Lennon',
  },
  {
    text: 'Only betas, wash their hands.',
    author: 'Joker',
  },
  {
    text: 'Growth itself contains the germ of happiness.',
    author: 'Pearl Buck',
  },
  {
    text: "Fart in public spaces no one will know it was you.",
    author: "Unknown",
  },
];
