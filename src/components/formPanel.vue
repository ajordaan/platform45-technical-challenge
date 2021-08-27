<template>
  <div class="formWrapper">
    <div class="form">
      <div class="inputWrapper">
        <label class="inputLabel" for="name">Name</label>
        <input
          class="input"
          type="text"
          placeholder="Jane Doe"
          name="name"
          v-model="form.name"
        />
      </div>
      <div class="inputWrapper">
        <label class="inputLabel" for="name">Gender</label>
        <div class="iconRow">
          <form-icon
            ref="maleGender"
            @iconClicked="iconClicked('gender', 'maleGender')"
            class="genderIconGap"
            text="Male"
            :imageUrl="'mars-symbol.svg'"
          ></form-icon>
          <form-icon
            ref="femaleGender"
            @iconClicked="iconClicked('gender', 'femaleGender')"
            class="genderIconGap"
            text="Female"
            :imageUrl="'venus-symbol.svg'"
          ></form-icon>
        </div>
      </div>
      <div class="inputWrapper">
        <label class="inputLabel" for="date">Date of Birth</label>
        <input
          v-model="form.date"
          class="input"
          type="text"
          placeholder="01/02/1983"
          name="date"
        />
        <img class="inputIcon" :src="require('@/assets/images/calendar.svg')" />
      </div>
      <div class="inputWrapper">
        <div class="warningWrapper">
          <div v-if="showWarning" class="circle"></div>
          <label :class="['inputLabel', { warning: showWarning }]" for="email"
            >Email</label
          >
        </div>
        <input
          @blur="showWarning = true"
          v-model="form.email"
          :class="['input', { inputWarning: showWarning }]"
          type="text"
          placeholder="email@example.com"
          name="email"
        />
        <div v-if="showWarning" class="warningText">Invalid email address</div>
      </div>
      <div class="inputWrapper">
        <label class="inputLabel" for="mobile">Mobile</label>
        <input
          v-model="form.mobile"
          class="input"
          type="text"
          placeholder="+91 98765 43210"
          name="mobile"
        />
      </div>
      <div class="inputWrapper">
        <label class="inputLabel" for="customer">Customer ID</label>
        <input
          v-model="form.customerID"
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
            ref="classicMembership"
            @iconClicked="iconClicked('membership', 'classicMembership')"
            class="membershipIconSpacing"
            text="Classic"
            :imageUrl="'card.svg'"
          ></form-icon>
          <form-icon
            ref="silverMembership"
            @iconClicked="iconClicked('membership', 'silverMembership')"
            class="membershipIconSpacing"
            text="Silver"
            :imageUrl="'card.svg'"
          ></form-icon>
          <form-icon
            ref="goldMembership"
            @iconClicked="iconClicked('membership', 'goldMembership')"
            class="membershipIconSpacing"
            text="Gold"
            :imageUrl="'card.svg'"
          ></form-icon>
        </div>
      </div>
      <div class="buttonsWrapper">
        <button @click="clearForm()" id="cancelBtn" class="button">
          CANCEL
        </button>
        <button id="saveBtn" class="button">SAVE</button>
      </div>
    </div>
  </div>
</template>

<script>
import formIcon from "./formIcon.vue";
export default {
  data() {
    return {
      form: { email: "" },
      showWarning: false,
      membershipGroup: [],
      genderGroup: [],
    };
  },
  methods: {
    clearForm() {
      this.form = {};
      this.showWarning = false;
      const icons = this.membershipGroup.concat(this.genderGroup);

      for (const i of icons) i.unclick();
    },
    iconClicked(group, icon) {
      const iconGroup =
        group === "membership" ? this.membershipGroup : this.genderGroup;

      for (const ig of iconGroup) {
        if (ig == this.$refs[icon]) continue;

        ig.unclick();
      }
    },
  },
  components: { formIcon },
  mounted() {
    this.membershipGroup = [
      this.$refs.classicMembership,
      this.$refs.silverMembership,
      this.$refs.goldMembership,
    ];

    this.genderGroup = [this.$refs.maleGender, this.$refs.femaleGender];
  },
};
</script>

<style lang="scss" scoped>
$inputBgColour: #f5f8f9;
$selectedIconBgColour: #b1bfcd;

$invalidColour: #ff9200;
.input {
  margin-left: 30px;
  height: 55px !important;
  border-style: none !important;
  background-color: $inputBgColour !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
}

.inputIcon {
  position: absolute;
  right: 0;
  margin-right: 10px;
}

.inputWarning {
  border: 2px solid $invalidColour !important;
  padding-left: 10px;
  color: $invalidColour;
}

.warningWrapper {
  position: relative;
  width: 100px;
}

.warningText {
  position: absolute;
  right: 0;
  bottom: -20px;
  font-size: 14px;
  color: $invalidColour;
}

.warning {
  color: $invalidColour;
}

.circle {
  position: absolute;
  margin-left: -12px;
  margin-top: 2px;
  width: 8px;
  height: 8px;
  background-color: $invalidColour;
  display: inline;
  border-radius: 100%;
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
  position: relative;
  margin-bottom: 25px;
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
}

@media screen and (max-width: 1023px) {
  .buttonsWrapper {
    margin-top: 40px;
  }

  .inputIcon {
    margin-top: 17px;
  }
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
    padding: 35px 55px;
  }

  #saveBtn {
    margin-left: 0;
  }

  .inputWrapper {
    margin-bottom: 25px;
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
