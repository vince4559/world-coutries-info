
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const CountryCard = ({data}) => {
  return (
    <VStack p={5} spacing='3' bg={'gray.100'} border={'2px solid green'} m={5} borderRadius={'3xl'} >
      {Object.values(data)?.map(country => (
        <VStack key={country.area}>
          <Heading color={'blue.700'} textAlign={'center'}>{country?.name?.official}</Heading>

          <Text fontSize={18} fontWeight={'semibold'}>{country?.flag}</Text>
          
          <Box>
            <Image w={200} p={3} src={country?.flags?.svg} />
          </Box>

          <Text fontSize={18} fontWeight={'semibold'}><span>Common Name: </span>{country?.name?.common}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Alt-spellings: </span>{country?.altSpellings?.join(', ')}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Independet: </span>{String(country?.independent)}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Status: </span>{country?.status}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Unmember: </span>{String(country?.unMember)}</Text>

          <Box>
            <Text textAlign={'center'}>Coat of arm</Text>
            <Image w={200} p={3} src={country?.coatOfArms?.svg} />
          </Box>

          <Text fontSize={18} fontWeight={'semibold'}><span>Capital City: </span>{country?.capital}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Currency: </span>{Object.values(country?.currencies).map(value => (
            <span>{value.name}  {value.symbol}</span> 
          ))}</Text>

          
          <Text fontSize={18} fontWeight={'semibold'}><span>Languages: </span>{Object.values(country?.languages).map(lang => lang).join(', ')}
          </Text>
            
          <Text fontSize={18} fontWeight={'semibold'}><span>Border: </span>{country?.borders?.join(', ')}</Text>
          
          <Text fontSize={18} fontWeight={'semibold'}><span>Population: </span>{country?.population}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Area: </span>{country?.area}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Region: </span>{country?.region}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Sub-Region: </span>{country?.subregion}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Continent: </span>{country?.continents}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Time-Zone: </span>{country?.timezones}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Car-Sign: </span>{country?.car?.signs}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Car-Side: </span>{country?.car?.side}</Text>

          <Text fontSize={18} fontWeight={'semibold'}><span>Start of the week: </span>{country?.startOfWeek}</Text>

          
        </VStack>
      ))}
    </VStack>
  )
};

export default CountryCard;
