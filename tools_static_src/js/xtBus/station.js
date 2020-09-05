$().ready(function () {
});

function getStation(fn) {
  let data = {
    type: 'station',
    stationName: '人民医院',
    myLat: '',
    myLng: '',
  };
  common_ajax(data, fn);
}
