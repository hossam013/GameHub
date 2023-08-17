import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image
        src={logo}
        height="auto"
        width="100px"
        margin="2"
        borderRadius="base"
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
