  function One () {
    var given_array = [2,3,1,5,6,9,2,6,1,8,7];
    var result = 0;
    const output = () => {
      result =
        Math.max(...given_array.filter((element, index, array) => 
        array.indexOf(element) !== index
        )
      )

      console.log(result)
    }

    output()

    return (
      <h4>{result}</h4>
    )
  }

  export default One