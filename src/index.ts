
var cartItem;
var cartList = [];
var total = 0;
var table = document.getElementById('show-table');
let booklist = [
{
	id:"72849",
	name:"The Alchemist",
	auther:"Paulo Coelho",
	price:189
},
{
	id:"89049",
	name:"Atomic habits",
	auther:"James Clear",
	price:178
},
{
	id:"86769",
	name:"The Monk Who Sold His Ferrari",
	auther:"Robin Sharma",
	price:152
},
{
	id:"72889",
	name:"The 7 Habits of Highly Effective People",
	auther:"Stephen R. Covey",
	price:199
},
{
	id:"96768",
	name:"Ikigai: The Japanese secret to a long and happy life",
	auther:"Héctor García and Francesc Miralles",
	price:359
},
{
	id:"68473",
	name:"The Theory of Everything: The Origin and Fate of the Universe",
	auther:"Stephen Hawking",
	price:158
},
{
	id:"56749",
	name:"Three Thousand Stitches: Ordinary People, Extraordinary Lives",
	auther:"Sudha Murthy",
	price:79
},
{
	id:"13264",
	name:"How To Use The Power Of Prayer: A motivational guide to transform your life",
	auther:"Dr. Joseph Murphy",
	price:178
},
{
	id:"75549",
	name:"The Pursuit of Happiness: A Book of Studies and Strowings",
	auther:"Daniel G. Brinton",
	price:99
},
{
	id:"23849",
	name:"The 5 AM Club: Own Your Morning, Elevate Your Life",
	auther:"Robin Sharma",
	price:210
}
];

function edit(book)
{
    $('.toast').toast('show');
	booklist.forEach(item =>{
		if(item.name == book){
			item["quantity"] = 1;
			item["subtotal"] = item.price;
			const bookExists = cartList.some(item => item.name === book);
			if(bookExists) {
				item["quantity"] = item["quantity"] + 1;
				item["subtotal"] = item["subtotal"] + item.price;
			}
			else{
			cartList.push(item);
		}

			
		}
	});
  }


   

function removeItem(id){
  cartList.splice(id,1);
  total = 0;
  renderCartTable();
}
function addQuantity(index){
  cartList[index].quantity = cartList[index].quantity + 1; 
  cartList[index].subtotal = cartList[index].subtotal + cartList[index].price;
  renderCartTable();
 }

  function removeQuantity(index){
    cartList[index].quantity = cartList[index].quantity - 1; 
    cartList[index].subtotal = cartList[index].subtotal - cartList[index].price;
    if(cartList[index].quantity<0){
    	removeItem(index);
    }
    renderCartTable();
  }
       function renderCartTable() {
       	console.log(cartList,total);
       	document.getElementById("list").style.display = "none";
        document.getElementById("cart").style.visibility = "visible";
        var html = '';
        var ele = document.getElementById("show-table");
        ele.innerHTML = ''; 

        html += "<table border='1|1'>";
        html += "<tr><th>ID</th>";
        html += "<th>Book Name</th>";
        html += "<th>Book Auther</th>";
        html += "<th>Price</th>";
        html += "<th>Quantity</th>";
        html += "<th>Subtotal</th>";
        html += "<th>Action</th></tr>";
        var GrandTotal = 0;
        for (let i = 0; i < cartList.length; i++) {
     

            html += "<tr>";
            html += "<td>" + cartList[i].id + "</td>";
            html += "<td>" + cartList[i].name + "</td>";
            html += "<td>" + cartList[i].auther + "</td>";
            html += "<td>" + cartList[i].price + "</td>";
            html += "<td><button onclick='addQuantity(\"" + i + "\", this);'/>+  </button>"+ cartList[i].quantity + "</span><button onclick='removeQuantity(\"" + i + "\", this);'/>  -</button></td>";
            html += "<td>"+ cartList[i].subtotal + "</td>";
            html += "<td><button onclick='removeItem(\"" + i + "\",this);'>Remove</button></td>";
            html += "</tr>";
			total=total+cartList[i].subtotal;

        }
        document.getElementById("showtotal").innerHTML = total.toString();
        html += "</table>";
        ele.innerHTML = html;
    }
    function home(){
    	document.getElementById("list").style.display = "grid";
    	document.getElementById("cart").style.visibility = "hidden";
    	cartList = [];
    	total = 0;
    }





