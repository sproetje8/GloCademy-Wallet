import React from 'react';
import SectionTotal from '../SectionTotal/SectionTotal';
import SectionHistory from '../SectionHistory/SectionHistory';
import SectionOperation from '../SectionOperation/SectionOperation';

const Main = () => {
	return (
		<main>
			<div className="container">
				<SectionTotal />
				<SectionHistory />
				<SectionOperation />
			</div>
		</main>
	);
};

export default Main;
