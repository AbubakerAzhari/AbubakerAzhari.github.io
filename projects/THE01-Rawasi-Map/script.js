// Data Models containing 8 parcels across Sector A and Sector B
const parcelDataset = {
    1: { block: "1", no: "1", area: 2400, type: "Residential Corner", status: "Available", price: 55000 },
    2: { block: "1", no: "2", area: 2200, type: "Standard Residential", status: "Available", price: 48000 },
    3: { block: "1", no: "3", area: 2200, type: "Standard Residential", status: "Available", price: 62000 },
    4: { block: "1", no: "4", area: 2600, type: "Standard Residential", status: "Available", price: 59000 },
    5: { block: "1", no: "5", area: 2100, type: "Standard Residential", status: "Sold", price: 59000 },
    6: { block: "1", no: "6", area: 2000, type: "Standard Residential", status: "Available", price: 59000 },
    7: { block: "1", no: "7", area: 1600, type: "Standard Residential", status: "Available", price: 59000 },
    8: { block: "1", no: "8", area: 2200, type: "Residential Corner", status: "Available", price: 59000 },
    9: { block: "1", no: "9", area: 2800, type: "Residential Corner", status: "Available", price: 59000 },
    10: { block: "1", no: "10", area: 1900, type: "Standard Residential", status: "Available", price: 59000 },
    11: { block: "1", no: "11", area: 1300, type: "Commercial Premium", status: "Available", price: 59000 },
    12: { block: "1", no: "12", area: 2000, type: "Commercial Premium", status: "Available", price: 59000 },
    13: { block: "1", no: "13", area: 2163, type: "Commercial Premium", status: "Available", price: 59000 },
    14: { block: "1", no: "14", area: 1890, type: "Commercial Premium", status: "Available", price: 59000 },
    15: { block: "1", no: "15", area: 1910, type: "Standard Residential", status: "Sold", price: 59000 },
    16: { block: "1", no: "16", area: 2060, type: "Residential Corner", status: "Sold", price: 59000 },

    17: { block: "2", no: "1", area: 3000, type: "Commercial Corner", status: "Available", price: 68000 },
    18: { block: "2", no: "2", area: 2100, type: "Commercial Premium", status: "Available", price: 46000 },
    19: { block: "2", no: "3", area: 1100, type: "Commercial Premium", status: "Available", price: 46000 },
    20: { block: "2", no: "4", area: 3100, type: "Commercial Premium", status: "Sold", price: 46000 },
    21: { block: "2", no: "5", area: 4000, type: "Commercial Premium", status: "Available", price: 46000 },
    22: { block: "2", no: "6", area: 2100, type: "Commercial Premium", status: "Available", price: 46000 },
    23: { block: "2", no: "7", area: 1900, type: "Commercial Premium", status: "Sold", price: 46000 },
    24: { block: "2", no: "8", area: 1160, type: "Commercial Corner", status: "Available", price: 46000 },
    25: { block: "2", no: "9", area: 2150, type: "Residential Corner", status: "Available", price: 46000 },
    26: { block: "2", no: "10", area: 3120, type: "Standard Residential", status: "Available", price: 46000 },
    27: { block: "2", no: "11", area: 1905, type: "Standard Residential", status: "Sold", price: 46000 },
    28: { block: "2", no: "12", area: 1600, type: "Standard Residential", status: "Sold", price: 46000 },
    29: { block: "2", no: "13", area: 1430, type: "Standard Residential", status: "Available", price: 46000 },
    30: { block: "2", no: "14", area: 1100, type: "Standard Residential", status: "Available", price: 46000 },
    31: { block: "2", no: "15", area: 1800, type: "Standard Residential", status: "Available", price: 46000 },
    32: { block: "2", no: "16", area: 3230, type: "Residential Corner", status: "Available", price: 75000 }
};

let currentActiveParcelId = null;

// Execution begins only after DOM structure is guaranteed stable
document.addEventListener("DOMContentLoaded", () => {
    const modalOverlay = document.getElementById("modalOverlay");
    
    // Bind robust query listeners directly to SVG nodes
    document.querySelectorAll(".land-parcel").forEach(element => {
        element.addEventListener("click", (e) => {
            const parcelId = element.getAttribute("data-parcel-id");
            openParcelModal(parcelId);
        });
    });

    // Close buttons event binding
    document.getElementById("closeBtn").addEventListener("click", closeParcelModal);
    
    document.getElementById("btnReserve").addEventListener("click", () => executeModalAction("Reserve"));
    document.getElementById("btnPurchase").addEventListener("click", () => executeModalAction("Purchase"));

    // Close modal if user clicks outside window boundary box 
    window.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            closeParcelModal();
        }
    });
});

function openParcelModal(parcelId) {
    currentActiveParcelId = parcelId;
    const targetData = parcelDataset[parcelId];
    
    if (targetData) {
        document.getElementById("modalTitle").innerText = `Details: Plot Space ${targetData.no}`;
        document.getElementById("popBlock").innerText = targetData.block;
        document.getElementById("popNo").innerText = targetData.no;
        document.getElementById("popArea").innerText = targetData.area.toLocaleString();
        document.getElementById("popType").innerText = targetData.type;
        document.getElementById("popPrice").innerText = targetData.price.toLocaleString();
        document.getElementById("popStatus").innerText = targetData.status;
        
        document.getElementById("modalOverlay").classList.add("active");
    }
}

function closeParcelModal() {
    document.getElementById("modalOverlay").classList.remove("active");
    currentActiveParcelId = null;
}

function executeModalAction(actionType) {
    if (currentActiveParcelId) {
        alert(`Java Controller Mock Trigger:\nInvoking controller command [${actionType}] processing model record validation parameter ID: ${currentActiveParcelId}`);
        closeParcelModal();
    }
}
