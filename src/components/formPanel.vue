<template>
  <div class="formWrapper">
    <div class="inputWrapper">
      <label class="inputLabel" for="name">Name</label>
      <input class="input" type="text" placeholder="Enter email" name="name" />
    </div>
    <div class="inputWrapper">
      <label class="inputLabel" for="name">Gender</label>

      <div class="iconRow">
        <div class="iconWrapper">
          <form-icon :imageUrl="'mars-symbol.svg'"></form-icon>
          <p class="iconText">Male</p>
        </div>
        <div class="iconWrapper">
          <form-icon :imageUrl="'venus-symbol.svg'"></form-icon>
          <p class="iconText">Female</p>
        </div>
      </div>
    </div>
    <div class="inputWrapper">
      <label class="inputLabel" for="date">Date of Birth</label>
      <input class="input" type="text" placeholder="01/02/1983" name="date" />
    </div>
    <div class="inputWrapper">
      <label class="inputLabel" for="email">Email</label>
      <input
        class="input"
        type="text"
        placeholder="kendall@gmail.com"
        name="email"
      />
    </div>
    <div class="inputWrapper">
      <label class="inputLabel" for="mobile">Mobile</label>
      <input
        class="input"
        type="text"
        placeholder="+91 98765 43210"
        name="mobile"
      />
    </div>
    <div class="inputWrapper">
      <label class="inputLabel" for="customer">Customer ID</label>
      <input
        class="input"
        type="text"
        placeholder="576802-ERD0348 45"
        name="customer"
      />
    </div>
  </div>
</template>

<script>
import formIcon from "./formIcon.vue";
export default {
  components: { formIcon },
};
</script>

<style lang="scss" scoped>
$inputBgColour: rgb(250, 250, 250);
.input {
  max-width: 50% !important;
  height: 50px !important;
  border-style: none !important;
  background-color: $inputBgColour !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.input:focus {
  background-color: white !important;
  border-color: #dbdbdb !important;
  border-radius: 4px !important;
  color: #363636 !important;
  border-style: solid !important;
}

.inputLabel {
  display: inline-block;
  width: 150px;
  text-align: left;
}

.inputWrapper {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}

.formWrapper {
  margin: 10%;
}

.iconRow {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.iconWrapper {
  display: flex;
  align-items: center;
}

.iconContainer {
  width: 55px;
  height: 55px;
  background: $inputBgColour;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.iconText {
  color: gray;
  margin-left: 20px;
  width: 100px;
}

@media screen and (max-width: 768px) {
  .inputLabel {
    display: block;
  }

  .inputWrapper {
    margin-bottom: 30px;
    display: block;
  }

  .input {
    max-width: 100% !important;
  }
}
</style>
