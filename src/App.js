import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import CountryCard from "./component/CountryCard";
import CountrySerach from "./component/CountrySerach";
import axios from "axios";
// import { useFetcher } from "./component/useFetcher";
import { useState, useEffect } from "react";

function App() {
  // const {data, error, isLoading} = useFetcher();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://restcountries.com/v3.1/name';
  const getData = async (name) => {
    try{
      const res = await axios.get(`${url}/${name}`);
      setData(res?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error?.res && 'Data Not Found');
      setIsLoading(false);
    }
  }

  
  useEffect(() => {
    getData('peru')
  },[])

  return (
    <Box p={5}>
      <CountrySerach getData={getData} />
      { isLoading? (<VStack> <Spinner color={'red'} /> <Text fontSize={20} textColor={'red'} textAlign={'center'}> Data Loading</Text> </VStack>)
      : error ? ( error && <Text>Data Not Found</Text>)
      : <CountryCard data={data} />
      }
    </Box>
  );
}

export default App;
