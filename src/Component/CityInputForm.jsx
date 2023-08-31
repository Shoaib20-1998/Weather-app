import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  width: 250px;
  margin-right: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;


  &:focus {
    outline: none;
    box-shadow: 0 2px 8px rgba(20, 157, 157, 0.4);
    animation: wowEffect 0.4s ease-in-out;
  }

  @keyframes wowEffect {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const SearchButton = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
 

  &:hover {
    color: rgb(0,128,128)
  }
`;

function CityInputForm({ onCitySubmit }) {
  const [city, setCity] = useState('');

  const handleCitySubmit = (e) => {
    e.preventDefault();
    onCitySubmit(city);
    setCity('');
  };

  return (
    <FormContainer onSubmit={handleCitySubmit}>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <SearchButton type="submit">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </SearchButton>
    </FormContainer>
  );
}

export default CityInputForm;
