
document.getElementById('btn-user').addEventListener('click', userFetch);

function userFetch() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            let user = data.results[0];
            userDisplay(user);
        })
        .catch(error => console.error('error', error));
}

function userDisplay(user) {
    let userDataDiv = document.getElementById('user-data');
    userDataDiv.innerHTML = 
    `<div class="user-info-details">
            <p><span>Namn</span> : ${user.name.first} ${user.name.last}</p>
            <p><span>Email:</span> ${user.email}</p>
            <p><span>Telefon:</span> ${user.phone}</p>
            <p><span>Land:</span> ${user.location.country}</p>
            <p><span>Gender:</span> ${user.gender}</p>
        </div>`
    ;
}



