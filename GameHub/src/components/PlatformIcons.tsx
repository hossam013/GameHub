import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms?.map((platform) => (
        <Icon as={iconMap[platform?.slug]} color="gray.500" key={platform?.id}>
          {platform?.name}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
