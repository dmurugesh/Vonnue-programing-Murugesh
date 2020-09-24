// question 58. Permutations in which n people can occupy r seats in a theatre ?

perumation = (people, seat) => {
      let fact1 = 1;
      let fact2 = 1;
      let diff = (parseInt(people) - parseInt(seat));
      for (let i = 1; i <= people; i++) {
          fact1 *= i;
      }
      for (let j = 1; j <= diff; j++) {
        fact2 *= j;
    }
    let result = parseInt(fact1 / fact2);
    console.log('The No. of ways : ' + result);
}
perumation(8, 5);