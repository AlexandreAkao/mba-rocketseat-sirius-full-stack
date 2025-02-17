const prizeContainer = document.getElementById("prize-container");

export const prizeShow = ({ loyaltyCard }) => {
  if (loyaltyCard.cutsRemaining === 0)
    prizeContainer.classList.toggle("invisible");
};
