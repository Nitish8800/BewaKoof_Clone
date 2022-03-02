
  document.querySelector("#Prashant_My").addEventListener("submit", confirm);

  function confirm(event) {
    event.preventDefault();
    var otp = document.querySelector("#Prashant_OTP").value;
    if (otp == "1234") {
      document.querySelector("#Prashant_My").textContent = "";
      window.location.href = "Suceess_Prashant.html"
    } else {
        swal("Oops!", "Something went wrong on the page!", "error")
    }
  }
