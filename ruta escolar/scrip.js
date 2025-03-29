document.addEventListener("DOMContentLoaded", function () {
    const dashboard = document.getElementById("dashboard");
    const loginSection = document.getElementById("login-section");
    const userTypeSelect = document.getElementById("userType");
    const infoContainer = document.getElementById("info");

    function login() {
        const userType = userTypeSelect.value;

        loginSection.classList.add("hidden");
        dashboard.classList.remove("hidden");

        let infoHTML = "";

        if (userType === "student") {
            infoHTML = `
                <h2>Bienvenido, Estudiante 📚</h2>
                <p>Tu bus pasará a recogerte a las 7:00 AM</p>
                <p>Ruta: Barrio Centro - Universidad</p>
                <p>Conductor asignado: Juan Pérez</p>
                <p>Estado del bus: <span class="status">En camino</span></p>
                <button onclick="notifyArrival()">📢 Recibir alerta de llegada</button>
            `;
        } else if (userType === "driver") {
            infoHTML = `
                <h2>Bienvenido, Conductor 🚍</h2>
                <p>Ruta asignada: Universidad - Barrio Centro</p>
                <p>Hora de salida: 6:45 AM</p>
                <p>Vehículo: Bus #23 - Placa XYZ-123</p>
                <h3>Lista de estudiantes</h3>
                <div class="student-list">
                    <ul>
                        <li>🔹 Pedro López - ID: 1001</li>
                        <li>🔹 María González - ID: 1002</li>
                        <li>🔹 José Ramírez - ID: 1003</li>
                        <li>🔹 Ana Torres - ID: 1004</li>
                        <li>🔹 Luis Herrera - ID: 1005</li>
                    </ul>
                </div>
            `;
        } else if (userType === "admin") {
            infoHTML = `
                <h2>Bienvenido, Administrador ⚙️</h2>
                <p>Total de buses en operación: 8</p>
                <p>Conductores activos: 7</p>
                <p>Estudiantes transportados hoy: 120</p>
                <h3>Estado de las rutas:</h3>
                <ul>
                    <li>🚍 Bus 23: En camino</li>
                    <li>🚍 Bus 12: Llegando a destino</li>
                    <li>🚍 Bus 9: Retrasado 5 minutos</li>
                </ul>
            `;
        }

        infoContainer.innerHTML = infoHTML;
    }

    function logout() {
        dashboard.classList.add("hidden");
        loginSection.classList.remove("hidden");
        infoContainer.innerHTML = "";
    }

    function notifyArrival() {
        alert("📢 Tu bus está a 5 minutos de distancia.");
    }

    window.login = login;
    window.logout = logout;
    window.notifyArrival = notifyArrival;
});
