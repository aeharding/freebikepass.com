import { Link } from "react-router-dom";
import Qs from "../faq/Qs";

const data = [
  {
    q: "What's the catch?",
    a: 'You only qualify for a free pass if you ride primarily to/from "work, school, shopping or other necessary activities." (See next question for more.)',
  },
  {
    q: 'What\'s a "necessary activity"',
    a: 'Only you know what is a "necessary activity" in your life. (See next question for more.)',
  },
  {
    q: "My family and I ride bikes primarily for recreation, however we don't have the money for four annual passes. What options do we have?",
    a: (
      <>
        <a
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6121520/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Many studies
        </a>{" "}
        find spending time outside, at parks, crucial for health and wellness.
        If you ride to a park for the health and wellness of your family, do you
        consider time at that park a "necessary activity?" If so, you and your
        family may qualify for this subsidized pass.
        <br />
        <br />
        And remember, only 51% of your trips must qualify in order to get a free
        pass.
      </>
    ),
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
    q: "Who are you? Why did you build this site?",
    a: "I'm just a guy that rides a bike for transportation in and around the City of Madison. I built this site because I think charging people to ride a bike is fucking dumb.",
  },
  {
    q: "Does this site collect any information?",
    a: (
      <>
        No. Nothing is even transmitted to the server. I see nothing. But if
        privacy is a concern, you can fill out + submit the form yourself by
        viewing <Link to="/privacy">the Privacy Policy</Link>.
      </>
    ),
  },
  {
    q: "Is this legit?",
    a: "Yes. But this website is not affiliated or associated with any government agency.",
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
          visit the Dane County website here
        </a>
        , and download the "Statement Form" to apply. You do not need to use
        this website. I just build this site to make applying more easier and
        more accessible to more people.
      </>
    ),
  },
  {
    q: "This whole theatrical performance is dumb, just let people ride bikes.",
    a: "Agreed.",
  },
  {
    q: "Isn't charging people to ride bikes, and then building a whole form to get a free pass, of which you need an address to get the pass sent to you, and a computer to fill out, the time to do it, and the knowhow to do it, an example of systemic inequity and exclusion?",
    a: "Why yes, yes it is. But I don't make the rules.",
  },
];

export default function Faq() {
  return <Qs data={data} />;
}
