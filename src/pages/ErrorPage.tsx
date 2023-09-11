import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={3}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page is not exist"
            : "Unexpected Error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
