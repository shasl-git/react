import { data } from "../data"
import TitleDesc from "./TitleDesc"

export default function FirstSection(){
	return(
		<section>
			<h3>Наш подход к обучению</h3>
			<ul>
				{data.map((elem)=>{
				return(
					<TitleDesc key={elem.title} {...elem}/>
				)
				})}
			</ul>
		</section>
	)
}