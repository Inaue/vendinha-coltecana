let url = 'db_url'

const sendData = (nomeDiv) =>
{
	let campos
	let obj = {}

	obj['tabela'] = nomeDiv
	obj['dados'] = {}

	campos = $('div#' + nomeDiv + ' input').toArray().map(input => input.id)

	campos.forEach((campo) => obj['dados'][campo] = $('div#' + nomeDiv + ' input#' + campo).val())

	$.post(url, JSON.stringify(obj), (res) => console.log('Resposta: ' + res))
}

const retrieveData = (nomeDiv) =>
{
	let campos
	let obj = {}

	obj['tabela'] = nomeDiv
	obj['chave'] = {}

	campos = $('div#pesquisa-' + nomeDiv + ' input').toArray().map(input => input.id)

	campos.forEach((campo) => obj['chave'][campo] = $('div#pesquisa-' + nomeDiv + ' input#' + campo).val())

	$.get(url, JSON.stringify(obj), (res) => console.log('Resposta: ' + res))
}

$('div#vendedor button').on('click', () => sendData('vendedor'))
$('div#produto button').on('click', () => sendData('produto'))
$('div#registro button').on('click', () => sendData('registro'))
$('div#pesquisa-vendedor button').on('click', () => retrieveData('vendedor'))
$('div#pesquisa-produto button').on('click', () => retrieveData('produto'))
$('div#pesquisa-registro button').on('click', () => retrieveData('registro'))
