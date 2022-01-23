import Qs from "../faq/Qs";

const data = [
  {
    q: "Wait, passes are required?",
    a: (
      <>
        <p>
          To ride a bike, passes are required on many trails around Madison,
          including (but not limited to):
        </p>
        <ol>
          <li>Capital City Trail (generally when outside the Beltline)</li>
          <li>Military Ridge State Trail</li>
          <li>Badger State Trail</li>
          <li>Glacial Drumlin State Trail</li>
        </ol>
        <p>
          Trail passes are <strong>NOT</strong> required on the following paths:
        </p>
        <ol>
          <li>Many bike paths inside the City of Madison</li>
          <li>Southwest Path</li>
          <li>Ice Age Junction Path</li>
          <li>Lower Yahara River Trail</li>
          <li>US Highway 12 Bike Path</li>
        </ol>
      </>
    ),
  },
  {
    q: "What's the catch?",
    a: 'You only qualify for a free pass if you ride primarily to/from "work, school, shopping or other necessary activities." (See next question for more.)',
  },
  {
    q: 'What\'s a "necessary activity"',
    a: "It's subjective. Only you know what's a \"necessary activity\" in your life.",
  },
  {
    q: "Why are they so specific about the Capital City Trail in their wording on the form? Don't people use other trails (like Military Ridge) for necessary activities?",
    a: 'The wording in the form is terrible. If you use state trails primarily for "work, school, shopping or other necessary activities," you probably qualify.',
  },
  {
    q: "How do they verify I use the path primarily for transportation?",
    a: "You agreed on the form.",
  },
  {
    q: "Is the free pass restricted to the Capital City State Trail?",
    a: "No. It is a full-fledged pass, valid on all Wisconsin State Trails that bicyclists are allowed with passes.",
  },
  {
    q: "I do not qualify for a free pass. How do I purchase a pass?",
    a: (
      <>
        You can visit the{" "}
        <a
          href="https://www.reservedane.com/permits.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dane County Reservation and Permit system
        </a>{" "}
        to buy an annual pass. You can also buy a monthly pass for $5 at self
        service stations.
      </>
    ),
  },
  {
    q: "Who are you? Why did you build this site?",
    a: "I'm just a guy that rides a bike for transportation in and around the City of Madison. I built this site because I think charging people to ride a bike is fucking dumb.",
  },
  {
    q: "Does this site collect any information?",
    a: (
      <>
        No. Nothing is even transmitted to the server. I see nothing. But if you
        don't trust me, you can fill out + submit the form yourself by{" "}
        <a
          href="https://parks-lwrd.countyofdane.com/park/Capital-City-State-Trail"
          target="_blank"
          rel="noopener noreferrer"
        >
          visiting the Dane County website
        </a>
        .
      </>
    ),
  },
  {
    q: "Is this legit?",
    a: "Yes. But this website is not affiliated with nor endorsed by any government agency.",
  },
  {
    q: "Do kids need a pass?",
    a: "No. Kids aged 15 and younger do not need a pass to ride on state trails.",
  },
  {
    q: "Do they actually check for passes on the paths?",
    a: "Yes. The DNR has trolls that will boot you off the paths if you do not have a pass.",
  },
  {
    q: "I want a free pass, but I don't want to use this site. How do I get a pass?",
    a: (
      <>
        You can{" "}
        <a
          href="https://parks-lwrd.countyofdane.com/park/Capital-City-State-Trail"
          target="_blank"
          rel="noopener noreferrer"
        >
          visit the Dane County website
        </a>
        , and download the "Statement Form" to apply. You do not need to use
        this website. I just build this site to make applying more easier and
        more accessible to more people.
      </>
    ),
  },
  {
    q: "This crap is dumb, just let people ride bikes.",
    a: "Agreed.",
  },
  {
    q: "Isn't charging people to ride bikes, and then building a whole form to get a free pass, of which you need an address to get the pass sent to you, and a computer to fill out, the time to do it, a printer/scanner, and the knowhow to do it, an example of systemic inequity and exclusion?",
    a: "Why yes, yes it is. But I don't make the rules.",
  },
];

export default function Faq() {
  return (
    <>
      <h3>Frequently Asked Questions</h3>
      <Qs data={data} />
    </>
  );
}
