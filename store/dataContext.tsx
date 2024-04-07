import { createContext, useState, useEffect, useRef, useContext } from 'react';
import filmsData from './filmsData';
import aboutMeData from './aboutMeData';

const DataContext = createContext({
	filmsData: filmsData,
	aboutMeData: aboutMeData,
});
export function DataContextProvider(props) {
	return (
		<DataContext.Provider
			value={{
				filmsData,
				aboutMeData,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
}

export default DataContext;
