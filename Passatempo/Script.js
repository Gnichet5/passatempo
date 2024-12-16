let movies = [
    {
        link: 'https://www.indiewire.com/wp-content/uploads/2017/02/10wrp4zrhzcnjka7dklcxz6ebhd.jpg',
        ans: 'logan',
        dica: 'Qual era o nome real do Wolverine mesmo?'
    },
    {
        link: 'https://www.einerd.com.br/wp-content/uploads/2021/10/a-force-vingadores-ultimato-heroinas-mulheres-890x466.jpg',
        ans: 'ultivivo',
        dica: 'Morte ficou pesado, tentei outra coisa'
    },
    {
        link: 'https://cdn.britannica.com/88/200588-050-3F16ED94/Jim-Carrey-How-the-Grinch-Stole-Christmas.jpg',
        ans: 'grinch',
        dica: 'Ele odeia o natal'
    },
    {
        link: 'https://www.dci.com.br/wp-content/uploads/2023/01/vingadores-guerra-infinita.jpg',
        ans: 'guerra finita',
        dica: 'orçamento ficou caro e a guerra tem que acabar agora'
    },
    {
        link: 'https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg',
        ans: 'avatar',
        dica: 'Só o nome da saga, também tem um anime'
    },
    {
        link: 'https://assets.mubicdn.net/images/film/3397/image-w1280.jpg?1546146009',
        ans: 'indiana joão',
        dica: 'Jones é nome de alemão, aqui a gente fala português'
    },
    {
        link: 'https://imageio.forbes.com/specials-images/imageserve/63056b6d029a8cffac053a5f/Robert-Pattinson-stars-in--The-Batman-/960x0.jpg?format=jpg&width=960',
        ans: 'batman',
        dica: 'Só o do herói, homem morcego'
    },
    {
        link: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/02/7-Toy-Story-3-2-078930c.jpg',
        ans: 'toy story',
        dica: 'Só o nome da saga, história de brinquedo'
        
    },

    {
        link: 'https://imgs.search.brave.com/MLYegSloQfjWn68I0RJA6anXEfzf5RBwpE-9VG2f8fY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvZW50/cmV0ZW5pbWVudG8v/NzEvMjAyMi8wOC8w/OS9lbWlsaWEtY2xh/cmtlLWUtc2FtLWNh/Zmxpbi1lbS1jZW5h/LWRlLWNvbW8tZXUt/ZXJhLWFudGVzLWRl/LXZvY2UtMTY2MDA0/NzE3MDc2Nl92Ml85/MDB4NTA2LmpwZw',
        ans: 'como eu era depois de você',
        dica: 'Não é antes'
        
    },

    {
        link: 'https://imgs.search.brave.com/wf4j8M0BsO0DpSigNDLwInoHKoW0MU1RRfqbHXFwKbg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9tYXJsZXl5/eW9fYWZmMjJmZjcu/anBlZz9yZWdpb249/MCwwLDE0NDAsODEw',
        ans: 'marley e eu',
        dica: 'Marley e você, não no caso é...'
        
    },

    {
        link: 'https://imgs.search.brave.com/YGz8B0ow8c9tTSpL-ZaT9mQ4Ds-b0oIPCPI-7tvPetQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTM2/OTUwMTQ5L3Bob3Rv/L2thcmF0ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TDct/T2NPWUNiN0F4QmlX/SkMtcTdKS2JzQWNN/YUJPaTQya0dFNnNt/SzRTOD0',
        ans: 'karate criança',
        dica: 'Tira a casaca em português'
        
    },

    

    {
        link: 'https://imgs.search.brave.com/KFFmlEuV3oG0JFMst0NYL_6u4NhliNd8s4d-40tAEW0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnB1cmVicmVh/ay5jb20uYnIvYXJ0/aWNsZXMvMC8xMC8z/MC9ALzU4MzItYS01/ODB4MC0xLmpwZw',
        ans: 'norbit',
        dica: 'Lembra que o nome não é rasputia'
    },
    
    
];

const moviesBack = [...movies];
const submit = document.querySelector('#send');
const dica = document.querySelector('#dica');

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const value = document.querySelector('#ans').value.toLowerCase();
    const tag = document.querySelector('img');
    let link = tag.src
        let img = movies.filter(elem => {
            return elem.link == link
        })
    ;
    if (img[0].ans == value) {
        let delIdx = movies.findIndex((obj) => obj.ans === value)
        movies.splice(delIdx, 1)
        let index = Math.floor(Math.random() * movies.length);
        if (movies.length > 0) {
            tag.src = `${movies[`${index}`].link}`
        }
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML) + 1}`
        console.log(movies)
        Swal.fire({
            title: 'Resposta Correta!',
            text: 'Parabéns minha linda!',
            icon: 'success',
            confirmButtonText: 'Continuar',
            // color: '#ccc'
          })
    } else {
        Swal.fire({
            title: 'Resposta Incorreta!',
            text: 'Vai voltar para o inicio pois a vida não é um morango',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
        movies = [...moviesBack]
        let index = Math.floor(Math.random() * movies.length);
        tag.src = `${movies[`${index}`].link}`
        document.querySelector('#ans').value = ''
        document.querySelector('#contagem').innerHTML = '0'
    };
    if (movies.length == 0) {
        const pFinal = document.querySelector('#final')
        document.querySelector('#contagem').innerHTML = `${Number(document.querySelector('#contagem').innerHTML)}`
        tag.src = ''
        tag.alt = ''
        pFinal.innerHTML = 'PARABÉNS, MEU BEM!'
    };
}
);

function showDica() {
    let link = document.querySelector('img').src;
        let img = movies.filter(elem => {
            return elem.link == link
        })
    let dica = img[0].dica;
    Swal.fire({
        title: 'Dica',
        text: dica,
        confirmButtonText: 'Continuar'
    }) 
}

function api() {
    fetch("https://api.nationalize.io/?name=guilherme")
      .then((response) => response.json())
      .then((data) => console.log(data));
}

setTimeout(api, 500);