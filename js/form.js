

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const toastElement = document.getElementById('myToast');
  const toast = new bootstrap.Toast(toastElement);
  toast.show();

  this.reset();
});

document.getElementById("registerModal").addEventListener("submit", function (e) {
  e.preventDefault();
  const toastElement = document.getElementById('myToast');
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
  const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
  modal.hide();

});
