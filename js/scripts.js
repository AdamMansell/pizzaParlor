// ----------- Pizza Object Declaration -----------
function Pizza(size, toppingsInput, totalCost) {
  this.size = size,
    this.toppingsInput = toppingsInput,
    this.totalCost = totalCost
}
// ----------- pizzaCost Method -----------
Pizza.prototype.pizzaCost = function () {
  let small = 12;
  let medium = 15;
  let large = 20;
  let pepperoni = 2;
  let sausage = 3;
  let anchovies = 5;
  this.size == "smallVal" ? this.totalCost += small : this.totalCost;
  this.size == "medVal" ? this.totalCost += medium : this.totalCost;
  this.size == "lrgVal" ? this.totalCost += large : this.totalCost;
  this.toppingsInput.includes("pep") == true ? this.totalCost += pepperoni : this.totalCost;
  this.toppingsInput.includes("saus") == true ? this.totalCost += sausage : this.totalCost;
  this.toppingsInput.includes("anch") == true ? this.totalCost += anchovies : this.totalCost;
  return this.totalCost;
}
// ----------- UI Logic -----------
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let size = $("#size").val();
    let totalCost = 0;
    let toppingsInput = $("input:checkbox[name=tops]:checked").map(function () {
      return $(this).val();
    }).get();
    let myPizza = new Pizza(size, toppingsInput, totalCost);
    myPizza.pizzaCost();
    $("#cost").text(myPizza.totalCost);
    $("#cost-div").show();
  })
});