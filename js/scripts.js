function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.pizzaCost = function () {
  let cost;
  let size = (this.size);
  let toppings = (this.toppings);
  let small = 12;
  let medium = 15;
  let large = 20;
  let pep = 2;
  let saus = 3;
  let anch = 5;
  size = smallVal ? cost += small : cost;
  size = medVal ? cost += medium : cost;
  size = legVal ? cost += large : cost;
  toppings = pep ? cost += peporoni : cost;
  toppings = saus ? cost += sausage : cost;
  toppings = anch ? cost += anchovies : cost;
}


(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    const size = $("#pizza-size").val();
    const toppings = $("#pizza-toppings").val();
    


    let myPizza = new Pizza(size, toppings);
    let myCost = myPizza.pizzaCost();


  })
});