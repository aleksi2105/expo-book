

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Спасибо за регистрацию! Мы отправили подтверждение на ваш email."
  );
  this.reset();
});

document.getElementById("registerModal").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Спасибо за регистрацию! Мы отправили подтверждение на ваш email."
  );
  this.reset;
  const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
  modal.hide();
});
