// Variable to track if a .blockchain has been clicked at least once
let blockchainClicked = false;

document.querySelectorAll(".blockchain").forEach((element) => {
  element.addEventListener("click", function () {
    // Update the variable to indicate a click has occurred
    blockchainClicked = true;

    // Add opacity and remove border-black on other .blockchain elements
    document.querySelectorAll(".blockchain").forEach((div) => {
      div.classList.add("opacity-50");
      div.classList.remove("border-black");
      div.style.borderColor = "";
    });

    // Remove opacity on the clicked .blockchain
    this.classList.remove("opacity-50");

    // Remove existing check-icons
    document.querySelectorAll(".check-icon").forEach((icon) => icon.remove());

    // Add border-black to the clicked .blockchain
    this.classList.add("border-black");
    this.style.borderColor = "black";

    // Create and add check-icon on the clicked element
    const checkIcon = document.createElement("div");
    checkIcon.innerHTML = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-2 right-2 bg-green-500 rounded-full">
      <path d="M10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="white"></path>
    </svg>`;
    checkIcon.classList.add("check-icon");
    this.appendChild(checkIcon);
  });

  // Temporarily remove opacity on hover if an element has been clicked
  element.addEventListener("mouseenter", function () {
    if (blockchainClicked) {
      this.classList.remove("opacity-50");
    }
  });

  // Re-apply opacity when hover stops if an element has been clicked
  element.addEventListener("mouseleave", function () {
    if (blockchainClicked && !this.classList.contains("border-black")) {
      // Reapply opacity unless the element is the clicked one
      this.classList.add("opacity-50");
    }
  });
});
