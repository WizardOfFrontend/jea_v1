import React from 'react'
// import the context
import UserContextProvider from './src/context/UserContext';

export const wrapRootElement = ({ element }) => (
  <UserContextProvider>
    {element}
  </UserContextProvider>
)

