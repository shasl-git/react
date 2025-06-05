import { differences } from "../data"
import Button from "./Button/Button"
import { useState } from 'react'

export default function SecondSection(){
	const [znachenie,setZnazenie] = useState('call')

	function handle(param){
    	setZnazenie(param)
	}
	return(
		<section>
			<h3>чем мы отличаемся от других</h3>  
			<Button 
				text ='Подход'
				isActive = {znachenie =='way'}
				clickB={()=>{handle('way')}}
			/>

			<Button 
				text ='Доступность' 
				isActive = {znachenie =='easy'}
				clickB={()=>{handle('easy')}}
			/>

			<Button 
				text ='Задачность'
				isActive = {znachenie =='program'}
				clickB={()=>{handle('program')}}
			/>
			<p>{differences[znachenie]}</p>
		</section>
	)
}