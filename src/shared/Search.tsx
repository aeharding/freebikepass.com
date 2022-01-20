import { css } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useDebounce } from "react-use";

const Label = styled.label`
  position: relative;

  font-size: 1rem;
`;

// Reset + normalize search input browser default styles
const searchInputReset = css`
  margin: 0;
  border-radius: 2em;
  background: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  appearance: none;
  outline: 0;
  max-width: 14em;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
`;

// Search box
const Input = styled.input`
  ${searchInputReset}

  padding: 0.5em 1em 0.5em 2.25em;
  height: 2.5rem;
  border: 1px solid var(--rim);

  &:focus {
    border: 1px solid white;
  }

  &::placeholder {
    color: var(--soft-text);
    opacity: 1;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 0.8em;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.2em;
`;

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * Search input box with built in debounce
 */
export default function Search({ value, onChange }: SearchProps) {
  const input = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useHotkeys("/", (e) => {
    e.preventDefault();

    input.current?.focus();
  });

  useDebounce(
    () => {
      if (initialRender) {
        setInitialRender(false);
        return;
      }

      onChange(inputValue);
    },
    250,
    [inputValue]
  );

  return (
    <Label>
      <SearchIcon icon={faSearch} />
      <Input
        ref={input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        type="search"
        autoComplete="off"
        autoCorrect="off"
      />
    </Label>
  );
}
