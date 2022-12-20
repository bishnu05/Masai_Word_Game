import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { getAllUser } from "../Redux/action.js";
  
  import { useDispatch, useSelector } from "react-redux";
  const Dashboard = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state);
    useEffect(() => {
      dispatch(getAllUser());
    }, []);
     console.log(users,"users")
    return (
      <>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Name</Th>
                <Th>Level</Th>
                <Th>Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users?.length &&
                users.map((el, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{el.name}</Td>
                    <Td>{el.label}</Td>
                    <Td>{el.score}</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </>
    );
  };
  export default Dashboard;
  