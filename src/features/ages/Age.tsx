import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Unknown from "../../shared/Unknown";
import { getAge, agesByName } from "./ageSlice";

interface AgeProps {
  name: string;
}

/**
 * Dispatch a request for an age to the store if not found
 * Otherwise, render to the user
 */
export default function Age({
  name: fullName,
}: AgeProps): React.ReactElement | null {
  const firstName = getFirstName(fullName);
  const age = useAppSelector(agesByName)[firstName];
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!firstName) return;

    dispatch(getAge(firstName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstName]);

  if (typeof age === "number") {
    return <>{age}</>;
  }

  // Agify could not estimate age, or the character has no name
  if (age === null || age === "failed" || !firstName) {
    return <Unknown />;
  }

  return null;
}

export function getFirstName(fullName: string): string {
  return fullName.split(" ")[0];
}
