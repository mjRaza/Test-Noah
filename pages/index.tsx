import Head from "next/head";
import React, { useRef } from "react";
import { Flex,  Input, Text,  } from "@chakra-ui/react";
import DynamicText from "components/DynamicText";

const Home = () => {
  const childFunc = useRef(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    childFunc.current(e.target.value);
  };

  return (
    <Flex height="100vh" direction="column" align="center" justify="center">
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    
      <Flex  wrap="wrap" maxW="40vw" padding="5rem 0" flexDirection="column" justifyContent="center" alignItems="center">
        <Text>Start Typing</Text>
        <DynamicText childFunc={childFunc} />
        <Input w="40vw" h={40} onChange={onChange} placeholder="Enter" variant="filled" mb={3} />
      </Flex>
    </Flex>
  );
};

export default Home;
