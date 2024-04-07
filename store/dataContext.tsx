import { createContext, useState, useEffect, useRef, useContext } from 'react';
import filmsData from './filmsData';
import aboutData from './aboutData';

const DataContext = createContext({
	filmsData: filmsData,
	aboutData: aboutData,
});
export function DataContextProvider(props) {
	return (
		<DataContext.Provider
			value={{
				filmsData,
				aboutData,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
}

export default DataContext;
