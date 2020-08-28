function Pizza(size, toppingsInput) {
  this.size = size,
    this.toppingsInput = toppingsInput
}
Pizza.prototype.pizzaCost = function () {
  let toppings = [];
  let toppingsInput = (this.toppingsInput);
  let cost = 0;
  let size = (this.size);
  let small = 12;
  let medium = 15;
  let large = 20;
  let peporoni = 2;
  let sausage = 3;
  let anchovies = 5;

  for (i = 0; i < toppingsInput.length; i++) {
    toppings.push(toppingsInput[i]);
  }
  
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
    let toppingsInput = $("input:checkbox[name=tops]:checked").map(function () {
      return $(this).val();
    })
    let myPizza = new Pizza(size, toppingsInput);
    let myCost = myPizza.pizzaCost();
    $("#cost").text(myCost);
    $("#cost-div").show();
  })
});