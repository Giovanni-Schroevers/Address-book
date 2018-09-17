'use strict';
let users;
let buttons;
const SOURCE = document.querySelector(".page-wrapper");
const CONTENT = document.querySelector(".detail-content");
const MODAL = document.querySelector(".detail__modal");

fetch('https://randomuser.me/api?results=18')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        showUsers(myJson);
        users = myJson;
    })
    .catch(error => console.error('Error:', error));

const showUsers = (data) => {
    for(let users in data.results){
        SOURCE.innerHTML += `<div class="contact__box">  
                    <img src="${data.results[users].picture.large}" class="contact__img" id="${users}">           
                    <p class="contact__name">${data.results[users].name.first.capitalize()}</p>
                 </div>`;
    }
    buttons = document.querySelectorAll(".contact__img");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',getUser,false);
    }
};

const getUser = (ev) => {
    let user = users.results[ev.target.id];
    CONTENT.innerHTML = `<span class="detail__close" onclick="closeModal()">&times;</span>
                       <h3 class="detail__header">${user.name.first.capitalize()} ${user.name.last.capitalize()}</h3>
                       <img src="${user.picture.large}" class="detail__img">
                       <p class="detail__text">Phone number: ${user.cell} <br/> Email: ${user.email}</p>`;
    MODAL.style.display = "block";
};

function closeModal() {
    MODAL.style.display = "none";
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
