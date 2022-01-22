import { useState } from "react";
import Q from "./Q";

type Data = { q: string; a: React.ReactNode }[];

interface QsProps {
  data: Data;
}

export default function Qs({ data }: QsProps) {
  const [selectedQ, setSelectedQ] = useState("");

  return (
    <>
      {data.map(({ q, a }) => (
        <Q
          key={q}
          question={q}
          open={selectedQ === q}
          onClick={() => (selectedQ === q ? setSelectedQ("") : setSelectedQ(q))}
        >
          {a}
        </Q>
      ))}
    </>
  );
}
