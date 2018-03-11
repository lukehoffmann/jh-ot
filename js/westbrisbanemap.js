var map_center = new google.maps.LatLng(-27.495, 152.99)
var fig_tree_pocket = new google.maps.LatLng(-27.5259287,152.9560865)

var map_options = {
    center: map_center, 
    zoom: 12, 
    mapTypeId: google.maps.MapTypeId.ROADMAP, 
    scrollwheel: false, 
    draggable: false, 
    disableDoubleClickZoom: true,
    disableDefaultUI: true
}

var map_canvas = document.getElementById('map_canvas');
var map = new google.maps.Map(map_canvas, map_options);

var marker = new google.maps.Marker({
      position: fig_tree_pocket,
      map: map,
      title: 'Fig Tree Pocket'
  });

var styles = [
  {
    stylers: [
      // { hue: "#00ffe6" },
      // { saturation: -15 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 50 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];
map.setOptions({styles: styles});