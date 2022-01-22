import Tweet, { ITweet } from "./Tweet";

const tweets: ITweet[] = [
  {
    body: "True level of service for cities should not be measured in number of cars per hour during peak times but whether a child can safely bike by themselves to school. 🏙 🚲 👧🏽🧒🏿👧🏼🧒🏻",
    user: {
      name: "Dr. Natalia Barbour",
      handle: "natalia_barbour",
      avatar:
        "https://pbs.twimg.com/profile_images/1403690412536107008/y5ocVyXs_x96.jpg",
    },
    url: "https://twitter.com/bikejc/status/1474255744832843799",
    date: "5:44 AM · Dec 23, 2021",
  },
  {
    body: "You ever go outside and it just really hit you how everything is covered in fucking cars",
    user: {
      name: "Jordan Burns",
      handle: "WalkableCityBoy",
      avatar:
        "https://pbs.twimg.com/profile_images/1121207213048025088/rtaoECXI_x96.jpg",
    },
    url: "https://twitter.com/walkablecityboy/status/1371141945041457156",
    date: "11:51 AM · Mar 14, 2021",
  },
  {
    body: "It's weird so many people think parking is a pain in the ass, traffic is a pain in the ass, paying for gas/insurance/registration is a pain in the ass, but don't put it together that owning a car is a pain in the ass",
    user: {
      name: "Toby Muresianu",
      handle: "tobyhardtospell",
      avatar:
        "https://pbs.twimg.com/profile_images/1002452918472093696/jcddvEVe_x96.jpg",
    },
    url: "https://twitter.com/tobyhardtospell/status/1476429643561402369",
    date: "11:47 PM · Dec 29, 2021",
  },
  {
    body: "What makes biking dangerous is all the cars. What makes the bus so slow is all the cars. What makes it so everything is too far away to walk is all the space we have to reserve for the cars.",
    user: {
      name: "Adam Kotsko",
      handle: "adamkotsko",
      avatar:
        "https://pbs.twimg.com/profile_images/1461772339289464836/H-Rg558v_x96.jpg",
    },
    url: "https://twitter.com/adamkotsko/status/1402998838554628103",
    date: "9:39 AM · Jun 10, 2021",
  },
];

export default function Tweets() {
  return (
    <>
      {tweets.map((tweet, index) => (
        <Tweet {...tweet} key={index} />
      ))}
    </>
  );
}
