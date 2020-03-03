// IMPORT
import React from "react";
import styled from "styled-components";
// CSS-IN-JS
const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
`;
// REACT COMPONENT
const Layout = ({ children }) => <Container>{children}</Container>;
// EXPORT
export default Layout;
