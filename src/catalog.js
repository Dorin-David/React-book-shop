let currentDiscount = Math.floor(Math.random() * 20) <= 10 ? 10 : 20; //mock current discount, random between 10% and 20%
let elegiblesForDiscount = ['Tropic of Cancer', 'Lolita']; //mock current list of discounted books


let productDescription = {
  'Demons': `First published in the journal The Russian Messenger in 1871–72, Demons it is considered one of the four masterworks written by Dostoevsky after his return from Siberian exile, along with Crime and Punishment (1866), The Idiot (1869) 
             and The Brothers Karamazov (1880). Demons is a social and political satire, a psychological drama, and large-scale tragedy.`,
  'Ulysses': `Ulysses was first serialized in parts in the American journal The Little Review from March 1918 to December 1920 and then published in its entirety in Paris by Sylvia Beach on 2 February 1922, Joyce's 40th birthday. The novel chronicles the appointments and encounters of the itinerant Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904. Ulysses is the Latinised name of Odysseus, the hero of Homer's epic poem the Odyssey, and the novel establishes a series 
              of parallels between the poem and the novel, with structural correspondences between the characters and experiences of Bloom and Odysseus, Molly Bloom and Penelope, and Stephen Dedalus and Telemachus, in addition to events and themes of the early 20th-century context of modernism, Dublin, and Ireland's relationship to Britain. The novel is highly allusive and also imitates the styles of different periods of English literature.`,
  'Lolita': `Lolita is a 1955 novel written by Russian-American novelist Vladimir Nabokov. The novel is notable for its controversial subject: the protagonist and unreliable narrator, a middle-aged literature professor 
             under the pseudonym Humbert Humbert, is obsessed with a 12-year-old girl, Dolores Haze. Lolita quickly attained a classic status and the novel was adapted into a film by Stanley Kubrick in 1962.`,
  'War and Peace': `War and Peace is a novel by the Russian author Leo Tolstoy, first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains a classic of world literature. Tolstoy said War and Peace is "not a novel, even less is it a poem, and still less a historical chronicle." Large sections, especially the later chapters, are philosophical discussions rather than narrative. 
                    Tolstoy also said that the best Russian literature does not conform to standards and hence hesitated to call War and Peace a novel. `,
  'Moby Dick': `Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white whale that on the ship's previous voyage bit off Ahab's leg at the knee. A contribution to the literature of the American Renaissance, Moby-Dick was published to mixed reviews, was a commercial failure, and was out of print at the time of the author's death in 1891. 
               Its reputation as a "Great American Novel" was established only in the 20th century, after the centennial of its author's birth. William Faulkner said he wished he had written the book himself, and D. H. Lawrence called it "one of the strangest and most wonderful books in the world" and "the greatest book of the sea ever written". Its opening sentence, "Call me Ishmael", is among world literature's most famous. `,
  'The Metamorphosis': `The Metamorphosis is a short-story written by Franz Kafka which was first published in 1915. One of Kafka's best-known works, The Metamorphosis tells the story of salesman Gregor Samsa who wakes one morning to find himself inexplicably transformed into a huge insect (German ungeheures Ungeziefer, literally "monstrous vermin"), subsequently struggling to adjust to this new condition. 
                        The novella has been widely discussed among literary critics, with differing interpretations being offered.`,
  'Tropic of Cancer': `Tropic of Cancer is a novel by Henry Miller that has been described as "notorious for its candid sexuality" and as responsible for the "free speech that we now take for granted in literature". It was first published in 1934 by the Obelisk Press in Paris, France, but this edition was banned in the United States. Its publication in 1961 in the U.S. by Grove Press led to obscenity trials that tested American laws on pornography in the early 1960s. 
                       In 1964, the U.S. Supreme Court declared the book non-obscene. It is regarded as an important work of 20th-century literature.`
}

let catalog = [
  {author: 'Feodor Dostoevky', title: 'Demons', year: 1860, price: 9.99, img: 'https://images-na.ssl-images-amazon.com/images/I/715q28o7R4L.jpg', description: productDescription['Demons']},
  {author: 'James Joyce', title: 'Ulysses', year: 1922, price: 21.49, img:'https://images-na.ssl-images-amazon.com/images/I/31KkKrg+9mL._SX323_BO1,204,203,200_.jpg', description: productDescription['Ulysses']},
  {author: 'Henry Miller', title: 'Tropic of Cancer', year: 1934,  price: 11.99, img: 'https://images-na.ssl-images-amazon.com/images/I/71mlE9hsWeL.jpg', description: productDescription['Tropic of Cancer']},
  {author: 'Vladimir Nabokov', title: 'Lolita', year: 1955, price: 8.90, img: 'https://images-na.ssl-images-amazon.com/images/I/41beWU7rn8L._SX322_BO1,204,203,200_.jpg', description: productDescription['Lolita']},
  {author: 'Leo Tolstoy', title: 'War and Peace', year: 1867, price: 14.99, img: 'https://images-na.ssl-images-amazon.com/images/I/A1aDb5U5myL.jpg', description: productDescription['War and Peace']},
  {author: 'Herman Melville', title: 'Moby Dick', year: 1851, price: 8.99, img: 'https://images-na.ssl-images-amazon.com/images/I/51lGqAiGmvL._SX332_BO1,204,203,200_.jpg', description: productDescription['Moby Dick']},
  {author: 'Franz Kafka', title: 'The Metamorphosis', year: 1915, price: 9.99, img: 'https://m.media-amazon.com/images/I/41ZVSlBzbsL.jpg', description: productDescription['The Metamorphosis']}
//
]

export  {currentDiscount, elegiblesForDiscount, catalog, productDescription}

