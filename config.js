const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJjazhrbnF1NWIwMHVjM2Zwbmh2OWs2dTI1In0.O8lasZoOGKUihm-HVEZxaQ",
  CSV:
    "https://docs.google.com/spreadsheets/d/1wwZgyE295fRv46K7MckU5WPU7P6xbi9cPDVEaK71YhU/gviz/tq?tqx=out:csv&sheet=Sheet1",
  center: [-111.6116328, 41.093597],
  zoom: 4,
  title: "Firefly Finder",
  description: "Firefly Finder",
  sideBarInfo: ["Location_Name", "Address", "City", "State", "Zip", "Phone"],
  popupTitle: ["Location_Name"],
  popupAddress: ["CONCATENATE_GEOCODE"],
  popupCity: ["City"],
  popupPhone: ["Phone"],
  popupURL: ["URL"],
  filters: [
    {
      type: "checkbox",
      title: "Product Type",
      columnHeader: "Product", // Case sensitive - must match spreadsheet entry
      listItems: ["Firefly 2+ Dry Herb Vaporizer", "Firefly Mini Single Use"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
  ],
};
