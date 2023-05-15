const ratingButtons = document.querySelectorAll(".rating-number");
const ratingButtonsArr = [...ratingButtons]; //SO ARRAY METHODS CAN BE PERFORMED ON THE NODELIST
const ratingRadio = document.querySelectorAll(".rating-radio");
let actualRating = 0;

const thankYouSection = document.querySelector(".thank-you");
const ratingSection = document.querySelector(".ratings-selection");
const submitBtn = document.querySelector(".submit");

ratingButtons.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    // ratingRadio[i].checked = true;
    actualRating = i + 1;
    document.querySelector(
      ".selected-rating-number"
    ).innerHTML = `${actualRating}`;
    // console.log(actualRating);

    ratingRadio[i].click(); //Changed to Click method so the change in the radio button is recognised, rather than just having its value changed.
  });
});

ratingRadio.forEach((radio, i) => {
  //When the radio changes, we want to check its boolean value and make changes to its curresponding button based on said bool.

  radio.addEventListener("change", () => {
    if (radio.checked) {
      ratingButtonsArr[i].classList.remove("inactive-state");
      ratingButtonsArr[i].classList.add("active-state");

      // CREATE AN ARRAY CONTAINING ALL OTHER BTNs EXCEPT THIS ONE
      const backToZero = ratingButtonsArr.slice();
      backToZero.splice(i, 1);

      // REMOVE THE ACTIVE STATES FOR ALL OTHER BUTTONS EXCEPT THE ONE CLICKED
      backToZero.forEach((btz) => {
        btz.classList.add("inactive-state");
        btz.classList.remove("active-state");
      });
      // console.log(backToZero);
    }
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault;
  if (actualRating === 0) {
    alert("Please select a rating");
  } else {
    ratingSection.style.display = "none";
    thankYouSection.style.display = "flex";
  }
});
