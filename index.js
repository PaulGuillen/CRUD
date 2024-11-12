let users = [];

document.getElementById('addUserButton').addEventListener('click', function() {
    debugger;
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value.trim();
    const district = document.getElementById('district').value.trim();
    const gender = document.getElementById('gender').value;

    if (firstName && lastName && phone && city && district && gender) {
        const newUser = {
            firstName,
            lastName,
            phone,
            city,
            district,
            gender
        };




        
        users.push(newUser);

        const userItem = document.createElement('li');
        userItem.classList.add('user-item');
        userItem.innerHTML = `
            <span>${firstName} ${lastName} - ${phone} - ${city} - ${district} - ${gender}</span>
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
        `;
        
        document.getElementById('userList').appendChild(userItem);

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('city').value = '';
        document.getElementById('district').value = '';
        document.getElementById('gender').value = '';

        console.log('Usuarios:', users);

        userItem.querySelector('.delete-btn').addEventListener('click', function() {
            users = users.filter(user => user !== newUser);
            userItem.remove();
            console.log('Usuarios:', users);
        });

        userItem.querySelector('.edit-btn').addEventListener('click', function() {
            document.getElementById('firstName').value = newUser.firstName;
            document.getElementById('lastName').value = newUser.lastName;
            document.getElementById('phone').value = newUser.phone;
            document.getElementById('city').value = newUser.city;
            document.getElementById('district').value = newUser.district;
            document.getElementById('gender').value = newUser.gender;

            users = users.filter(user => user !== newUser);
            userItem.remove();
            console.log('Usuarios:', users);
        });
    } else {
        console.log('Por favor, complete todos los campos.');
    }
});
