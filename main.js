


// Обратный отсчет до выставки
function updateCountdown() {
  const eventDate = new Date("2025-12-01T10:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML =
      "<h2>Выставка началась!</h2>";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Плавная прокрутка к секциям
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: "smooth" });
}

// Обработка навигации
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Показать детали книги
function showBookDetails(bookTitle) {
  const bookDetails = {
    "Первые слова": {
      description:
        "Красочная книга для самых маленьких с крупными изображениями и простыми словами. Развивает речь и визуальное восприятие.",
      author: "Мария Иванова",
      pages: "12 страниц",
      price: "450 руб.",
    },
    "Веселые животные": {
      description:
        "Интерактивная книга с кнопками, издающими звуки животных. Мягкие тактильные элементы на каждой странице.",
      author: "Петр Сидоров",
      pages: "10 страниц",
      price: "850 руб.",
    },
    "Сказки на ночь": {
      description:
        "Сборник добрых сказок с красивыми иллюстрациями. Идеально подходит для чтения перед сном.",
      author: "Елена Смирнова",
      pages: "48 страниц",
      price: "650 руб.",
    },
  };

  const book = bookDetails[bookTitle];
  const modalBody = document.getElementById("bookModalBody");

  modalBody.innerHTML = `
  <h5>${bookTitle}</h5>
  <p><strong>Автор:</strong> ${book.author}</p>
  <p><strong>Объем:</strong> ${book.pages}</p>
  <p><strong>Цена:</strong> ${book.price}</p>
  <p>${book.description}</p>
  `;

  const modal = new bootstrap.Modal(document.getElementById("bookModal"));
  modal.show();
}

// Обработка формы регистрации
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Спасибо за регистрацию! Мы отправили подтверждение на ваш email."
    );
    this.reset();
  });

// Анимация при прокрутке
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll(".book-card, .info-card, .testimonial-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });
