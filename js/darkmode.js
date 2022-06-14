//darkMode
document.getElementById('id-sun').onclick = function(){
    let body = document.querySelector("body")
        body.style.backgroundColor = "#ffffff"
    document.getElementById('page').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
    }

    document.getElementById('id-moon').onclick = function(){
        let body = document.querySelector("body")
            body.style.backgroundColor = "#353535"
        document.getElementById('page').classList.add('dark-mode')
        document.getElementById('id-sun').classList.remove('active')
        this.classList.add('active')
        }