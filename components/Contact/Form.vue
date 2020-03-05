<template>
  <div class="content">
    <div class="title-form">
      CONTACT US
    </div>
    <div class="form">
      <div class="input-container">
        <div class="background ">
          <span class="icon" />
        </div>
        <div class="form-data">
          <b-form-input class="input-field" name="name" />
        </div>
      </div>
      <div />
    </div>
    <div class="form">
      <div class="input-container">
        <div class="background ">
          <span class="icon-email-container">
            <span class="icon-email" />
          </span>
        </div>
        <div class="form-data">
          <b-form-input class="input-field" name="email" />
        </div>
      </div>
      <div />
    </div>
    <div class="form">
      <textarea class="content-form" rows="4" cols="8" />
      <b-button class="button-submit">
        SEND
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormContact"
}
</script>

<style lang="scss" scoped>
.content {
  width: 60%;
  height: fit-content;
  margin: 15% auto;
  position: relative;
  z-index: 1;
}
.title-form {
  color: white;
  font-size: 47px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8%;
  height: 20%;
}
.form {
  text-align: center;
  margin-bottom: 12%;
  position: relative;
}
.form-data {
  display: block;
  margin-left: 12%;
}
.input-container {
  position: relative;
  width: auto;
  height: auto;
}
.background {
  background: url("~assets/img/contact/Rectangle-193.svg");
  background-size: cover;
  width: 50px;
  height: 100%;
  position: absolute;
  float: left;
}
.icon {
  background: url("~assets/img/contact/Person.svg");
  background-size: cover;
  left: 15%;
  width: 65%;
  height: 65%;
  position: absolute;
  top: 12%;
}
.icon-email-container {
  background: url("~assets/img/contact/Rectangle-195.svg");
  background-size: cover;
  width: 70%;
  height: 60%;
  position: absolute;
  left: 12%;
  top: 22%;
}

.icon-email {
  background: url("~assets/img/contact/Polygon-4.svg");
  background-size: cover;
  left: 3%;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 7%;
}
.input-field {
  background-color: grey;
  border: 2px solid #424242;
  cursor: pointer;
  color: white;
  font-size: 22px;
}
.input-field:focus {
  border: 2px solid #424242;
  border-left: 0px;
}
.content-form {
  background-color: #424242;
  width: 100%;
  color: white;
  font-size: 22px;
}
.button-submit {
  float: right;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
}
@media (max-width: 992px) {
  .container {
    width: 40%;
    height: 40%;
    position: relative;
  }
  .content {
    width: 100%;
    height: fit-content;
    margin: 20% auto;
    position: relative;
    z-index: 1;
  }
}
</style>
