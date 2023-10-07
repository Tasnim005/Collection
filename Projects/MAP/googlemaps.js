function initMap() {
  var options = {
    zoom: 8,
    center: { lat: 42.3601, lng: -71.0589 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    // Check for custom images
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
  }

  addMarker({
    coords: { lat: 42.3601, lng: -71.0589 },
    iconImage:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",

  });
  addMarker({ 
    coords: { lat: 42.3601, lng: -72.0589 }, 
});
  addMarker({ coords: { lat: 42.3801, lng: -71.0589 } });
}
