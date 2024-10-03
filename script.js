// Hiển thị thiệp chúc mừng khi nhấn nút
function showCard() {
    $('#birthdayCard').modal('show');
}

// Bắt đầu phát nhạc sinh nhật
document.getElementById('birthdayMusic').play().catch(error => {
    console.error('Không thể phát nhạc:', error);
});

/// Khi ảnh chạy hết sẽ lặp lại từ đầu
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.bg-image');
    const imageContainer = document.querySelector('.image-container');

    function updateImageDisplay() {
        const screenWidth = window.innerWidth;
        const totalImages = images.length;

        if (screenWidth > 768) { 
            // Laptop: Hiển thị 4 ảnh
            imageContainer.style.width = `${totalImages * 25}%`; // 25% mỗi ảnh (4 ảnh cùng lúc)
            images.forEach(image => {
                image.style.width = '25%'; // Mỗi ảnh chiếm 25% màn hình
            });
            imageContainer.style.animationDuration = `${totalImages * 5}s`; // Cuộn chậm hơn trên laptop (3s cho mỗi ảnh)
        } else {
            // Điện thoại: Hiển thị 2 ảnh, chạy nhanh hơn
            imageContainer.style.width = `${totalImages * 50}%`; // 50% mỗi ảnh (2 ảnh cùng lúc)
            images.forEach(image => {
                image.style.width = '50%'; // Mỗi ảnh chiếm 50% màn hình
            });
            imageContainer.style.animationDuration = `${totalImages * 1}s`; // Cuộn nhanh hơn trên điện thoại (1.5s cho mỗi ảnh)
        }
        // Reset lại vị trí ban đầu của container để đảm bảo cuộn mượt
        imageContainer.style.transform = 'translateX(0)';
    }

    // Gọi hàm updateImageDisplay khi tải trang hoặc thay đổi kích thước màn hình
    updateImageDisplay();
    window.addEventListener('resize', updateImageDisplay);
});



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

