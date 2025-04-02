/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_advanced_markers_html]
// [START maps_advanced_markers_html_snippet]
async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: 30.453033, lng: -87.2669407 };
  const map = new Map(document.getElementById("map"), {
    zoom: 13,
    center,
    tilt: 67.5,
    mapTypeId: 'satellite',
    mapId: "4504f8b37365c3d0",
  });

  for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });

    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, property);
    });
  }
}

function toggleHighlight(markerView, property) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}

function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="price">${property.price}</div>
        <div class="address">${property.address}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
            <span class="fa-sr-only">bedroom</span>
            <span>${property.bed}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
            <span class="fa-sr-only">bathroom</span>
            <span>${property.bath}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
            <span class="fa-sr-only">size</span>
            <span>${property.size} ft<sup>2</sup></span>
        </div>
        </div>
    </div>
    `;
  return content;
}

const properties = [
  {
    address: "Cordova Mall",
    description: "Fantastic Home with modern design",
    price: "$ 3,889,000",
    type: "home",
    bed: 5,
    bath: 4.5,
    size: 300,
    position: {
      lat: 30.4762,
      lng: -87.2121,
    },
  },
  {
    address: "Pensacola Christian College",
    description: "Townhouse with friendly neighbors",
    price: "$ 3,050,000",
    type: "building",
    bed: 4,
    bath: 3,
    size: 200,
    position: {
      lat: 30.4780,
      lng: -87.2409,
    },
  },
  // [END maps_advanced_markers_html_snippet]
  {
    address: "Ellyson Industrial Park",
    description: "Spacious warehouse great for small business",
    price: "$ 3,125,000",
    type: "warehouse",
    bed: 4,
    bath: 4,
    size: 800,
    position: {
      lat: 30.5102,
      lng: -87.2021,
    },
  },
  {
    address: "Osceola Golf Course",
    description: "Single family house near golf club",
    price: "$ 4,225,000",
    type: "store-alt",
    bed: 2,
    bath: 1,
    size: 210,
    position: {
      lat: 30.4142,
      lng: -87.2871,
    },
  },
  {
    address: "Walmart",
    description: "Single family house near golf club",
    price: "$ 1,700,000",
    type: "home",
    bed: 4,
    bath: 3,
    size: 200,
    position: {
      lat: 30.4476,
      lng: -87.2329,
    },
  },
  {
    address: "ALDI",
    description: "Multifloor large warehouse",
    price: "$ 5,000,000",
    type: "warehouse",
    bed: 5,
    bath: 4,
    size: 700,
    position: {
      lat: 30.4563,
      lng: -87.2348,
    },
  },
  {
    address: "Dollar General",
    description: "Good Store Nearby",
    price: "$ 3,850,000",
    type: "building",
    bed: 4,
    bath: 4,
    size: 600,
    position: {
      lat: 30.4555,
      lng: -87.2417,
    },
  },
  {
    address: "Baskin Robbins",
    description: "Great Ice-cream shop near school zone",
    price: "$ 2,500,000",
    type: "home",
    bed: 3,
    bath: 2,
    size: 100,
    position: {
      lat: 30.4550,
      lng: -87.2423,
    },
  },
  {
    address: "Chick-fil-A",
    description: "2 storey store with large storage room",
    price: "$ 2,500,000",
    type: "store-alt",
    bed: 3,
    bath: 2,
    size: 450,
    position: {
      lat: 30.4558,
      lng: -87.2409,
    },
  },
];

initMap();
// [END maps_advanced_markers_html]
