document.addEventListener("DOMContentLoaded", function () {
    const cowList = document.querySelector(".cow-list");
    const leftBtn = document.querySelector(".carousel-btn.left");
    const rightBtn = document.querySelector(".carousel-btn.right");
    const selectedCount = document.querySelector(".selected-count");
    const totalCost = document.querySelector(".total-cost");
    const previewBtn = document.querySelector(".preview-btn");
    const payBtn = document.querySelector(".pay-btn");

    let cows = [
        { id: 10312, breed: "GIR", dob: "03-Dec-2020", age: "5 year 3 month", price: 3500, img: "cow1.png" },
        { id: 10314, breed: "GIR", dob: "27-Nov-2020", age: "5 year 4 month", price: 3500, img: "cow2.png" },
        { id: 10247, breed: "KANKREJ", dob: "02-Feb-2017", age: "8 year 1 month", price: 3500, img: "cow3.png" },
        { id: 10240, breed: "KANKREJ", dob: "15-Dec-2017", age: "8 year 3 month", price: 3500, img: "cow4.png" },
        { id: 10450, breed: "SAHIWAL", dob: "10-Aug-2018", age: "6 year 2 month", price: 3500, img: "cow5.png" },
    ];

    let selectedCows = [];
    let currentIndex = 0;

    function renderCows() {
        cowList.innerHTML = "";
        cows.forEach((cow) => {
            let card = document.createElement("div");
            card.classList.add("cow-card");
            card.innerHTML = `
                <img src="${cow.img}" alt="Cow Image">
                <h3>₹${cow.price}/Month</h3>
                <div class="cow-details">
                    <div>Category: COW</div>
                    <div>Breed: ${cow.breed}</div>
                </div>
                <div class="cow-details">
                    <div>Date of Birth: ${cow.dob}</div>
                    <div>Age: ${cow.age}</div>
                </div>
                <p>Meet our beloved ${cow.breed} cow, a symbol of strength and resilience.</p>
                <button class="select-btn" data-id="${cow.id}">Select</button>
            `;
            cowList.appendChild(card);
        });

        updateVisibleCows();

        document.querySelectorAll(".select-btn").forEach((btn) => {
            btn.addEventListener("click", function () {
                let cowId = parseInt(this.getAttribute("data-id"));
                if (selectedCows.includes(cowId)) {
                    selectedCows = selectedCows.filter((id) => id !== cowId);
                    this.textContent = "Select";
                } else {
                    selectedCows.push(cowId);
                    this.textContent = "Selected";
                }
                updateTotal();
            });
        });
    }

    function updateVisibleCows() {
        const cards = document.querySelectorAll(".cow-card");
        cards.forEach((card, index) => {
            card.style.display = index >= currentIndex && index < currentIndex + 2 ? "block" : "none";
        });
    }

    leftBtn?.addEventListener("click", function () {
        currentIndex = Math.max(0, currentIndex - 1);
        updateVisibleCows();
    });

    rightBtn?.addEventListener("click", function () {
        currentIndex = Math.min(cows.length - 2, currentIndex + 1);
        updateVisibleCows();
    });

    function updateTotal() {
        selectedCount.textContent = `${selectedCows.length} Selected`;
        totalCost.textContent = `Total: ₹${selectedCows.length * 3500}`;
    }

    // Storing selected cows before navigating to summary
    previewBtn?.addEventListener("click", function () {
        localStorage.setItem("selectedCows", JSON.stringify(selectedCows));
        window.location.href = "summary.html";
    });

    // Load selected cows on summary page
    if (document.querySelector(".selected-cows-list")) {
        let selectedCowsIds = JSON.parse(localStorage.getItem("selectedCows")) || [];
        let selectedCowsList = document.querySelector(".selected-cows-list");
        let totalPrice = 0;

        selectedCowsList.innerHTML = "";
        selectedCowsIds.forEach((id) => {
            let cow = cows.find((c) => c.id === id);
            if (cow) {
                totalPrice += cow.price;
                let cowDiv = document.createElement("div");
                cowDiv.classList.add("summary-cow");
                cowDiv.innerHTML = `
    <img src="${cow.img}" alt="Cow Image">
    <div class="summary-info">
        <p><strong>Breed:</strong> ${cow.breed}</p>
        <p><strong>Age:</strong> ${cow.age}</p>
        <p><strong>Price:</strong> ₹${cow.price}/Month</p>
    </div>
`;

                selectedCowsList.appendChild(cowDiv);
            }
        });

        document.querySelector(".summary-total").textContent = `Total: ₹${totalPrice}`;
        document.querySelector(".adopt-btn").addEventListener("click", function () {
            localStorage.setItem("paymentAmount", totalPrice);
            window.location.href = "payment.html";
        });
    }

    // Payment Page Handling
    if (document.getElementById("payment-amount")) {
        document.getElementById("payment-amount").textContent = localStorage.getItem("paymentAmount") || "0";
        payBtn?.addEventListener("click", function () {
            window.location.href = "success.html";
        });
    }

    renderCows();
});
