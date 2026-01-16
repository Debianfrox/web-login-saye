document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // Mengambil data dari input
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            // Simulasi Login (Bisa kamu ganti sesuai keinginan)
            if (user === "admin" && pass === "1234") {
                alert("Login Berhasil! Selamat datang.");
                window.location.href = "tabel.html"; // Pindah ke halaman tabel
            } else if (user === "" || pass === "") {
                alert("Isi dulu username dan password-nya bosku!");
            } else {
                alert("Username atau Password salah!");
            }
        });
    }
});
