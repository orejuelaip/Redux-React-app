// console.log("Hola que hacen?");
import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData($form)
	const title = data.get('title');
	console.warn(title);
	store.dispatch({
		type: 'ADD_SONG',
		payload: {
			title
		}
	})
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
	(state) => state,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const $container = document.getElementById('playList');
const playlist = store.getState();
playlist.forEach( (item) => {
	const template = document.createElement('p');
	template.textContent = item.title;
	$container.appendChild(template)
})
console.log(store.getState());