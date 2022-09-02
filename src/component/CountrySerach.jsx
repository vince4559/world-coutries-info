
import { Text, IconButton, Input, InputGroup, InputRightElement, VStack, Heading } from "@chakra-ui/react";
import {Search2Icon} from '@chakra-ui/icons';
import { useState } from "react";


const CountrySerach = ({getData}) => {
  const [search, setSearch] = useState('');

  return(
    <VStack p={6}>
      <Heading bgGradient={'radial(yellow, blue, green)'}
        bgClip={'text'}  >
        WORLD COUNTRY'S INFORMATION
      </Heading>
      <Text fontFamily={'sans-serif'} fontWeight={'bold'} fontSize={20}
      textShadow={'1px 1px gray'} lineHeight={2}>
        Know Vital Information About Your Favorite Country Around The World
        </Text>
      <InputGroup w={'70%'}>
        <Input type={'text'} 
          value={search}
          onChange={e => setSearch(e.target.value)}
          variant='filled' size={'lg'} color={'blue'}
          placeholder='search your favorite country e.g peru'/>
        <InputRightElement>
          <IconButton icon={<Search2Icon />} 
            p={2} variant='unstyled' 
            color={'blue'} size='lg'
            onClick={() => getData(search)}
             />
        </InputRightElement>
      </InputGroup>
    </VStack>
  )  
};

export default CountrySerach;
