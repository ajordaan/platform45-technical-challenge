<template>
  <div class="formWrapper">
    <div class="form">
      <div class="inputWrapper">
        <label class="inputLabel" for="name">Name</label>
        <input
          class="input"
          type="text"
          placeholder="Enter email"
          name="name"
        />
      </div>
      <div class="inputWrapper">
        <label class="inputLabel" for="name">Gender</label>
        <div class="iconRow">
          <form-icon
            class="genderIconGap"
            text="Male"
            :imageUrl="'mars-symbol.svg'"
          ></form-icon>
          <form-icon
            class="genderIconGap"
            text="Female"
            :imageUrl="'venus-symbol.svg'"
          ></form-icon>
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
      <div class="inputWrapper membershipRow">
        <label class="inputLabel" for="name">Membership</label>
        <div class="iconRow">
          <form-icon
            class="membershipIconSpacing"
            text="Classic"
            :imageUrl="'card.svg'"
          ></form-icon>
          <form-icon
            class="membershipIconSpacing"
            text="Silver"
            :imageUrl="'card.svg'"
          ></form-icon>
          <form-icon
            class="membershipIconSpacing"
            text="Gold"
            :imageUrl="'card.svg'"
          ></form-icon>
        </div>
      </div>
      <div class="buttonsWrapper">
        <button id="cancelBtn" class="button">CANCEL</button>
        <button id="saveBtn" class="button">SAVE</button>
      </div>
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
$inputBgColour: #f5f8f9;
$selectedIconBgColour: #b1bfcd;

$invalidColour: #ff9200;
.input {
  margin-left: 30px;
  height: 50px !important;
  border-style: none !important;
  background-color: $inputBgColour !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

button {
  padding: 25px 55px;
  width: 160px;
  margin-bottom: 20px;
}

#saveBtn {
  margin-left: 20px;
  background-color: #60e6c5;
  color: white;
  border-style: none;
}
#saveBtn:hover {
  background-color: darken(#60e6c5, 10%);
}

#cancelBtn {
  background-color: $inputBgColour;
  border-style: none;
}

#cancelBtn:hover {
  background-color: darken($inputBgColour, 10%);
}

.genderIconGap {
  margin-bottom: 15px;
}
.genderIconGap:first-of-type {
  margin-right: 50px;
}
.membershipRow {
  margin-top: 60px;
}

.membershipIconSpacing {
  margin-right: 20px;
  margin-bottom: 15px;
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
  width: 130px;
  text-align: left;
}

.inputWrapper {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
.buttonsWrapper {
  margin-top: 75px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.formWrapper {
  margin: 10%;
  width: 80%;
}

.form {
  width: 90%;
  margin: 0 auto;
}

.iconRow {
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  //flex-grow: 4;
}

@media screen and (max-width: 1023px) {
  .form {
    width: 100%;
  }

  .inputLabel {
    display: block;
    margin-bottom: 10px;
  }

  .icon .form {
    width: 100%;
  }

  button {
    width: 100%;
    font-size: 18px;
  }

  #saveBtn {
    margin-left: 0;
  }

  .inputWrapper {
    margin-bottom: 30px;
    display: block;
  }

  .input {
    max-width: 100% !important;
    margin-left: 0;
  }

  .membershipIconSpacing {
    margin-right: 25px;
    margin-bottom: 15px;
  }
}
</style>
