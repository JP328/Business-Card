const linksSocialMedia = {
  github: 'JP328',
  youtube: '/channel/UCEUPn1hAeqfNdFPMfT-HO0A',
  instagram: 'joaopedro_328',
  facebook: '/joaopedrodamaiamoura.moura/',
  linkedin: '/in/joão-pedro-da-maia-511242205/'
}

function changeSocialMediaLinks() {
  /* usando o Id é possivel escrever a seguinte linha de código: 'IdName.comando-que-manipule-a-DOM'
Quando fazemos isso o javascript já entende que o "alguma-coisa" é um Id e busca por ele no código.

document.getElementById('userName').textContent = 'Sonic'

  userName.textContent = 'Josh' 
  */
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = `${data.name}`
      bio.textContent = `${data.bio}`
    })
}

getGitHubProfileInfos()
