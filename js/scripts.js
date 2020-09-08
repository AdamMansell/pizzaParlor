function Pizza(size, toppingsInput, totalCost) {
  this.size = size,
    this.toppingsInput = toppingsInput,
    this.totalCost = totalCost

}
Pizza.prototype.pizzaCost = function () {
  let toppings = [];
  let size = (this.size);
  let toppingsInput = (this.toppingsInput);
  let totalCost = (this.totalCost);
  let small = 12;
  let medium = 15;
  let large = 20;
  let pepperoni = 2;
  let sausage = 3;
  let anchovies = 5;

  for (i = 0; i < toppingsInput.length; i++) {
    toppings.push(toppingsInput[i]);
  }

  size == "smallVal" ? totalCost += small : totalCost;
  size == "medVal" ? totalCost += medium : totalCost;
  size == "lrgVal" ? totalCost += large : totalCost;
  toppings.includes("pep") == true ? totalCost += pepperoni : totalCost;
  toppings.includes("saus") == true ? totalCost += sausage : totalCost;
  toppings.includes("anch") == true ? totalCost += anchovies : totalCost;
  let myPizza = {size, toppingsInput, totalCost};
  return myPizza;

}
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let size = $("#size").val();
    let totalCost = 0;
    let toppingsInput = $("input:checkbox[name=tops]:checked").map(function () {
      return $(this).val();
    })
    let myPizza = new Pizza(size, toppingsInput, totalCost);
    let finalPizza = myPizza.pizzaCost();
    $("#cost").text(finalPizza.totalCost);
    $("#cost-div").show();
  })
});