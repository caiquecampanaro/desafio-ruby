// function startTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10)
//     seconds = parseInt(timer % 60, 10)

//     minutes = minutes < 10 ? '0' + minutes : minutes
//     seconds = seconds < 10 ? '0' + seconds : seconds

//     display.textContent = minutes + ':' + seconds

//     if (--timer < 0) {
//       document.getElementById('solicitarLivroForm').reset()
//       document.getElementById('solicitarLivroForm').classList.add('disabled')
//       document.getElementById('timer').textContent = 'Tempo esgotado!'
//     }
//   }, 1000)
// }

// window.onload = function () {

//   document
//   .querySelector('#form-control')
//   .addEventListener('submit', function (event) {
//     event.preventDefault() // Previne o envio do formulário

//     // Recupera os valores dos campos do formulário
//     var tipoVinculo = document.querySelector('#tipo-vinculo').value
//     var titulo = document.querySelector('#titulo').value
//     var autor = document.querySelector('#autor').value
//     var edicao = document.querySelector('#edicao').value
//     var issn = document.querySelector('#issn').value
//     var anoPublicacao = document.querySelector('#ano-publicacao').value
//     var editora = document.querySelector('#editora').value

//     // Cria uma nova linha na tabela de solicitação com os valores dos campos do formulário
//     var tableBody = document.querySelector('#tabela-solicitacao')
//     var newRow = tableBody.insertRow(-1)
//     var newCellTipoVinculo = newRow.insertCell(0)
//     var newCellTitulo = newRow.insertCell(1)
//     var newCellAutor = newRow.insertCell(2)
//     var newCellEdicao = newRow.insertCell(3)
//     var newCellIssn = newRow.insertCell(4)
//     var newCellAnoPublicacao = newRow.insertCell(5)
//     var newCellEditora = newRow.insertCell(6)
//     newCellTipoVinculo.innerHTML = tipoVinculo
//     newCellTitulo.innerHTML = titulo
//     newCellAutor.innerHTML = autor
//     newCellEdicao.innerHTML = edicao
//     newCellIssn.innerHTML = issn
//     newCellAnoPublicacao.innerHTML = anoPublicacao
//     newCellEditora.innerHTML = editora

//     // Limpa os campos do formulário
//     document.querySelector('#form-control').reset()
//   })

//   var duration = 60 * 60
//   var display = document.querySelector('#timer')
//   startTimer(duration, display)

// }
