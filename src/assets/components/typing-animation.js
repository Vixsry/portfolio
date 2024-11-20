//ANIMASI MENGETIK DI BAGIAN HOME
document.addEventListener('DOMContentLoaded', function() {
    const typingElements = document.querySelectorAll('.typing');
    const texts = [
        'Developer & Designer',
        'IoT Technology Specialist',
        'UI/UX Designer'
    ]; // Daftar teks yang ingin ditampilkan

    const typingDelay = 100; // Kecepatan mengetik (dalam ms)
    const pauseDuration = 1000; // Durasi pause sebelum mengetik ulang (dalam ms)

    const typeText = (element, text, index) => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeText(element, text, index + 1), typingDelay);
        } else {
            // Setelah selesai mengetik, pause sejenak sebelum menghapus
            setTimeout(() => {
                element.textContent = ''; // Hapus teks
                const nextText = texts[(texts.indexOf(text) + 1) % texts.length]; // Dapatkan teks berikutnya
                typeText(element, nextText, 0); // Mulai mengetik teks berikutnya
            }, pauseDuration);
        }
    };

    typingElements.forEach((element, i) => {
        const text = texts[i % texts.length]; // Dapatkan teks dari daftar berdasarkan indeks
        typeText(element, text, 0); // Mulai mengetik
    });
});