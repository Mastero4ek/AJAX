'use strict'

const getData = (url) => {
	return fetch(url).then(response => response.json())
}

// const sendData = (url, data) => {
// 	return fetch(url, {
// 		method: 'POST',
// 		body: data,
// 		headers: {
// 			'Content-type': 'application/json; chrset=UTF-8',
// 		},
// 	}).then(response => response.json())
// }

// getData('db.json').then(data => sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data)))



let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts')
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

getData('db.json').then(data => xhr.send(JSON.stringify(data)))