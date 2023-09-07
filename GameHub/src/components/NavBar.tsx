import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack paddingTop={2}>
      <Image
        src={logo}
        height="auto"
        width="100px"
        margin="2"
        borderRadius="base"
        marginLeft={3}
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
