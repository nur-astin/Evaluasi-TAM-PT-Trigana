document.addEventListener("DOMContentLoaded", function () {
  // SLIDER FOTO — Auto-slide dengan fade & dot indicator
  const sliderContainer = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slide-card");

  if (slides.length > 0 && sliderContainer) {
    let currentSlide = 0;

    slides[0].classList.add("active");

    const dotsWrapper = document.createElement("div");
    dotsWrapper.classList.add("slider-dots");

    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("slider-dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", function () {
        goToSlide(i);
        resetInterval();
      });

      dotsWrapper.appendChild(dot);
    });

    sliderContainer.insertAdjacentElement("afterend", dotsWrapper);

    function goToSlide(index) {
      slides[currentSlide].classList.remove("active");
      dotsWrapper.children[currentSlide].classList.remove("active");
      currentSlide = index;
      slides[currentSlide].classList.add("active");
      dotsWrapper.children[currentSlide].classList.add("active");
    }

    function nextSlide() {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }

    let intervalId = setInterval(nextSlide, 3500);

    function resetInterval() {
      clearInterval(intervalId);
      intervalId = setInterval(nextSlide, 3500);
    }

    sliderContainer.addEventListener("mouseenter", () =>
      clearInterval(intervalId),
    );
    sliderContainer.addEventListener("mouseleave", () => {
      intervalId = setInterval(nextSlide, 3500);
    });
  }

  // ANIMASI BAR HASIL TAM
  const bars = document.querySelectorAll(".bar-inner");
  if (bars.length > 0) {
    bars.forEach((bar, i) => {
      const targetWidth = bar.style.width;
      bar.style.width = "0%";
      bar.style.transition = "width 0.7s ease";
      setTimeout(
        () => {
          bar.style.width = targetWidth;
        },
        150 + i * 80,
      );
    });
  }

  // TANGGAL CETAK
  const elDate = document.getElementById("print-date");
  if (elDate) {
    const now = new Date();
    const bulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    elDate.textContent =
      now.getDate() + " " + bulan[now.getMonth()] + " " + now.getFullYear();
  }
});
