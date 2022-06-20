// Import stylesheets
import './style.css';
import {
  Marker,
  Map,
  CircleMarker,
  Polyline,
  Icon,
  Canvas,
  Polygon,
} from 'leaflet';
// Write Javascript code!
// const appDiv = document.getElementById('map');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

//创建高德地图
var amap = new AMap.Map('amap', {
  fadeOnZoom: false,
  navigationMode: 'classic',
  optimizePanAnimation: false,
  animateEnable: false,
  dragEnable: false,
  mapStyle: 'amap://styles/whitesmoke',
  // mapStyle: 'amap://styles/242e59d29506cac6a4d60c3ad08f4951',
  zoomEnable: false,
  resizeEnble: true,
  doubleClickZoom: false,
  keyboardEnable: false,
  scrollWheel: false,
  expandZoomRange: true,
  zooms: [1, 20],
  features: ['road', 'point', 'bg'],
  viewMode: '2D',
});
// var amap = new AMap.Map('amap');

// const map = new Map('map');
const map = new Map('map', {
  renderer: new Canvas(),
});

// var map = new Map('map');
map.on('zoom', (evt) => {
  amap.setZoom(evt.target.getZoom());
});
map.on('move', (evt) => {
  const pt = evt.target.getCenter();
  amap.setZoomAndCenter(evt.target.getZoom(), [pt.lng, pt.lat]);
});
map.setView([39.909186, 116.397411], 10);

// 点
new Marker([39.94758202338572, 116.38795852661131], {
  icon: new Icon({
    iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
});

// 点
new CircleMarker([39.909186, 166.457411]).addTo(map);
// 线
new Polyline([39.909186, 166.457411], [39.999186, 166.457411]).addTo(map);
// 面
new Polygon(
  [39.909186, 166.507411],
  [39.909186, 166.407411],
  [39.099186, 166.407411],
  [39.099186, 166.507411]
).addTo(map);
