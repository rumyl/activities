
    var items = [];

    function addItem() {
      var input = document.getElementById("textInput");
      var newItem = input.value;
      if (newItem !== "") {
        items.push(newItem);
        input.value = "";
        renderItems();
      }
    }

    function sortItems() {
      items.sort();
      renderItems();
    }

    function unsortItems() {
      items.reverse();
      renderItems();
    }

    function renderItems() {
      var itemList = document.getElementById("itemList");
      itemList.innerHTML = "";
      for (var i = 0; i < items.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(items[i]));
        itemList.appendChild(li);
      }
    }
