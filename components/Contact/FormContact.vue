<template>
  <b-form-group class="content">
    <div class="title-form">
      CONTACT US
    </div>
    <div>
      <b-row class="form">
        <b-col cols="2" class="background-icon">
          <div for="input-large" class="input-user-icon" />
        </b-col>
        <b-col cols="10" class="background-input">
          <b-form-input class="input" />
        </b-col>
      </b-row>
    </div>
    <div class="form">
      <b-row>
        <b-col cols="2" class="background-icon">
          <span class="icon-email-container">
            <span class="icon-email" />
          </span>
        </b-col>
        <b-col cols="10" class="background-input">
          <b-form-input class="input" />
        </b-col>
      </b-row>
    </div>
    <div class="form">
      <textarea class="content-form" rows="4" cols="8" />
      <b-button class="button-submit">
        SEND
      </b-button>
    </div>
  </b-form-group>
</template>

<script>
export default {
  name: "FormContact"
}
</script>

<style lang="scss" scoped>
.form {
  text-align: center;
  margin-bottom: 12%;
}
.content {
  width: 60%;
  height: fit-content;
  margin: 15% auto;
  position: relative;
  z-index: 1;
}
.title-form {
  color: white;
  font-size: 3.7vw;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8%;
  height: 20%;
}
.background-icon {
  background-color: grey;
  border: 2px solid #424242;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
}
.input-user-icon {
  background: url(~assets/img/contact/Person.svg);
  background-size: cover;
  width: 34px;
  height: 100%;
}
.background-input {
  padding-left: 0;
  padding-right: 0;
}
.input {
  background-color: grey;
  border: 2px solid #424242;
  color: white;
  cursor: context-menu;
  width: 100%;
  margin-left: 0;
}
.form-data {
  width: 100%;
}
.icon-email-container {
  background: url("~assets/img/contact/Rectangle-195.svg");
  background-size: cover;
  width: 40px;
  height: 25px;
  position: absolute;
  top: 9%;
}

.icon-email {
  background: url("~assets/img/contact/Polygon-4.svg");
  background-size: cover;
  width: 40px;
  height: 15px;
  left: 0;
  position: absolute;
  top: 2%;
}
.content-form {
  border: 2px solid #424242;
  background-color: grey;
  width: 110%;
  color: white;
  font-size: 18px;
  margin-left: -15px;
  cursor: context-menu;
}
.button-submit {
  float: right;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
  border: 5px solid #424242;
}
@media (max-width: 992px) {
  .content {
    width: 80%;
  }
  .content-form {
    width: 107%;
  }
}
@media (max-width: 768px) {
  .content-form {
    width: 108%;
  }
  .content {
    width: 100%;
  }
}
@media (max-width: 576px) {
  .content-form {
    width: 110%;
  }
}
</style>
