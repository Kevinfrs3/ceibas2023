"use strict";
function gMap() {
  $(".google-map").length &&
    $(".google-map").each(function () {
      var e,
        t = $(this).attr("id"),
        l = $(this).data("map-lat"),
        a = $(this).data("map-lng"),
        i = $(this).data("icon-path"),
        s = $(this).data("map-zoom"),
        r = $(this).data("map-title");
      if (!s) var s = 11;
      (e = new GMaps({
        div: "#" + t,
        scrollwheel: !1,
        lat: l,
        lng: a,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#000" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#f1f1f1" }, { visibility: "on" }],
          },
        ],
        zoom: s,
      })),
        i &&
          (e.addMarker({ icon: i, lat: l, lng: a, title: r }),
          e.addMarker({
            icon: i,
            lat: 40.700843,
            lng: 40.700843,
            title: "New York",
          }));
    });
}
jQuery(document).on("ready", function () {
  var e;
  jQuery, gMap();
});
