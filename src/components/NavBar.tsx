import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../gameQuaryStore";

const NavBar = () => {
  const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
  return (
    <HStack paddingTop={2}>
      <Link to={"/"} onClick={() => resetGameQuery()}>
        <Image
          src={logo}
          height="auto"
          width="100px"
          margin="2"
          borderRadius="base"
          marginLeft={1}
          objectFit="cover"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
