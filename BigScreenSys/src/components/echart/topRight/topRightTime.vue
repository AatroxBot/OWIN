<template>
  <div class="calendar">
    <input
      type="text"
      v-model="date"
      @focus="focus()"
      @blur="blur()"
      placeholder="Pick a date"
    />
    <div class="calendar-layout" v-if="active" @mousedown.prevent>
      <div class="calendar-header">
        <div class="row">
          <i class="material-icons" @click="setPreviousMonth()"> 1 </i>
          <div class="calendar-title">
            {{ monthYearFormatted }}
          </div>
          <i class="material-icons" @click="setNextMonth()"> 2 </i>
        </div>
        <div class="calendar-days">
          <div class="day" v-for="day in days" :key="day">
            {{ day | trimThreeChar }}
          </div>
        </div>
      </div>
      <div class="calendar-body">
        <div
          class="calendar-row"
          v-bind:class="{ 'swipe-left': swipeLeft, 'swipe-right': swipeRight }"
          v-for="(row, index) in calendarDays"
          :key="index"
        >
          <div
            class="calendar-day"
            :class="{ disabled: isDisabled(cell), selected: isSelected(cell) }"
            v-bind:style="{ height: cellHeightUnit }"
            v-for="(cell, index) in row"
            :key="index"
            @click="selectDay(cell)"
          >
            {{ cell.day }}
          </div>
        </div>
      </div>
      <div class="calendar-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "datePickers",
  data: () => ({
    date: "",
    activeDate: "202101",
    activeDay: "",
    active: false,
    days: ["一", "二", "三", "四", "五", "六", "日"],
    monthes: {
      "01": "一月",
      "02": "二月",
      "03": "三月",
      "04": "四月",
      "05": "五月",
      "06": "六月",
      "07": "七月",
      "08": "八月",
      "09": "九月",
      "10": "十月",
      "11": "十一月",
      "12": "十二月",
    },
    calendarDays: [],
    cellHeight: "",
    swipeLeft: false,
    swipeRight: false,
  }),
  filters: {
    trimThreeChar(item) {
      return item.substr(0, 3);
    },
  },
  computed: {
    monthYearFormatted() {
      // Returns the current month name followed by the current year
      return (
        this.monthes[this.activeDate.substr(4, 2)] +
        " " +
        this.activeDate.substr(0, 4)
      );
    },
    cellHeightUnit() {
      return this.cellHeight + "px";
    },
  },
  methods: {
    focus() {
      this.active = true;
      this.cellHeight = this.$el.querySelector("input").offsetWidth / 7;
    },
    blur() {
      this.active = false;
    },
    getCurrentDate() {
      // Returns today's date with format YYYY/MM/DD
      return new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    },
    getCurrentDay() {
      // Returns current day within range 1-31
      return new Date().getDate();
    },
    getCurrentMonth() {
      // Returns the current month as a 2 digits number
      return ("0" + (new Date().getMonth() + 1)).slice(-2);
    },
    getPreviousMonth(month) {
      if (parseInt(month) == 1) return "12";
      else return ("0" + (parseInt(month) - 1)).slice(-2);
    },
    getNextMonth(month) {
      if (parseInt(month) == 12) return "01";
      else return ("0" + (parseInt(month) + 1)).slice(-2);
    },
    getCurrentYear() {
      // Returns the current year as a 4 digits number
      return new Date().getFullYear();
    },
    getNumberOfDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    getNumberOfDaysInPreviousMonth(year, month) {
      if (month == "01")
        return new Date(year - 1, this.getPreviousMonth(month), 0).getDate();
      else return new Date(year, this.getPreviousMonth(month), 0).getDate();
    },
    getNumberOfDaysInNextMonth() {
      if (this.getNextMonth() == "12")
        return new Date(
          this.getCurrentYear() + 1,
          this.getNextMonth(),
          0
        ).getDate();
      else
        return new Date(
          this.getCurrentYear(),
          this.getNextMonth(),
          0
        ).getDate();
    },
    getFirstDayOfMonth(year, month) {
      if (new Date(year, parseInt(month) - 1, 1).getDay() - 1 == -1) return 6;
      else return new Date(year, parseInt(month) - 1, 1).getDay() - 1;
    },
    getLastDayOfMonth(year, month) {
      return new Date(year, parseInt(month) + 1, 0).getDay();
    },
    populateCalendar(year, month) {
      this.calendarDays = [];
      const firstDayOfMonth = this.getFirstDayOfMonth(year, month);
      const numberOfRows = Math.ceil(
        this.getNumberOfDaysInMonth(year, month) / 7
      );
      let dayNumber = 1;
      // Number of rows to display
      let increment = 1;
      for (let x = 0; x <= numberOfRows; x++) {
        let decrement = 0;
        let row = [];
        let endOfMonth = false;
        // Fills the first row with previous month ending days
        if (x == 0) {
          for (let i = 0; i < firstDayOfMonth; i++) {
            if (parseInt(month) == 1)
              row.push({
                day:
                  this.getNumberOfDaysInPreviousMonth(year, month) - decrement,
                month: this.getPreviousMonth(month),
                year: parseInt(year) - 1,
              });
            else
              row.push({
                day:
                  this.getNumberOfDaysInPreviousMonth(year, month) - decrement,
                month: this.getPreviousMonth(month),
                year: parseInt(year),
              });
            decrement++;
          }
          row.reverse();
        }
        // Fills the rest of the rows
        for (
          let y = row.length;
          y < 7 && y < this.getNumberOfDaysInMonth(year, month);
          y++
        ) {
          // While current month days are not excedeed
          if (dayNumber <= this.getNumberOfDaysInMonth(year, month)) {
            row.push({
              day: dayNumber,
              month: month,
              year: year,
            });
            dayNumber++;
          } else {
            // Fills space left
            for (let j = row.length; j < 7; j++) {
              if (parseInt(month) == 12)
                row.push({
                  day: increment,
                  month: this.getNextMonth(month),
                  year: parseInt(year) + 1,
                });
              else
                row.push({
                  day: increment,
                  month: this.getNextMonth(month),
                  year: year,
                });
              increment++;
              let t = row;
            }
          }
        }
        this.calendarDays.push(row);
      }
    },
    setPreviousMonth() {
      let activeYear = this.activeDate.substr(0, 4);
      let activeMonth = this.activeDate.substr(4, 2);
      if (parseInt(activeMonth) == 1) {
        activeYear = parseInt(activeYear) - 1;
        activeMonth = "12";
      } else {
        activeMonth = ("0" + (parseInt(activeMonth) - 1)).slice(-2);
      }
      this.activeDate = activeYear + activeMonth;
      this.populateCalendar(activeYear, activeMonth);
      this.animeSwipeRight();
    },
    setNextMonth() {
      let activeYear = this.activeDate.substr(0, 4);
      let activeMonth = this.activeDate.substr(4, 2);
      if (parseInt(activeMonth) == 12) {
        activeYear = parseInt(activeYear) + 1;
        activeMonth = "01";
      } else {
        activeMonth = ("0" + (parseInt(activeMonth) + 1)).slice(-2);
      }
      this.activeDate = activeYear + activeMonth;
      this.populateCalendar(activeYear, activeMonth);
      this.animeSwipeLeft();
    },
    selectDay(cell) {
      if (cell.month == this.getPreviousMonth(this.activeDate.substr(4, 2))) {
        this.setPreviousMonth();
      } else if (
        cell.month == this.getNextMonth(this.activeDate.substr(4, 2))
      ) {
        this.setNextMonth();
      }
      this.activeDay = ("0" + cell.day).slice(-2) + cell.month + cell.year;
      this.date =
        ("0" + cell.day).slice(-2) + "/" + cell.month + "/" + cell.year;
    },
    isSelected(cell) {
      if (("0" + cell.day).slice(-2) + cell.month + cell.year == this.activeDay)
        return true;
    },
    isDisabled(cell) {
      if (parseInt(cell.month) !== parseInt(this.activeDate.substr(4, 2)))
        return true;
    },
    animeSwipeLeft() {
      this.swipeLeft = true;
      setTimeout(() => {
        this.swipeLeft = false;
      }, 300);
    },
    animeSwipeRight() {
      this.swipeRight = true;
      setTimeout(() => {
        this.swipeRight = false;
      }, 300);
    },
  },
  mounted() {
    this.populateCalendar(2019, 1);
    this.activeDate = this.getCurrentYear() + this.getCurrentMonth();
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  font-family: "Google Sans", "Avenir";
}
#app {
  height: 100vh;
  width: 100%;
  background-color: #db3955;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 10vh 0;
}
#app .container {
  width: 300px;
  height: auto;
  font-size: 20px;
  text-align: center;
  border-radius: 4px;
  padding: 20px;
}
#app input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  background: #db3955;
  border: 2px solid #fff;
  border-radius: 4px;
  color: #fff;
  font-family: "Google Sans";
}
#app input[type="text"]:focus {
  outline: none;
  border: 2px solid #fff;
}
#app input[type="text"]::placeholder {
  color: #e9e9e9;
  font-style: italic;
}
.calendar {
  width: 100%;
  position: relative;
}
.calendar .calendar-layout {
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: appear 0.3s ease forwards;
}
.calendar .calendar-layout .calendar-header {
  width: 100%;
  background-color: #ff4364;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  box-sizing: border-box;
  padding: 0 4px;
}
.calendar .calendar-layout .calendar-header .row {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.calendar .calendar-layout .calendar-header .row .calendar-title {
  font-size: 16px;
}
.calendar .calendar-layout .calendar-header .row i {
  font-size: 16px;
  cursor: pointer;
}
.calendar .calendar-layout .calendar-header .calendar-days {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
}
.calendar .calendar-layout .calendar-header .calendar-days .day {
  max-width: calc(100% / 7);
  padding: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.calendar .calendar-layout .calendar-body {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
}
.calendar .calendar-layout .calendar-body .calendar-row {
  display: flex;
  flex-direction: row;
  transition: all 0.15s ease;
}
.calendar .calendar-layout .calendar-body .calendar-row .calendar-day {
  width: calc(100% / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f9f9f9;
  font-size: 14px;
  color: #606060;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}
.calendar .calendar-layout .calendar-body .calendar-row .calendar-day.disabled {
  background-color: #f3f3f3 !important;
}
.calendar .calendar-layout .calendar-body .calendar-row .calendar-day.selected {
  color: #ff4364;
}
.calendar
  .calendar-layout
  .calendar-body
  .calendar-row
  .calendar-day.selected:after {
  width: 100%;
}
.calendar .calendar-layout .calendar-body .calendar-row .calendar-day:after {
  content: "";
  height: 3px;
  width: 0px;
  background: #ff4364;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.calendar .calendar-layout .calendar-body .calendar-row .calendar-day:hover {
  color: #ff4364;
}
.calendar
  .calendar-layout
  .calendar-body
  .calendar-row
  .calendar-day:hover:after {
  width: 100%;
}
.calendar .calendar-layout .calendar-body .calendar-row.swipe-left {
  opacity: 0;
  transform: translateX(10px);
}
.calendar .calendar-layout .calendar-body .calendar-row.swipe-right {
  opacity: 0;
  transform: translateX(-10px);
}
@keyframes appear {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(5px);
    opacity: 1;
  }
}
</style>