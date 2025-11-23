function showBookDetails(bookTitle) {
  const bookDetails = {
    "Трогательные истории": {
      // image: "./img/openbook0-1.jpg",
      description:
        "Серия инновационных тактильных книг для детей и малышей от 0 лет, которые не только расскажут об интересных животных и транспорте для людей, но и дадут прикоснуться к персонажам книг.",
      author: "Весова Юлия",
      pages: "12 страниц",
      price: "500 руб.",
    },
    "Кто где живёт": {
      description:
        "Раздвижная книжка-картонка познакомит вашего малыша с домашними и дикими животными и покажет, где они живут",
      author: "Робинс",
      pages: "8 страниц",
      price: "350 руб.",
    },
    "Сказки в картинках": {
      description:
        "Сборник добрых сказок с красивыми иллюстрациями известного художника-сказочника Владимира Сутеева.",
      author: "Сутеев Владимир",
      pages: "192 страницы",
      price: "1000 руб.",
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
