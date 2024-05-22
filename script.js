var table = document.createElement("table");
table.className = "table";
var thead = document.createElement("thead");
thead.className = "thead-dark";

var tbody = document.createElement("tbody");

function create_tr()
{
    var tr_ele = document.createElement("tr");
    return tr_ele;
}
function create_th(tagname,attrname,attrvalue,content)
{
    var th_ele = document.createElement(tagname);
    th_ele.setAttribute(attrname,attrvalue);
    th_ele.innerHTML = content;
    return th_ele;
}
function create_td(tagname,content)
{
    var td_ele = document.createElement(tagname);
    td_ele.innerHTML = content;
    return td_ele; 
}
var thead_tr = create_tr()
var th1 = create_th("th","scope","col","#");
var th2 = create_th("th","scope","col","First");
var th3 = create_th("th","scope","col","Last");
var th4 = create_th("th","scope","col","Handle");

thead_tr.append(th1,th2,th3,th4);
thead.append(thead_tr);

var tbody_tr = create_tr()
var td1 = create_th("th","scope","row","1");
var td2 = create_td("td","Mark");
var td3 = create_td("td","Otto");
var td4 = create_td("td","@mdo");

tbody_tr.append(td1,td2,td3,td4);
tbody.append(tbody_tr);

var tbody_tr = create_tr()
var td1 = create_th("th","scope","row","2");
var td2 = create_td("td","Jacob");
var td3 = create_td("td","Thornton");
var td4 = create_td("td","@fat");

tbody_tr.append(td1,td2,td3,td4);
tbody.append(tbody_tr);

var tbody_tr = create_tr()
var td1 = create_th("th","scope","row","3");
var td2 = create_td("td","Larry");
var td3 = create_td("td","the bird");
var td4 = create_td("td","@twitter");

tbody_tr.append(td1,td2,td3,td4);
tbody.append(tbody_tr);

table.append(thead,tbody);
document.body.append(table);