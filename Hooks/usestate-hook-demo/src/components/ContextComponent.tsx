import React, { useContext, createContext } from 'react';
const ThemeContext = createContext('light');
const ThemedComponent: React.FC = () => {
const theme = useContext(ThemeContext);
return <div>The current theme is {theme}</div>;
};
const App: React.FC = () => (
<ThemeContext.Provider value="dark">
<ThemedComponent />
</ThemeContext.Provider>
);
export default App