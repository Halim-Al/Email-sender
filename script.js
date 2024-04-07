//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");



    var formData = new FormData(document.querySelector("form")); // Mengambil data formulir
    var xhr = new XMLHttpRequest(); // Membuat objek XMLHttpRequest

    xhr.open("POST", "message.php", true); // Konfigurasi permintaan
    xhr.r
    xhr.onload = function() {
        if (xhr.status == 200) {
            document.getElementById("status").innerText = xhr.responseText; // Menampilkan respons dari server
            statusTxt.innerText = "message send succesfully"
        } else {
            document.getElementById("status").innerText = "Error: " + xhr.status; // Menampilkan pesan error jika ada
        }
    };

    xhr.onerror = function() {
        document.getElementById("status").innerText = "Request failed"; // Menampilkan pesan jika permintaan gagal
    };

    xhr.send(formData); // Mengirim data formulir ke server
};
