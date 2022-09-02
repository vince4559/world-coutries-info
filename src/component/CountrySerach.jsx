
import { Text, IconButton, Input, InputGroup, InputRightElement, VStack, Heading } from "@chakra-ui/react";
import {Search2Icon} from '@chakra-ui/icons';
import { useState } from "react";


const CountrySerach = ({getData}) => {
  const [search, setSearch] = useState('');

  return(
    <VStack p={6}>
      <Heading bgGradient={'radial(yellow, blue, green)'}
        textAlign={'center'}
        size={['md', 'xl', '3xl']}
        bgClip={'text'}  >
        WORLD COUNTRY'S INFORMATION
      </Heading>
      <Text fontFamily={'sans-serif'} textAlign={'center'}  
        fontWeight={'bold'} 
        textShadow={'1px 1px gray'} 
        fontSize={['12px', 'lg','xl' ]} >
         Key Information About Your Favorite Countries Around The World
        </Text>
      <InputGroup w={['100%', '80%' ]}>
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
