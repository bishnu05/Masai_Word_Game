import { Box, Heading, Text,Button } from "@chakra-ui/react";
import KeyBoard from "./../Components/KeyBoard";
import { getWord, ScoreUpdate } from "../Redux/action.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";

import { useNavigate } from 'react-router-dom';
const Playzone = () => {
  const { score, words } = useSelector((state) => state);
  const [time, setTime] = useState(0);
  const [limit, setLimit] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const currectWord = useRef(0);
  const virtualkey = [
    "~",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "delete",
    "tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "caps",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "enter",
    "shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "<",
    ">",
    "shift",
    "control",
    "option",
    "alt",
    "space",
    "alt",
    "option",
  ];
  const handleCorrect = (word) => {
    console.log(word, words[currectWord.current]);
    if (word.toLowerCase() === words[currectWord.current++].toLowerCase()) {
      dispatch(ScoreUpdate(score + 1));
    } else {
      dispatch(ScoreUpdate(score - 1));
    }
  };

  useEffect(() => {
    dispatch(getWord());
  }, []);
  var interval;

  interval = setInterval(function () {
    setTime(time + 1);
    clearInterval(interval);
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
      setLimit(true);
      
    }, 30000);
  }, []);

  return (
    <>
      {limit ? (
        <Box>
          <Heading>Total Score: {score}</Heading>
          <Button
          onClick={()=>navigate('/dashboard')}
          >Dashboard</Button>
        </Box>
      ) : (
        <Box>
          <Heading>Score : {score}</Heading>
          <Text>{time}</Text>
          <Box bg="grey" w="50%" m="auto" mt="5">
            <Text p="5" fontSize="3xl" fontWeight="bolder">
              {words}
            </Text>
          </Box>
          <Box>
            <KeyBoard virtualkey={virtualkey} handleCorrect={handleCorrect} />
          </Box>
        </Box>
      )}
    </>
  );
};
export default Playzone;
