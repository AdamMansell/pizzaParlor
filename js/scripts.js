function Pizza(size, toppings) {
  this.size = size,
    this.toppings = [toppings]
}

Pizza.prototype.pizzaCost = function () {
  let cost = 0;
  let size = (this.size);
  let toppings = [this.toppings];
  console.log(size, toppings);
  let small = 12;
  let medium = 15;
  let large = 20;
  let peporoni = 2;
  let sausage = 3;
  let anchovies = 5;
  size == "smallVal" ? cost += small : cost;
  size == "medVal" ? cost += medium : cost;
  size == "legVal" ? cost += large : cost;
  toppings == "pep" ? cost += peporoni : cost;
  toppings == "saus" ? cost += sausage : cost;
  toppings == "anch" ? cost += anchovies : cost;
  console.log(cost);
  return cost;
}

function TopCollect(){
  let topArray = [];
  for (var i = 0; i < toppings.length; i++) {
    var top = toppings.length[i];
    if (top.is(':checked') === false) {
      continue;
    } else if (top.is(':checked')) {
      topArray.push(top);
    }
  }
  console.log(topArray);
  return topArray;
}

  $(document).ready(function () {
    $("#form").submit(function (event) {
      event.preventDefault();
      let size = $("#size").val();
      let toppingsInput = [($("#peporoni").val()), ($("#sausage").val()), ($("#anchovies").val())];
      let toppings = toppingsInput.TopCollect();

      let myPizza = new Pizza(size, [toppings]);
      console.log(size, toppings);
      let myCost = myPizza.pizzaCost();
      console.log(myCost);
      $("#cost").text(myCost);
      $("#cost-div").show();
    })
  });