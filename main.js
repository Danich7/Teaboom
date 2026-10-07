document.querySelectorAll(".js-type").forEach(function(elem) {
  elem.addEventListener("change", function() {
    if (this.checked) {
      let art = this.dataset.art;
      let cost = this.dataset.cost;
      let old = this.dataset.old;
      
      document.querySelector(".product__art").textContent = art;
      document.querySelector(".product__cost").textContent = cost;
      document.querySelector(".product__old").textContent = old;
    }
  });
});
