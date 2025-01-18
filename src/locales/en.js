import { videoItems } from "../assets/constants";

const en = {
  translation: {
    navs: {
      home: "Home",
      gallery: "Gallery",
      music: "Music",
      about: "About",
      contact: "Contact",
    },
    headers: {
      home_header: "Vlad Violin",
      gallery_header: "About Me",
      about_header: "About Me",
      contact_header: "Let's keep in touch",

      video: videoItems.reduce((acc, item) => {
        acc = { ...acc, ...{ [item.id]: item.name } };
        return acc;
      }, {}),
    },
    paragraphs: {
      home_paragraph: "It's all about music",
      gallery_paragraph: `Hello, my name is Vlad. I provide professional musical services for a wide range of events, including weddings, birthdays, clubs, bars, proposals, and more. With a distinctive sound and a versatile repertoire, I am dedicated to creating an unforgettable atmosphere for your special occasion.`,
      about_paragraph: `My name is Vlad Medvedev, and I was born in Ukraine. From an early age,
            I developed a passion for music, starting with singing. At the age of
            six, I entered a music school, where I began learning the fundamentals
            of music, including violin, piano, and vocal training. I quickly showed
            great promise, participating in competitions, earning awards, and
            performing at various events. After graduating from music school, I
            continued my studies at a music college. There, I expanded my
            experience, participating in numerous concerts and events while also
            exploring creative projects of my own. In the 2000s, my family
            immigrated to Israel, where I continued my concert and creative work.
            Even during my military service, I made an impact by performing at
            military events as a violinist. After completing my service, I pursued
            studies in sound engineering to become a well-rounded professional in my
            field. Today, I actively perform concerts and work across various
            musical styles. I am a versatile musician with a distinctive sound and
            style that captivates audiences and contributes to my success as an
            artist.`,
      contact_message_paragraph: "send message",
      video: videoItems.reduce((acc, item) => {
        acc = { ...acc, ...{ [item.id]: item.description } };
        return acc;
      }, {}),
    },
  },
};

export default en;
