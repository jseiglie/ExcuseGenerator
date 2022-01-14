window.onload = function() {
  let who = ["The dog", "A raccoon", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "abduct", "crushed", "broke"];
  let what = ["my homework", "my laptop", "my brain", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let selWho = Math.floor(Math.random() * who.length);
  let rSelWho = who[selWho];
  //console.log(rSelWho);

  let selAct = Math.floor(Math.random() * action.length);
  let rSelAct = action[selAct];
  //console.log(rSelAct);

  let selWhat = Math.floor(Math.random() * what.length);
  let rSelWhat = what[selWhat];
  //console.log(rSelWhat);

  let selWhen = Math.floor(Math.random() * when.length);
  let rSelWhen = when[selWhen];
  //console.log(rSelWhen);

  console.log(`${rSelWho} ${rSelAct} ${rSelWhat} ${rSelWhen}`);

  ////////////////////////////////////
  let select = array => {
    let selectarray = Math.floor(Math.random() * array.length);
    let sarray = array[selectarray];
    return sarray;
  };

  console.log(
    `${select(who)} ${select(action)} ${select(what)} ${select(when)}`
  );
};

arrArr = [[who], [what]];
console.log(arrArr);
