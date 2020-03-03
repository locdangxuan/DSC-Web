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
        <b-form-input class="input-field" name="name" />
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
        <b-form-input class="input-field" name="email" />
      </div>
      <div />
    </div>
    <textarea class="content-form" rows="4" cols="8" />
    <b-button class="button-submit">
      SEND
    </b-button>
  </div>
</template>

<script>
export default {
  name: "FormContact"
}
</script>

<style lang="scss" scoped>
.content {
  width: 400px;
  height: fit-content;
  margin: 10% auto;
}
.title-form {
  color: white;
  font-size: 52px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8%;
}
.form {
  text-align: center;
  margin-bottom: 12%;
}
.input-container {
  display: flex;
  width: 100%;
}
.background {
  background: url("~assets/img/common/Rectangle-193.svg");
  background-size: cover;
  width: 12%;
  height: 50px;
  position: relative;
}
.icon {
  background: url("~assets/img/common/Person.svg");
  background-size: cover;
  left: 15%;
  width: 65%;
  height: 65%;
  position: absolute;
  top: 12%;
}
.icon-email-container {
  background: url("~assets/img/common/Rectangle-195.svg");
  background-size: cover;
  width: 70%;
  height: 60%;
  position: absolute;
  left: 12%;
  top: 22%;
}

.icon-email {
  background: url("~assets/img/common/Polygon-4.svg");
  background-size: cover;
  left: 3%;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 8%;
}

.input-field {
  width: 90%;
  background-color: grey;
  outline: none;
  border: 3px solid #424242;
  cursor: pointer;
  color: white;
  font-size: 25px;
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
</style>
