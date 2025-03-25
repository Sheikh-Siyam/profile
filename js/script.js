document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".cus-navbar, .logo , .menu li" , { y: -50, opacity: 0, duration: 0.5, stagger: 0.2, delay: 0.2 });
  gsap.from(".hero-section img", { opacity: 0, x: 50, stagger: 0.1, delay: 1.5 });
  gsap.from(".hero-section .details", { opacity: 0, x: -50, delay: 1 });

});

// sticky header gsap
// Get the header element
const header = document.getElementById('stickyHeader');

// Listen for scroll events
window.addEventListener('scroll', function () {
  // Check if the page has been scrolled down
  if (window.scrollY > 50) { // Adjust the scroll threshold as needed
    // GSAP animation for width change
    gsap.to(header, { duration: 0.1, width: "100%", borderRadius: "0" }); // Shrink to 80%
  } else {
    // GSAP animation to revert width back to 100%
    if (window.innerWidth > 886) {
    gsap.to(header, { duration: 0.1, width: "87%", borderRadius: "70px" });
    }
  }
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});


// services read more scripts
document.querySelectorAll(".text-container").forEach(container => {
  let wordLimit = parseInt(container.getAttribute("data-word-limit"));
  let text = container.textContent.trim();
  let words = text.split(" ");

  if (words.length > wordLimit) {
    let visibleText = words.slice(0, wordLimit).join(" ") + "...";
    let hiddenText = words.slice(wordLimit).join(" ");

    container.innerHTML = `<span class="visible-text">${visibleText}</span>
                            <span class="hidden-text"> ${hiddenText}</span>
                            <button class="read-more-btn">Read More</button>`;

    let button = container.querySelector(".read-more-btn");
    let hiddenSpan = container.querySelector(".hidden-text");
    let visibleSpan = container.querySelector(".visible-text");

    button.addEventListener("click", function () {
      if (hiddenSpan.style.display === "none" || hiddenSpan.style.display === "") {
        hiddenSpan.style.display = "inline";
        button.textContent = "Read Less";
        button.style.display = "inline";
        visibleSpan.textContent = words.slice(0, wordLimit).join(" ");
      } else {
        hiddenSpan.style.display = "none";
        button.textContent = "Read More";
        button.style.display = "block";
        visibleSpan.textContent = words.slice(0, wordLimit).join(" ") + "...";
      }
    });
  }
});




gsap.registerPlugin(ScrollTrigger);

// Scroll animation for the section
gsap.fromTo(".service-items",
  { opacity: 0, y: 50 },
  {
    opacity: 1, y: 0, duration: 1, ease: "power3.out",
    scrollTrigger: {
      trigger: ".service-items",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);

// Scroll animation for the section title
gsap.to(".section-title", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".section-title",
    start: "top 80%", // When the section title is 80% into the viewport
    toggleActions: "play none none none"
  }
});


// Skill section 
gsap.fromTo(".skills-container",
  { opacity: 0, y: 50 },
  {
    opacity: 1, y: 0, duration: 1, ease: "power3.out",
    scrollTrigger: {
      trigger: ".skills-container",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);

// about me section 
gsap.fromTo(".about-me p",
  { opacity: 0, y: 50 },
  {
    opacity: 1, y: 0, duration: 1, ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-me p",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);


// Contact through WhatsApp 
gsap.to(".contact-me img", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact-me img",
    start: "top 80%", // When the section title is 80% into the viewport
    toggleActions: "play none none none"
  }
});
