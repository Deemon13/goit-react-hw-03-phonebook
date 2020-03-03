// IMPORT
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// CSS-IN-JS
const SectionWrapper = styled.section`
  margin: 3rem 0;
`;

const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 900;
  margin-bottom: 2rem;
`;
// REACT COMPONENT-FUNCTION
function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}
// PROP-TYPES
Section.propTypes = {
  title: PropTypes.string.isRequired
};
// EXPORT
export default Section;
