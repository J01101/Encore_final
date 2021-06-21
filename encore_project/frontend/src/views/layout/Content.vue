<template>
  <content class="fixed flex flex-col top-0 left-80 w-full h-full">
    <div id="map" style="width:100%; height:900px;"></div>
  </content>
</template>

<script
  type="text/javascript"
  src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=vacjlo3i2q"
></script>

<script>
import axios from "axios";

export default {
  name: "map",
  created() {
    // 컴포넌트가 생성될 때, /api/tas에 요청을 보냅니다.
    this.$http
      .get("/api/tas")
      .then((response) => {
        this.tas = response.data;
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  },
  methods: {
    ta_name: function(event) {
      this.$http
        .post("/api/tas/name", {
          name: this.name,
        })
        .then((res) => {
          if (res.data.success == ture) {
            alert(res.data.message);
            this.$router.push("/detail");
          }
          if (res.data.success == false) {
            alert(res.data.message);
          }
        })
        .catch(function(error) {
          alert("error");
        });
    },

    // stamp: function(){
    //   var marker = new naver.maps.Marker({
    //     position: new naver.maps.LatLng(37.3595000, 127.105300),
    //     map: map
    //   });
    // }
  },
  data() {
    return {
      tas: [],
    };
  },
  mounted() {
    var mapOptions = {
      center: new naver.maps.LatLng(37.3595620, 127.105400),
      zoom: 18,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      zoomControl: true,
      minZoom: 6,
    };

    var map = new naver.maps.Map("map", mapOptions);

    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3595704, 127.105399),
      map: map,
    });

    // naver.maps.Event.addListener(map, "click", function (e) {
    //   marker.setPosition(e.coord);
    // });
  },
};
</script>

<style scoped></style>
