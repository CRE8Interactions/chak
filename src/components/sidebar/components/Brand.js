import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import { Image } from '@chakra-ui/react'
import logo from "components/logos/creator-logo.svg"

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Image src={logo} alt='Creator Logo' h='26px' w='175px' my='15px' />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
