document.addEventListener("DOMContentLoaded", () => {
  const insightsSection = document.querySelector(".insights");
  const animateCounters = () => {
    const counters = insightsSection.querySelectorAll(".number p");
    counters.forEach((counter) => {
      const target = +counter.textContent.replace("%", "");
      const duration = 2000;
      const increment = target / (duration / 16);

      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current) + "%";
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + "%";
        }
      };

      updateCounter();
    });
  };

  animateCounters();
});

// showing and hiding side bar

const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const themeToggler = document.querySelector(".themeToggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change the theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("darkThemeVar");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill orders in table

orders.forEach((order) => {
  const tr = document.createElement("tr");
  const content = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${
                order.shipping === "Delivered"
                    ? "primary"
                    : order.shipping === "Pending"
                    ? "warning"
                    : "danger"
            }">${order.shipping}</td>
            <td class="primary">Details</td>
        `;
        tr.innerHTML = content
        document.querySelector('table tbody').appendChild(tr)
});
