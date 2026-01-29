// ==========================================
// CONFIGURACIÓN DE INVITADOS
// ==========================================

const guestDatabase = [
    // --- DESDE EL EXCEL (INFORMACIÓN ACTUALIZADA) ---
    {
        id: 1,
        name: "Luisa Camila González Vidal",
        allowedGuests: 2,
        family: [
            { name: "Luisa Camila González Vidal", relation: "Invitada Principal" },
            { name: "Juan Byron Astete Ramirez", relation: "Pareja" }
        ]
    },
    {
        id: 2,
        name: "Jorge Antonio González Campos",
        allowedGuests: 1,
        family: [{ name: "Jorge Antonio González Campos", relation: "Invitado Principal" }]
    },
    {
        id: 3,
        name: "Erika Mercedes Vidal Riquelme",
        allowedGuests: 1,
        family: [{ name: "Erika Mercedes Vidal Riquelme", relation: "Invitada Principal" }]
    },
    {
        id: 4,
        name: "Angela Rosemary González Vidal",
        allowedGuests: 1,
        family: [{ name: "Angela Rosemary González Vidal", relation: "Invitada Principal" }]
    },
    {
        id: 5,
        name: "Graciela Montserrat Barahona Vidal",
        allowedGuests: 3,
        family: [
            { name: "Graciela Montserrat Barahona Vidal", relation: "Invitada Principal" },
            { name: "David Acuña", relation: "Esposo" },
            { name: "Juan José Acuña Barahona", relation: "Hijo" }
        ]
    },
    // (ID 6 ELIMINADO: David Alejandro Ahumada Sotelo)
    {
        id: 7,
        name: "Diego Hernaldo Felipe Ramírez Santana",
        allowedGuests: 1,
        family: [{ name: "Diego Hernaldo Felipe Ramírez Santana", relation: "Invitado Principal" }]
    },
    {
        id: 8,
        name: "Bernardina del Carmen Riquelme Dominguez",
        allowedGuests: 1,
        family: [{ name: "Bernardina del Carmen Riquelme Dominguez", relation: "Invitada Principal" }]
    },
    {
        id: 9,
        name: "Sandra Jeanette Vidal Riquelme",
        allowedGuests: 1,
        family: [{ name: "Sandra Jeanette Vidal Riquelme", relation: "Invitada Principal" }]
    },
    {
        id: 10,
        name: "José Alejandro Canales Toro",
        allowedGuests: 1,
        family: [{ name: "José Alejandro Canales Toro", relation: "Invitado Principal" }]
    },
    {
        id: 11,
        name: "Sasha Marilinda Jibaja Zambrano",
        allowedGuests: 1,
        family: [{ name: "Sasha Marilinda Jibaja Zambrano", relation: "Invitada Principal" }]
    },
    {
        id: 12,
        name: "Belen Anais Geraldo Puentes",
        allowedGuests: 1,
        family: [{ name: "Belen Anais Geraldo Puentes", relation: "Invitada Principal" }]
    },
    {
        id: 13,
        name: "Cristian Bastian Choque Hermosilla",
        allowedGuests: 1,
        family: [{ name: "Cristian Bastian Choque Hermosilla", relation: "Invitado Principal" }]
    },
    {
        id: 14,
        name: "Bianka Mical Miranda Castro",
        allowedGuests: 1,
        family: [{ name: "Bianka Mical Miranda Castro", relation: "Invitada Principal" }]
    },
    {
        id: 15,
        name: "Javiera Catalina Pereira Orrego",
        allowedGuests: 1,
        family: [{ name: "Javiera Catalina Pereira Orrego", relation: "Invitada Principal" }]
    },
    {
        id: 16,
        name: "Alec Alcayaga Valdés",
        allowedGuests: 1,
        family: [{ name: "Alec Alcayaga Valdés", relation: "Invitado Principal" }]
    },
    {
        id: 17,
        name: "Angelina Lopéz Padilla",
        allowedGuests: 1,
        family: [{ name: "Angelina Lopéz Padilla", relation: "Invitada Principal" }]
    },
    {
        id: 18,
        name: "Cristian Reyes Sepulveda",
        allowedGuests: 1,
        family: [{ name: "Cristian Reyes Sepulveda", relation: "Invitado Principal" }]
    },
    {
        id: 19,
        name: "Melissa Rissi Melendez",
        allowedGuests: 1,
        family: [{ name: "Melissa Rissi Melendez", relation: "Invitada Principal" }]
    },
    {
        id: 20,
        name: "Lindsey Reyes Rissi",
        allowedGuests: 1,
        family: [{ name: "Lindsey Reyes Rissi", relation: "Invitada Principal" }]
    },
    {
        id: 21,
        name: "Leonardo Roman Vega",
        allowedGuests: 5,
        family: [
            { name: "Leonardo Roman Vega", relation: "Invitado Principal" },
            { name: "Alia Díaz Gamboa", relation: "Esposa" },
            { name: "Nicolas Román Díaz", relation: "Hijo" },
            { name: "Juan Román Díaz", relation: "Hijo" },
            { name: "Alia Román Díaz", relation: "Hija" }
        ]
    },
    {
        id: 22,
        name: "Leonardo Roman Ugarte",
        allowedGuests: 2, 
        family: [
            { name: "Leonardo Roman Ugarte", relation: "Invitado Principal" },
            { name: "Antonella Beatriz", relation: "Pareja" }
        ]
    },
    {
        id: 23,
        name: "Ignacio Reyes Sepulveda",
        allowedGuests: 5,
        family: [
            { name: "Ignacio Reyes Sepulveda", relation: "Invitado Principal" },
            { name: "Gabriela Godoy Duncan", relation: "Esposa" },
            { name: "Pia Reyes Godoy", relation: "Hija" },
            { name: "Sofia Reyes Godoy", relation: "Hija" },
            { name: "Ema Reyes Godoy", relation: "Hija" }
        ]
    },
    {
        id: 24,
        name: "Victoria Reyes Sepulveda",
        allowedGuests: 5,
        family: [
            { name: "Victoria Reyes Sepulveda", relation: "Invitada Principal" },
            { name: "Francisco Vasquez Chacana", relation: "Pareja" },
            { name: "Ian", relation: "Hijo" },
            { name: "Camilo", relation: "Hijo" },
            { name: "José", relation: "Hijo" }
        ]
    },
    {
        id: 25,
        name: "Patricio Reyes Sepulveda",
        allowedGuests: 3,
        family: [
            { name: "Patricio Reyes Sepulveda", relation: "Invitado Principal" },
            { name: "Myrla Sotomayor", relation: "Pareja" },
            { name: "Kevin", relation: "Acompañante" }
        ]
    },
    {
        id: 26,
        name: "Guillermo Rissi Calderon",
        allowedGuests: 1,
        family: [{ name: "Guillermo Rissi Calderon", relation: "Invitado Principal" }]
    },
    {
        id: 27,
        name: "Mirna Rissi Melendez",
        allowedGuests: 1,
        family: [{ name: "Mirna Rissi Melendez", relation: "Invitada Principal" }
                 { name: "Gianela Figueroa Ardiles", relation: "Nieta" }
        ]
    },
    {
        id: 28,
        name: "Yanire Rissi Melendez",
        allowedGuests: 2,
        family: [
            { name: "Yanire Rissi Melendez", relation: "Invitada Principal" },
            { name: "Jenifer Munita Rissi", relation: "Hija" }
        ]
    },
    {
        id: 29,
        name: "Jocelyn Munita Rissi",
        allowedGuests: 2,
        family: [
            { name: "Jocelyn Munita Rissi", relation: "Invitada Principal" },
            { name: "Javier", relation: "Pareja" }
        ]
    },
    {
        id: 30,
        name: "David Naranjo",
        allowedGuests: 4,
        family: [
            { name: "David Naranjo", relation: "Invitado Principal" },
            { name: "Yoselin", relation: "Esposa" },
            { name: "Sebastian Naranjo", relation: "Hijo" },
            { name: "Aracely Naranjo", relation: "Hija" }
        ]
    },
    {
        id: 31,
        name: "Ian Rojas Casarejio",
        allowedGuests: 2,
        family: [
            { name: "Ian Rojas Casarejio", relation: "Invitado Principal" },
            { name: "Acompañante", relation: "Acompañante" }
        ]
    },
    {
        id: 32,
        name: "Alfredo Castro Cutipa",
        allowedGuests: 1,
        family: [{ name: "Alfredo Castro Cutipa", relation: "Invitado Principal" }]
    },
    {
        id: 33,
        name: "Alejandra Morales",
        allowedGuests: 1,
        family: [{ name: "Alejandra Morales", relation: "Invitada Principal" }]
    },
    {
        id: 34,
        name: "Sebastian del Rio Rhenals",
        allowedGuests: 1,
        family: [{ name: "Sebastian del Rio Rhenals", relation: "Invitado Principal" }]
    },
    {
        id: 35,
        name: "Nicollett Fernández Sepúlveda",
        allowedGuests: 2,
        family: [
            { name: "Nicollett Fernández Sepúlveda", relation: "Invitada Principal" },
            { name: "Guliano", relation: "Acompañante" }
        ]
    },
    {
        id: 36,
        name: "Gisella Tejada Flores",
        allowedGuests: 1,
        family: [{ name: "Gisella Tejada Flores", relation: "Invitada Principal" }]
    },
    {
        id: 37,
        name: "Abdón Riquelme",
        allowedGuests: 1,
        family: [{ name: "Abdón Riquelme", relation: "Invitado Principal" }]
    },
    {
        id: 38,
        name: "Marlene González Campos",
        allowedGuests: 1,
        family: [{ name: "Marlene González Campos", relation: "Invitada Principal" }]
    },
    {
        id: 39,
        name: "Ricardo González Campos",
        allowedGuests: 2,
        family: [
            { name: "Ricardo González Campos", relation: "Invitado Principal" },
            { name: "Benjamin Gonzalez", relation: "Hijo" }
        ]
    },
    {
        id: 40,
        name: "Jose González Campos",
        allowedGuests: 2,
        family: [
            { name: "Jose González Campos", relation: "Invitado Principal" },
            { name: "Rosa Herrera Sepeda", relation: "Esposa" }
        ]
    },
    {
        id: 41,
        name: "Luisa Campos González",
        allowedGuests: 1,
        family: [{ name: "Luisa Campos González", relation: "Invitada Principal" }]
    },
    {
        id: 42,
        name: "Beatriz Vega Lemus",
        allowedGuests: 2,
        family: [
            { name: "Beatriz Vega Lemus", relation: "Invitada Principal" },
            { name: "Leonardo Roman", relation: "Esposo" }
        ]
    },
    // --- AGREGADOS WHATSAPP Y MANUALES ---
    { id: 43, name: "Raul Melendez", allowedGuests: 1, family: [{name: "Raul Melendez", relation: "Invitado Principal"}]},
    { id: 44, name: "Phillips Pizarro Fuentes", allowedGuests: 1, family: [{name: "Phillips Pizarro Fuentes", relation: "Invitado Principal"}]},
    { id: 45, name: "Nelson Alcota Jorquera", allowedGuests: 1, family: [{name: "Nelson Alcota Jorquera", relation: "Invitado Principal"}]},
    { id: 46, name: "Christopher Vergara Belmar", allowedGuests: 1, family: [{name: "Christopher Vergara Belmar", relation: "Invitado Principal"}]},
    { id: 47, name: "Mellisa Plaza", allowedGuests: 1, family: [{name: "Mellisa Plaza", relation: "Invitada Principal"}]},
    { id: 48, name: "Elizabeth Mena Rojas", allowedGuests: 1, family: [{name: "Elizabeth Mena Rojas", relation: "Invitada Principal"}]},
    { id: 49, name: "Danae Carmona Araya", allowedGuests: 1, family: [{name: "Danae Carmona Araya", relation: "Invitada Principal"}]},
    { id: 50, name: "Gonzalo Díaz Torres", allowedGuests: 1, family: [{name: "Gonzalo Díaz Torres", relation: "Invitado Principal"}]},
    { id: 51, name: "Sofia Quinteros Guggiana", allowedGuests: 1, family: [{name: "Sofia Quinteros Guggiana", relation: "Invitada Principal"}]},
    { id: 52, name: "Matias Gallardo Chepillo", allowedGuests: 1, family: [{name: "Matias Gallardo Chepillo", relation: "Invitado Principal"}]},
    { id: 53, name: "Katalina Baza Estay", allowedGuests: 1, family: [{name: "Katalina Baza Estay", relation: "Invitada Principal"}]},
    { id: 54, name: "Felipe Urzua Mattews", allowedGuests: 1, family: [{name: "Felipe Urzua Mattews", relation: "Invitado Principal"}]},
    { id: 55, name: "Maria Jose Camus Neira", allowedGuests: 1, family: [{name: "Maria Jose Camus Neira", relation: "Invitada Principal"}]},
    { id: 56, name: "Louis Angulo Estupiñan", allowedGuests: 1, family: [{name: "Louis Angulo Estupiñan", relation: "Invitado Principal"}]},
    { id: 57, name: "Maria Bello Lembach", allowedGuests: 1, family: [{name: "Maria Bello Lembach", relation: "Invitada Principal"}]},
    { id: 58, name: "Karina Shee Plaza", allowedGuests: 1, family: [{name: "Karina Shee Plaza", relation: "Invitada Principal"}]},
    { id: 59, name: "Camilo Lemus Harbottle", allowedGuests: 1, family: [{name: "Camilo Lemus Harbottle", relation: "Invitado Principal"}]},
    { id: 60, name: "Camila Araya Bolados", allowedGuests: 1, family: [{name: "Camila Araya Bolados", relation: "Invitada Principal"}]},
    { id: 61, name: "Constanza Pérez Díaz", allowedGuests: 1, family: [{name: "Constanza Pérez Díaz", relation: "Invitada Principal"}]},
    { id: 62, name: "Jose Aracena Rojas", allowedGuests: 1, family: [{name: "Jose Aracena Rojas", relation: "Invitado Principal"}]},
    { id: 63, name: "Jorge Pizarro López", allowedGuests: 1, family: [{name: "Jorge Pizarro López", relation: "Invitado Principal"}]},
    { id: 64, name: "Raúl Meléndez Arancibias", allowedGuests: 1, family: [{name: "Raúl Meléndez Arancibias", relation: "Invitado Principal"}]},
    { id: 65, name: "Damaris Jaramillo", allowedGuests: 1, family: [{name: "Damaris Jaramillo", relation: "Invitada Principal"}]},
    {
        id: 66,
        name: "Elba Campos",
        allowedGuests: 2,
        family: [
            { name: "Elba Campos", relation: "Invitada Principal" },
            { name: "Victor Guerra", relation: "Esposo" }
        ]
    },
];

// Estado de la aplicación
let currentGuest = null;

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchMessage = document.getElementById('searchMessage');
const guestCard = document.getElementById('guestCard');
const initialMessage = document.getElementById('initialMessage');
const guestName = document.getElementById('guestName');
const guestMessage = document.getElementById('guestMessage');
const familyList = document.getElementById('familyList');
const attendanceList = document.getElementById('attendanceList');
const dietaryInfo = document.getElementById('dietaryInfo');
const botonEnviar = document.getElementById('botonEnviar');
const mensajeEnvio = document.getElementById('mensajeEnvio');

// Event listeners
searchBtn.addEventListener('click', searchGuest);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchGuest();
});

botonEnviar.addEventListener('click', submitConfirmation);

// Función para normalizar texto (quitar tildes y convertir a minúsculas)
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

// Función para buscar invitado
function searchGuest() {
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        searchMessage.textContent = 'Por favor ingresa un nombre';
        searchMessage.style.color = '#8b7960';
        return;
    }

    // Buscar invitado (sin distinguir tildes ni mayúsculas)
    const normalizedSearch = normalizeText(searchTerm);
    const guest = guestDatabase.find(g => 
        normalizeText(g.name).includes(normalizedSearch)
    );

    if (guest) {
        showGuestCard(guest);
        searchMessage.textContent = '✓ ¡Bienvenido!';
        searchMessage.style.color = '#c9b8a8';
    } else {
        hideGuestCard();
        searchMessage.textContent = 'Lo siento, no has sido invitado. Si crees que es un error, contáctanos.';
        searchMessage.style.color = '#c9b8a8';
        currentGuest = null;
    }
}

// Función para mostrar la tarjeta del invitado
function showGuestCard(guest) {
    currentGuest = guest;
    
    // Actualizar información del invitado
    guestName.textContent = guest.name;
    const s = guest.allowedGuests !== 1 ? 's' : '';
    guestMessage.textContent = `Te esperamos en nuestra boda. ${guest.allowedGuests} persona${s} pueden asistir.`;
    
    // Cargar familiares (solo visual)
    familyList.innerHTML = '';
    guest.family.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'family-member';
        memberDiv.innerHTML = `
            <div class="member-name">${member.name}</div>
            <div class="member-relation">${member.relation}</div>
        `;
        familyList.appendChild(memberDiv);
    });

    // Cargar checkboxes de asistencia (funcional)
    attendanceList.innerHTML = '';
    guest.family.forEach((member, index) => {
        const attendanceDiv = document.createElement('div');
        attendanceDiv.className = 'attendance-item';
        attendanceDiv.innerHTML = `
            <span class="attendance-name">${member.name}</span>
            <div class="attendance-checkbox">
                <input 
                    type="checkbox" 
                    id="attendance-${index}"
                    data-member-name="${member.name}"
                    checked
                >
                <label for="attendance-${index}">Asistirá</label>
            </div>
        `;
        attendanceList.appendChild(attendanceDiv);
    });

    // Limpiar formulario
    dietaryInfo.value = '';
    mensajeEnvio.textContent = '';
    
    // Resetear estilos del botón
    botonEnviar.classList.remove('success', 'sending');
    botonEnviar.disabled = false;
    botonEnviar.innerHTML = 'Confirmar Asistencia vía WhatsApp';

    // Mostrar tarjeta y ocultar mensaje inicial
    guestCard.classList.remove('hidden');
    guestCard.classList.add('show-details');
    initialMessage.style.display = 'none';
}

// Función para ocultar la tarjeta del invitado
function hideGuestCard() {
    guestCard.classList.add('hidden');
    guestCard.classList.remove('show-details');
    initialMessage.style.display = 'block';
}

// ==========================================
// FUNCIÓN DE ENVÍO POR WHATSAPP (SERVERLESS)
// ==========================================
function submitConfirmation() {
    // 1. VALIDACIÓN
    if (!currentGuest) {
        showStatusMessage('Por favor busca tu nombre primero', 'error');
        return;
    }

    // 2. RECOLECCIÓN DE DATOS
    const attendingMembers = [];
    const checkboxes = attendanceList.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            attendingMembers.push(checkbox.dataset.memberName);
        }
    });

    if (attendingMembers.length === 0) {
        showStatusMessage('Por favor selecciona al menos una persona para confirmar.', 'error');
        return;
    }

    // 3. EFECTOS VISUALES
    const btn = document.getElementById('botonEnviar');
    btn.classList.add('sending');
    btn.disabled = true;
    btn.innerHTML = 'Generando mensaje...';

    const restricciones = dietaryInfo.value.trim() || 'Ninguna';

    // 4. CONSTRUCCIÓN DEL MENSAJE DE WHATSAPP
    // Usamos emojis para que se vea bonito
    let mensaje = `*¡Hola! Quiero confirmar mi asistencia a la boda* 💍✨\n\n`;
    mensaje += `*Invitado Principal:* ${currentGuest.name}\n`;
    mensaje += `*Total Asistentes:* ${attendingMembers.length}\n`;
    mensaje += `*Nombres:* ${attendingMembers.join(', ')}\n\n`;
    mensaje += `*Restricciones alimentarias / Mensaje:* ${restricciones}`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // 5. CONFIGURA AQUÍ TU NÚMERO
    // Reemplaza los X con tu número real. Ejemplo: "56912345678"
    const MI_NUMERO_WHATSAPP = "56927021306";

    // Crear el link de WhatsApp
    const urlWhatsapp = `https://wa.me/${MI_NUMERO_WHATSAPP}?text=${mensajeCodificado}`;

    // 6. ENVIAR (ABRIR WHATSAPP)
    setTimeout(() => {
        // Abrir WhatsApp en nueva pestaña
        window.open(urlWhatsapp, '_blank');

        // Actualizar UI
        btn.classList.remove('sending');
        btn.classList.add('success');
        btn.innerHTML = '¡Abriendo WhatsApp! &#10004;';
        showStatusMessage('Si no se abrió WhatsApp, revisa tus bloqueos de pop-up.', 'success');
        
        // Guardar respaldo local (opcional)
        saveToLocalStorage({ 
            name: currentGuest.name, 
            attending: attendingMembers, 
            diet: restricciones 
        });

        // Restaurar botón después de unos segundos
        setTimeout(() => {
            btn.classList.remove('success');
            btn.disabled = false;
            btn.innerHTML = 'Reenviar Confirmación';
        }, 5000);
    }, 1000);
}

// Función auxiliar para mostrar mensajes de estado
function showStatusMessage(msg, type) {
    mensajeEnvio.textContent = msg;
    if (type === 'error') {
        mensajeEnvio.style.color = '#c87a6f';
    } else {
        mensajeEnvio.style.color = '#7a8e5f';
    }
}

// Función para guardar en localStorage
function saveToLocalStorage(data) {
    const saved = JSON.parse(localStorage.getItem('confirmations') || '[]');
    saved.push({...data, timestamp: new Date().toLocaleString()});
    localStorage.setItem('confirmations', JSON.stringify(saved));
}

// Focus inicial
searchInput.focus();


