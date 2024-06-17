// 모달 열기
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// 모달 닫기
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// 이미지 슬라이더
let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// 검색 기능
function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// 다크 모드
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// 지도 통합 (Google Maps API)
function initMap() {
    const map = new google.maps.Map(document.getElementById('map-container'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});
