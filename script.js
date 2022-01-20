function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fAno = document.getElementById('txtano')
  let res = document.getElementById('res')

  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert('Verifique se todos os campos foram preenchidos!')
  } else {
    let fSex = document.getElementsByName('radsex')
    let idade = ano - Number(fAno.value)
    let gênero = ''
    let img = document.getElementById('foto')

    if (fSex[0].checked) {
      gênero = 'homem'
      if (idade >= 0 && idade <= 10) {
        img.setAttribute('src', 'foto-bebe-m.png')
      } else if (idade > 10 && idade <= 18) {
        img.setAttribute('src', 'foto-jovem-m.png')
      } else if (idade > 18 && idade <= 50) {
        img.setAttribute('src', 'foto-adulto-m.png')
      } else {
        img.setAttribute('src', 'foto-idoso-m.png')
      }
    } else if (fSex[1].checked) {
      gênero = 'mulher'
      if (idade >= 0 && idade <= 10) {
        img.setAttribute('src', 'foto-bebe-f.png')
      } else if (idade > 10 && idade <= 18) {
        img.setAttribute('src', 'foto-jovem-f.png')
      } else if (idade > 18 && idade <= 50) {
        img.setAttribute('src', 'foto-adulto-f.png')
      } else {
        img.setAttribute('src', 'foto-idoso-f.png.')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos um(a) ${gênero} de ${idade} anos.`
  }
}
