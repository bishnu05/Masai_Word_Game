import React from "react";
import { Box, Button, Grid } from "@chakra-ui/react";

const KeyBoard = ({ virtualkey, handleCorrect }) => {
  return (
    <Box bg="teal" position="fixed" w="100%" bottom="0"
    p="2" mb="30px"
    >
      <Grid templateColumns="repeat(12, 1fr)" gap="1">
        {virtualkey?.length &&
          virtualkey.map((el, index) => (
            <Button bg="black" color={"teal"} _hover={{
               bg:"green", color:"white"
              }}
              key={index}
              onClick={(e) => {
                handleCorrect(e.target.innerText);
              }}
            >
              {el}
            </Button>
          ))}
      </Grid>
    </Box>
  );
};

export default KeyBoard;
