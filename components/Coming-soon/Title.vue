<template>
  <div class="title-coming-soon">
    <div class="content1">
      COMING SOON...
    </div>
    <div class="content2">
      365 days to go
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentComingsoon"
}
</script>

<style lang="scss" scoped>
.title-coming-soon {
  width: 50%;
  position: absolute;
  left: 40%;
  top: 25%;
  display: block;
  height: 25%;
}
.content1 {
  color: white;
  font-size: 65px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 5%;
  display: block;
}
.content2 {
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  display: block;
  margin-top: 20%;
}
@media (max-width: 992px) {
  .title-coming-soon {
    position: relative;
    left: 0%;
  }
  .content1 {
    color: white;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    position: initial;
    display: block;
    width: 100%;
  }
  .content2 {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    position: initial;
    display: block;
  }
}
</style>
