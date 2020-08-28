function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings
}

Pizza.prototype.pizzaCost = function () {
  let cost = 0;
  let size = (this.size);
  let toppings = (this.toppings);
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


$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    const size = $("#size").val();
    const toppings = $("#toppings").val();



    let myPizza = new Pizza(size, toppings);
    console.log(size, toppings);
    let myCost = myPizza.pizzaCost();
    console.log(myCost);
    $("#cost").text(myCost);
    $("#cost-div").show();


  })
});