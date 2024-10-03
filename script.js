// Hiển thị thiệp chúc mừng khi nhấn nút
function showCard() {
    $('#birthdayCard').modal('show');
}

// Bắt đầu phát nhạc sinh nhật
document.getElementById('birthdayMusic').play().catch(error => {
    console.error('Không thể phát nhạc:', error);
});

/// Khi ảnh chạy hết sẽ lặp lại từ đầu
const container = document.querySelector('.image-container');
let currentIndex = 0;

function loopImages() {
    currentIndex++;
    if (currentIndex >= 20) {
        currentIndex = 0;
        container.style.transition = 'none';
        container.style.transform = 'translateX(0)'; // Reset lại vị trí
    } else {
        container.style.transition = 'transform 1s ease-in-out';
        container.style.transform = `translateX(-${currentIndex * 25}%)`; // Di chuyển 25% cho mỗi lần
    }
}

setInterval(loopImages, 4000); // Tốc độ chạy: 5 giây


// Tạo hiệu ứng trái tim rơi
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.animationDuration = `${Math.random() * 5 + 10}s`;
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000); // Thời gian trái tim rơi rồi biến mất
}

// Tạo trái tim liên tục
setInterval(createHeart, 300);

