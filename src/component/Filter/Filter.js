import React from "react";
import styled from "styled-components";
const Input = styled.input`
  font-size: 1.8rem;
  width: 25rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
`;
export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <Input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
