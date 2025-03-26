const video = document.getElementById("camera");
const button = document.getElementById("capturar");
const desativar = document.getElementById("desativar");
const ativar = document.getElementById("ativar");
const canva = [
    document.getElementById("foto1"),
    document.getElementById("foto2"),
    document.getElementById("foto3"),
    document.getElementById("foto4"),
    document.getElementById("foto5"),
    document.getElementById("foto6"),
    document.getElementById("foto7"),
    document.getElementById("foto8")
];
let stream;
let fotoIndex = 0;

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (erro) {
        alert('Erro ao abrir a câmera');
    }
}

button.addEventListener('click', function() {
    if (fotoIndex < canva.length) {
        const canvas = canva[fotoIndex];
        const contexto = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        contexto.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.style.display = 'block';
        fotoIndex++;
    }
});

cinza.addEventListener('click', function() {
    if (fotoIndex < canva.length) {
        const canvas = canva[fotoIndex];
        const contexto = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        contexto.filter = 'grayscale(100%)';
        contexto.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.style.display = 'block';
        fotoIndex++;
    }
});

desativar.addEventListener('click', function() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        stream = null;
    }
});

ativar.addEventListener('click', function() {
    if (!stream) {
        startCamera();
    }
});

startCamera();