import React from 'react';

function generateAuthor(prefix, fullName) {
    // Provide a default value if fullName is undefined or null
    const name = typeof fullName === 'string' ? fullName : '';
    
    // str = 'Julien Vehent' => ['Julien Vehent'] => ['J', 'V'] => JV
    const initials = name.split(" ").map(name => name[0]).join("").toUpperCase();

    const now = new Date();
    const timestampCode = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString()
        .padStart(2, '0')}${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}
    ${now.getSeconds().toString().padStart(2, '0')}`

    const userCode = `${prefix} - ${initials} - ${timestampCode}`;
    return userCode;
}

export default generateAuthor;
