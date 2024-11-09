document.getElementById('addUserButton').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value.trim();
    const district = document.getElementById('district').value.trim();
    const gender = document.getElementById('gender').value;

    if (firstName && lastName && phone && city && district && gender) {
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

        console.log(`Usuario agregado: ${firstName} ${lastName}, Teléfono: ${phone}, Ciudad: ${city}, Distrito: ${district}, Género: ${gender}`);

        userItem.querySelector('.delete-btn').addEventListener('click', function() {
            userItem.remove();
            console.log(`Usuario eliminado: ${firstName} ${lastName}`);
        });

        userItem.querySelector('.edit-btn').addEventListener('click', function() {
            document.getElementById('firstName').value = firstName;
            document.getElementById('lastName').value = lastName;
            document.getElementById('phone').value = phone;
            document.getElementById('city').value = city;
            document.getElementById('district').value = district;
            document.getElementById('gender').value = gender;
            userItem.remove();
            console.log(`Usuario editando: ${firstName} ${lastName}`);
        });
    } else {
        console.log('Por favor, complete todos los campos.');
    }
});
