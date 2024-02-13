import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavigationBar />
      <Box paddingStart="1rem">
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
