import Header from './components/Header'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import { useState } from 'react';
import Button from './components/Button/Button';



export default function App() {
  	const [currentPage, setCurrentPage] = useState('first');

	const renderPage = () => {
        if (currentPage === 'first') {
            return <FirstSection />;
        } else if (currentPage === 'second') {
            return <SecondSection />;
        } else {
            return <FirstSection />;
        }
    };
	return (
		<>
			<Header/>
			<main>
				<section>
                    <h3>Navigation</h3>
                    <Button
                        text="First Section"
                        isActive={currentPage === 'first'}
                        clickB={() => setCurrentPage('first')}
                    />
                    <Button
                        text="Second Section"
                        isActive={currentPage === 'second'}
                        clickB={() => setCurrentPage('second')}
                    />
                    {renderPage()}
                </section>
				
			</main>
		</>
  	)
}

