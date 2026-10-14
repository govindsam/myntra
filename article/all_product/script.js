// for sidebar
function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
}

// for product image
fetch("data.json")
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById("products");
        container.innerHTML = "";


        data.forEach(product => {
            const item = document.createElement("div");
            item.className = "product";

            const img = document.createElement("img");

            img.src = "images/" + product["style id"] + ".jpg";
            img.alt = product["style id"];

            // Remove product if image doesn't exist
            img.onerror = function () {
                item.remove();
            };

            item.appendChild(img);
            const Style_Id = document.createElement("p");
            Style_Id.textContent = "Style Id : " + product["style id"];
            item.appendChild(Style_Id);

            const myntra_sku_code = document.createElement("p");
            myntra_sku_code.textContent = "Myntra SKU :" + product["sku code"];
            item.appendChild(myntra_sku_code);

            const order_frequency = document.createElement("p");
            order_frequency.textContent = "Order Frequency : " + product.order_frequency;
            item.appendChild(order_frequency);

            const analysis_period = document.createElement("p");
            analysis_period.textContent = "Analysis period : " + product.analysis_period;
            item.appendChild(analysis_period);

            const ok_inventory = document.createElement("p");
            ok_inventory.textContent = "Ok Inventory :" + product.ok_inventory;
            item.appendChild(ok_inventory);

            const damage_inventory = document.createElement("p");
            damage_inventory.textContent = "Damage Inventory :" + product.damage_inventory;
            item.appendChild(damage_inventory);

            const inventory_count_date = document.createElement("p");
            inventory_count_date.textContent = "Inventory count date : " + product.inventory_count_date;
            item.appendChild(inventory_count_date);

            const link = document.createElement("a");
            link.textContent = "buy";
            link.href = "https://myntra.com/"+product["style id"];
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            item.appendChild(link);

            const inventory_in_myntra_database = document.createElement("p");
            inventory_in_myntra_database.textContent = "myntra database inventory : " + product.inventory_in_myntra_database;
            item.appendChild(inventory_in_myntra_database);

            const snapshot_date = document.createElement("p");
            snapshot_date.textContent = "snapshot date : " + product.snapshot_date;
            item.appendChild(snapshot_date);


            container.appendChild(item);
        });

    })
    .catch(error => {
        console.error("Error loading JSON:", error);
    });
