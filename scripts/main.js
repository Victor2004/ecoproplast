// window.addEventListener('resize', adjustRectangles);

// function adjustRectangles() {
//     const image = document.querySelector('.background-image');
//     const rectangles = document.querySelectorAll('.rectangle');

//     const imageRect = image.getBoundingClientRect();

//     rectangles.forEach((rect, index) => {
//         // Динамическое позиционирование
//         const positions = [
//             { top: imageRect.top + imageRect.height * 0.55, left: imageRect.left + imageRect.width * 0.15 },
//             { top: imageRect.top + imageRect.height * 0.55, left: imageRect.left + imageRect.width * 0.30 },
//             { top: imageRect.top + imageRect.height * 0.55, left: imageRect.left + imageRect.width * 0.45 },
//             { top: imageRect.top + imageRect.height * 0.55, left: imageRect.left + imageRect.width * 0.60 },
//             { top: imageRect.top + imageRect.height * 0.55, left: imageRect.left + imageRect.width * 0.75 },
//         ];

//         rect.style.top = `${positions[index].top}px`;
//         rect.style.left = `${positions[index].left}px`;
//     });
// }

// // Вызов функции при загрузке страницы
// adjustRectangles();
