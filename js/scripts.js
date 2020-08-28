function Pizza(size, toppings) {
  this.size = size,
    this.toppings = [toppings]
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
  size == "legVal" ? cost += large : cost;
  // toppings.includes("pep") ? cost += peporoni : cost;
  toppings.includes("pep", 0) ? console.log("true") : console.log("false");
  toppings.includes("saus") ? cost += sausage : cost;
  toppings.includes("anch") ? cost += anchovies : cost;
  console.log(cost);
  return cost;
}

// function topCollect(toppingsInput){
//   let topArray = [];
//   for (var i = 0; i < toppingsInput.length; i++) {
//     let top = toppingsInput.length[i];
//     console.log(top);
//     top.checked ? topArray.push(top) : top;
//   }
//   console.log(topArray);
//   return topArray;
// }


$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    let size = $("#size").val();
    let toppings = $("input:checkbox[name=tops]:checked").map(function () {
      return $(this).val();
    }).get();
    console.log(toppings)
    let myPizza = new Pizza(size, toppings);
    let myCost = myPizza.pizzaCost();
    console.log(myCost);
    $("#cost").text(myCost);
    $("#cost-div").show();
  })
});