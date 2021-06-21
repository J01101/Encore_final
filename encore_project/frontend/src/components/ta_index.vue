<template>
  <div>
    <Sidebar />

    <Content />

    <Footer />
    <!-- {{ tas }} -->
  </div>
</template>
<script>
import Sidebar from "../views/layout/Sidebar.vue";
import Content from "../views/layout/Content.vue";
import Footer from "../views/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Content,
    Sidebar,
    Footer, //풋터 컴포넌트 추가
  },
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
  },
  data() {
    return {
      tas: [],
    };
  },
};
</script>
