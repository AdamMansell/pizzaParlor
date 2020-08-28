function Pizza(size, toppings) {
  this.size = size,
    this.toppings = toppings
}
Pizza.prototype.pizzaCost = function () {
  let cost = 0;
  let size = (this.size);
  let toppings = this.toppings;
  console.log(size, toppings);
  let small = 12;
  let medium = 15;
  let large = 20;
  let peporoni = 2;
  let sausage = 3;
  let anchovies = 5;

  size == "smallVal" ? cost += small : cost;
  size == "medVal" ? cost += medium : cost;
  size == "lrgVal" ? cost += large : cost;
  toppings.includes("pep") == true ? cost += peporoni : cost;
  toppings.includes("saus") == true ? cost += sausage : cost;
  toppings.includes("anch") == true ? cost += anchovies : cost;
  return cost;
}
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let size = $("#size").val();
    let toppings = [];
    let toppingsInput = $("input:checkbox[name=tops]:checked").map(function () {
      return $(this).val();
    })
    for (i = 0; i < toppingsInput.length; i++) {
      toppings.push(toppingsInput[i]);
    }
    let myPizza = new Pizza(size, toppings);
    let myCost = myPizza.pizzaCost();
    $("#cost").text(myCost);
    $("#cost-div").show();
  })
});