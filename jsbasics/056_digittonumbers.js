// questions 56. Convert digit/number to words ?

digitWord = num => {
    console.log("input Number : " + num);
    let out = "In words = ";
    let array = ['Zero','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
    let split = num.toString().split('');
    let re = 0;
    for (let i = 0; i < split.length; i++) {
           re = split[i];
           let q = array[re];
           out = (out + q);
    }
    console.log(out);
}
digitWord(2514);