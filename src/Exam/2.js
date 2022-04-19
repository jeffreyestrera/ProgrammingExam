function One () {
  var given_array = [3,1,5,6,9,2,8,7];
  var missing = [];

  const output = () => {
    var max = 9;
      var min = 1;
      

      for(let i=min; i<=max; i++){
      if(!given_array.includes(i)){
        missing.push(i);
      }
      }

      console.log(missing[0])
  }

output()

  return (
    <h4>{missing[0]}</h4>
  )
}

export default One