function One () {
  var orders = [
    {
      "item": "1L Mango Ice Cream",
      "order_date": "02/14/2022",
      "amount": 250,
    },
    {
      "item": "2L Cookies and Cream Ice Cream",
      "order_date": "02/15/2022",
      "amount": 450,
    },
    {
      "item": "2L French Vanilla Ice Cream",
      "order_date": "03/15/2022",
      "amount": 450,
    }
];

const newData = []

const output = () => {

    orders.forEach(element => {
      var dateDiscount = new Date(new Date(element.order_date).getMonth() + 1 + "/" + 15 + "/" + new Date(element.order_date).getFullYear());
      var orderDate = new Date(element.order_date);

      if(dateDiscount.getTime() === orderDate.getTime()){
        var discount_percetage = 0.2
        var discount = parseFloat(element.amount) * discount_percetage
        var discounted_amount = parseFloat(element.amount) - parseFloat(discount)

        newData.push({
          "item": element.item,
          "created_at": element.order_date,
          "amount": element.amount,
          "discount": discount,
          "discounted_amount": discounted_amount
        });
      }
      else{
        newData.push({
          "item": element.item,
          "created_at": element.order_date,
          "amount": element.amount,
          "discount": 0,
          "discounted_amount": element.amount
        });
      }

      
    });

    console.log(newData)
}

output();

  return (
    <>
      <center>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Created At</th>
              <th>Amount</th>
              <th>Discount</th>
              <th>Discount Amount</th>
            </tr>
          </thead>
          {
            newData.map((data, index) => {
              return(
                <tr key={index}>
                  <td>{data.item}</td>
                  <td>{data.created_at}</td>
                  <td>{data.amount}</td>
                  <td>{data.discount}</td>
                  <td>{data.discounted_amount}</td>
                </tr>
              )
            })
          }
        </table>
      </center>
    </>
    
  )
}

export default One