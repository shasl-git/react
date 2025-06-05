import Header from './components/Header'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import { useState } from 'react';
import Button from './components/Button/Button';



export default function App() {
  	const [currentPage,setCurrentPage] = useState('firstPage');

	const renderPage = ()=>{
		if (currentPage === 'firstPage') {
            return <FirstSection />;
        } else if (currentPage === 'secondPage') {
            return <SecondSection />;
        } else {
            return <FirstSection />; 
        }
	}


	return (
		<>
			<Header/>
			<main>
				<section>
                    <h3>Navigation</h3>
                    <Button
                        text="First Section"
						isActive = {currentPage == 'firstPage'}
						clickB={()=>{setCurrentPage('firstPage')}}
                    />
                    <Button
                        text="Second Section"
						isActive = {currentPage == 'secondPage'}
						clickB={()=>{setCurrentPage('secondPage')}}
                    />
					{renderPage()}
                </section>
				
			</main>
		</>
  	)
}

