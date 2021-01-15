const textInputs = document.querySelectorAll('input[type=text]');
const checkInputs = document.querySelectorAll('input[type=checkbox]');
const scoreOutPut = document.querySelector('.total');

const calcPoints = (
  goals,
  assists,
  sog,
  bs,
  shp,
  shtBonus,
  htrBonus,
  blkBonus,
  pointBonus
) => {
  let score = goals * 8.5 + assists * 5 + sog * 1.5 + bs * 1.3 + shp * 2;
  let bonuses = 0;
  shtBonus ? (bonuses += 3) : bonuses;
  htrBonus ? (bonuses += 3) : bonuses;
  blkBonus ? (bonuses += 3) : bonuses;
  pointBonus ? (bonuses += 3) : bonuses;

  const total = score + bonuses;
  return total;
};

const submit = () => {
  const goals = +textInputs[0].value;
  const assists = +textInputs[1].value;
  const sog = +textInputs[2].value;
  const blksht = +textInputs[3].value;
  const shp = +textInputs[4].value;
  const shtBonus = checkInputs[0].checked;
  const htrBonus = checkInputs[1].checked;
  const blkBonus = checkInputs[2].checked;
  const pntBonus = checkInputs[3].checked;

  const score = calcPoints(
    goals,
    assists,
    sog,
    blksht,
    shp,
    shtBonus,
    htrBonus,
    blkBonus,
    pntBonus
  );
  console.log(score);
};
