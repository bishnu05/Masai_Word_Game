import {
    Flex,
    Box,
    FormControl,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Select,
  } from "@chakra-ui/react";
  
  import { useNavigate } from "react-router-dom";
  import { useDispatch } from "react-redux";
  import { useState } from "react";
  
  export default function Home() {
    const [form, setForm] = useState({});
    const dispatch = useDispatch();
  
    const navigate = useNavigate();
    const handleForm = (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };
    const handleGet = () => {
      navigate("/playzone")
    };
  
    return (
      <>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Masai Word Game</Heading>
            </Stack>
            <Box
              w="350px"
              maxW="450px"
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={handleForm}
                  />
                </FormControl>
  
                <Select
                  placeholder="Select Diffculty"
                  name="difficulty"
                  onChange={handleForm}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </Select>
                <Stack spacing={10}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleGet}
                  >
                    Start
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </>
    );
  }
  