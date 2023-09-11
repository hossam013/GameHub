import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../gameQuaryStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const navigate = useNavigate();

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
      onChange={() => {
        if (ref.current?.value === "") setSearchText("");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
