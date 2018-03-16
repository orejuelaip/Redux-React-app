// console.log("Hola que hacen?");
import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData($form)
	const title = data.get('title');
	console.warn(title);
}

 const initialState = [
 	{
 		"title": "Despacito",
 	},
 	{
 		"title": "One More thing",
 	},
 	{
 		"title": "Echame la culpa",
 	}
 ]

const store = createStore(
	() => {},
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)