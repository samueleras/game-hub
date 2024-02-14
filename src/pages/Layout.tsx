import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Box p="1rem">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
