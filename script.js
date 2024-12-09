// Create the Back to Top button
const backToTopButton = document.createElement("button");
backToTopButton.id = "backToTop";
backToTopButton.textContent = "↑ Top";
document.body.appendChild(backToTopButton);

// Style the Back to Top button
const style = document.createElement("style");
style.textContent = `
    #backToTop {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background: #1e90ff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        display: none; /* Initially hidden */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    #backToTop:hover {
        background: #0b76d3;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);

// Show or hide the button when scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
