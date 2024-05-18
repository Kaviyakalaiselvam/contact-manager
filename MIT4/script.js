function submit() {
    let name = document.getElementById('name').value;
    let mail = document.getElementById('mail').value;

    let contactList = JSON.parse(localStorage.getItem('contactList')) || [];
    
    contactList.push({
        name: name,
        mail: mail
    });

    localStorage.setItem('contactList', JSON.stringify(contactList));
    
    document.getElementById('name').value = '';
    document.getElementById('mail').value = '';

    renderContactList();
    
}

function renderContactList() {
    let contactList = JSON.parse(localStorage.getItem('contactList')) || [];
    let contactListDiv = document.getElementById('contactList');
    contactListDiv.innerHTML = '';

    contactList.forEach((contact, index) => {
        let contactDiv = document.createElement('div');
        contactDiv.innerHTML = `Name: ${contact.name}, Email: ${contact.mail}`;
        contactListDiv.appendChild(contactDiv);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    renderContactList();
});


