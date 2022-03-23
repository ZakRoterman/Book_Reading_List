import * as React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

let books = [
    {
        "author": "Arlene Dahl",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 18,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg",
        "pages": 198,
        "subject": "self help",
        "summary": "For women traveling back to the US 1950",
        "title": "ALWAYS ASK A MAN: THE KEY TO FEMININITY"
    },
    {
        "author": "Arnetta R. Scales",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 19,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/and-on-the-eighth-day-god-created-hairdressers-book-cover.jpg",
        "pages": 222,
        "subject": "self help",
        "summary": "Becuase I just gotta get my hair did",
        "title": "AND ON THE EIGHTH DAY GOD CREATED HAIRDRESSERS"
    },
    {
        "author": "James Maratta",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 20,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/brainwashing-is-a-cinch-book-cover.jpg",
        "pages": 321,
        "subject": "science",
        "summary": "We bother making a rational argument?",
        "title": "BRAINWASHING IS A CINCH!"
    },
    {
        "author": "Stephanie Jackson",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 21,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/cat-flexing.jpg",
        "pages": 1295,
        "subject": "self help",
        "summary": "Who needs heavy weights when a fat cat will do",
        "title": "CATFLEXING: A CATLOVER’S GUIDE TO WEIGHTLIFTING, AEROBICS & STRETCHING"
    },
    {
        "author": "Micheala Giles",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 22,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/commuter-pig-keeper-book-cover.jpg",
        "pages": 87,
        "subject": "science",
        "summary": "Not in Kansas anymore? Raising pigs in the City with a full time job?",
        "title": "THE COMMUTER PIG KEEPER"
    },
    {
        "author": "Elizabeth Worthington Strong",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 24,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/how-to-cook-husbands-book-cover.jpg",
        "pages": 199,
        "subject": "marriage advice",
        "summary": "For when you are tired of the question What's for dinner?",
        "title": "HOW TO COOK HUSBANDS"
    },
    {
        "author": "Lois Bird",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 25,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/how-to-make-your-wife-your-mistress-book-cover.jpg",
        "pages": 111,
        "subject": "marriage advice",
        "summary": "Living with two women can be hard: Consolidate",
        "title": "HOW TO MAKE YOUR WIFE YOUR MISTRESS"
    },
    {
        "author": "Brenda Bence",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 26,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/how-you-are-like-shampoo-book-cover.jpg",
        "pages": 222,
        "subject": "self help",
        "summary": "Lather, rinse, repeat.",
        "title": "HOW YOU ARE LIKE SHAMPOO"
    },
    {
        "author": "Aqua Boil",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 27,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/the-joy-of-waterboiling-book-cover-759x1024.jpg",
        "pages": 12,
        "subject": "entertainment",
        "summary": "For when you need to have fun on a budget ",
        "title": "THE JOY OF WATER BOILING"
    },
    {
        "author": "Drew Emborsky",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 28,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/men-who-knit-and-the-dogs-who-love-them-book-cover.jpg",
        "pages": 397,
        "subject": "entertainment",
        "summary": "Nothing finer than knitting matching sweaters for you and your dog",
        "title": "MEN WHO KNIT & THE DOGS WHO LOVE THEM"
    },
    {
        "author": "Matthew Voggel",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 30,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/natural-history-of-vacant-lots-book-cover-178x300.jpg",
        "pages": 452,
        "subject": "science",
        "summary": "Seinfeld for Property",
        "title": "NATURAL HISTORY OF VACANT LOTS"
    },
    {
        "author": "Hester Mundis",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 31,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/no-hes-not-a-monkey-book-cover.jpg",
        "pages": 521,
        "subject": "self help",
        "summary": "Advice on raising a teenage boy",
        "title": "NO, HE’S NOT A MONKEY, HE’S AN APE AND HE’S MY SON"
    },
    {
        "author": "Linda Wright",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 32,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/toilet-paper-origami-book-cover.jpg",
        "pages": 222,
        "subject": "entertainment",
        "summary": "A book for when you leave your phone in the other room.",
        "title": "TOILET PAPER ORIGAMI"
    },
    {
        "author": "Martin Greenberg",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 33,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/zombie-raccoons-and-killer-rabbits-book-cover.jpg",
        "pages": 201,
        "subject": "science",
        "summary": "When the day comes you'll thank me",
        "title": "ZOMBIE RACCOONS & KILLER BUNNIES"
    },
    {
        "author": "Donal I Rogers",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 34,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/teach-your-wife-to-be-a-widow-book-cover.jpg",
        "pages": 187,
        "subject": "marriage",
        "summary": "For when your wife browses our marriage section",
        "title": "TEACH YOUR WIFE TO BE A WIDOW"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 35,
        "img": "https://boyter.org/static/books/Cn1rWcbWcAAgsCA.jpg",
        "pages": 120,
        "subject": "Programming",
        "summary": "Regex is hard",
        "title": "Googling for the Regex"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 36,
        "img": "https://boyter.org/static/books/CpWvVOoW8AAjYmB.jpg",
        "pages": 5324,
        "subject": "Programming",
        "summary": "git add, git commit, git push, git clone, git branch, git fetch",
        "title": "Memorizing Six Git Commands"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 37,
        "img": "https://boyter.org/static/books/CnDD1t0XgAQMXJA.jpg",
        "pages": 57,
        "subject": "Programming",
        "summary": "To catch them is your real test, to train them is your cause",
        "title": "Catching 'em all"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 38,
        "img": "https://boyter.org/static/books/Cf7eHZ1W4AEeZJA.jpg",
        "pages": 125,
        "subject": "Programming",
        "summary": "The way programmers like to learn",
        "title": "Changing Stuff and Seeing What Happens"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 39,
        "img": "https://boyter.org/static/books/ChdhDa5XEAAK36t.jpg",
        "pages": 233,
        "subject": "Programming",
        "summary": "What happened when I built this ap",
        "title": "Moving Fast and breaking things"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 40,
        "img": "https://boyter.org/static/books/CiHHf9-UYAA6aVB.jpg",
        "pages": 233,
        "subject": "Programming",
        "summary": "A book on the key to success",
        "title": "Remembering What to Google"
    },
    {
        "author": "Anonymous",
        "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
        "id": 23,
        "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/cooking-to-kill-book-cover.jpg",
        "pages": 3207,
        "subject": "cooking",
        "summary": "Originally titled: Divorce with Benefits",
        "title": "COOKING TO KILL: THE POISON COOK-BOOK"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 41,
        "img": "https://boyter.org/static/books/Cllb9urWMAAKaz4.jpg",
        "pages": 384,
        "subject": "Programming",
        "summary": "A book on how I got through Coding Temple Lectures",
        "title": "Nodding along"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 42,
        "img": "https://boyter.org/static/books/CfSQdwUW8AErog1.jpg",
        "pages": 32,
        "subject": "Programming",
        "summary": "My programming process",
        "title": "Trying Stuff Until it Works"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 43,
        "img": "https://boyter.org/static/books/pRDPMx2.jpg",
        "pages": 475,
        "subject": "Programming",
        "summary": "I think i know what this does",
        "title": "Copying and Pasting from Stack Overflow"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 21:56:09 GMT",
        "id": 44,
        "img": "https://boyter.org/static/books/C1_sRq9XgAADMzY.jpg",
        "pages": 2,
        "subject": "Programming",
        "summary": "Crossing those fingers",
        "title": "Hoping for the Right Interview Questions"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 22:24:42 GMT",
        "id": 45,
        "img": "https://boyter.org/static/books/f8153cfdbe0a117e6386fa7051976063-2.jpeg",
        "pages": 923,
        "subject": "Programming",
        "summary": "Wade's old textbook",
        "title": "Cobol: the fossilized guide"
    },
    {
        "author": "The Practical Dev",
        "created_on": "Mon, 07 Mar 2022 22:24:42 GMT",
        "id": 46,
        "img": "https://boyter.org/static/books/e1120a9e3abfecff3ac50527e1b3556f-2.jpeg",
        "pages": 143,
        "subject": "Programming",
        "summary": "Looks just as good as the original",
        "title": "JPEG Compression"
    },
    {
        "author": "Peanut Pirate",
        "created_on": "Wed, 09 Mar 2022 23:12:01 GMT",
        "id": 47,
        "img": "http://www.fastprint.co.uk/Assets/User/2107-outwitting-squirrels.jpg",
        "pages": 12456,
        "subject": "entertainment",
        "summary": "It's way harder than it sounds",
        "title": "Outwitting Squirrels"
    },
    {
        "author": "Malcolm",
        "created_on": "Wed, 09 Mar 2022 23:12:01 GMT",
        "id": 48,
        "img": "http://www.fastprint.co.uk/Assets/User/2064-eating-people-is-wrong.jpg",
        "pages": 134,
        "subject": "cooking",
        "summary": "This was also news to me",
        "title": "Eating People is Wrong"
    },
    {
        "author": "673126",
        "created_on": "Wed, 09 Mar 2022 23:12:01 GMT",
        "id": 49,
        "img": "http://www.fastprint.co.uk/Assets/User/2084-how-to-make-money-in-your-spare-time.jpg",
        "pages": 666,
        "subject": "self help",
        "summary": "Black mask not included",
        "title": "How to make money in your spare time"
    },
    {
        "author": "John W Trimmer",
        "created_on": "Wed, 09 Mar 2022 23:12:01 GMT",
        "id": 50,
        "img": "http://www.fastprint.co.uk/Assets/User/2079-how-to-avoid-huge-ships.jpg",
        "pages": 1,
        "subject": "science",
        "summary": "Pivot",
        "title": "How to Avoid Huge Ships"
    },
    {
        "author": "Heather Silver",
        "created_on": "Wed, 09 Mar 2022 23:12:01 GMT",
        "id": 51,
        "img": "http://www.fastprint.co.uk/Assets/User/2142-why-cats-paint.jpg",
        "pages": 185,
        "subject": "entertainment",
        "summary": "A photogenic journey through the internets favorite topic",
        "title": "Why Cats Paint"
    },
    {
        "author": "Coolio",
        "created_on": "Wed, 09 Mar 2022 23:12:01 GMT",
        "id": 52,
        "img": "http://www.fastprint.co.uk/Assets/User/2062-cookin-with-coolio.jpg",
        "pages": 207,
        "subject": "cooking",
        "summary": "The fried bologna is devine",
        "title": "Cookin' with Coolio"
    }
]

export default function SingleBook({book}) {

return (

  <Box  display= 'grid'>
    
    {books?.map((book) => (
      <Box gridColumn="span 2">
      <ImageListItem key={book.id}>
        <img
          src={book.img}
          srcSet={book.img}
          alt={book.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={book.author}
          subtitle={book.subject}
          actionIcon={
            <>
            <IconButton
              color='primary'
              aria-label={`add to reading list`}
            >
              <AddBoxIcon />
            </IconButton>
            
            </>
          }
          
          />
      </ImageListItem>
          </Box>
    ))}
   </Box>
);
};