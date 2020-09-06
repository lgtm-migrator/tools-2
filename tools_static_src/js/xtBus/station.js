$().ready(function () {
});

function getStation(stationName = '', fn) {
  let data = {
    type: 'station',
    stationName: stationName,
    myLat: '',
    myLng: '',
  };
  common_ajax(data, fn);
}
