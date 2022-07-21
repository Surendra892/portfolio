$(function(){

    /**---------------Cascading Dropdown Starts-------------------*/

    var categories = ["Select a Category","Footwear","Electronics","Clothes"];

    var footwear = ["Select a Type","Shoes","Slippers"];
    var shoes = ["Select the Product","Lee Boot","Nike Casuals","Levi's"];
    var slippers = ["Select the Product","Paragon","Sparks","Woodland"];
    
    var electronics = ["Select a Type","Mobiles","Laptops"];
    var mobiles = ["Select the Product","Samsung","realme","Redmi","OnePlus"];
    var laptops = ["Select the Product","Dell","HP","Acer","Macbook"];

    var clothes = ["Select a Type","Men's Clothes", "Women's Clothes"];
    var mensclothes = ["Select the Product","Jeans","Suite","Shirts","T-Shirts"];
    var womensclothes = ["Select the Product","Saries","Chudidhar","Panjabi"];

   
    var subcategories = [];
    var products = [];
    var productimg = [
        "../Images/leeboot.jpg","../Images/nikecasuals.webp",
        "../Images/levis.webp","../Images/paragon.jpg","../Images/sparks.webp",
        "../Images/woodland.webp","../Images/samsung.webp","../Images/realme fone.webp",
        "../Images/redmi.png","../Images/oneplus.webp","../Images/dell.jpg","../Images/hp.jpg",
        "../Images/acer.jpg","../Images/macbook.jpg","../Images/jeans.jpg","../Images/suite.webp",
        "../Images/shirts.jpg","https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces",
        "../Images/saries.jpg","../Images/chudidhar.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpwNX_z7pwOn5KIwSoxI2dL1g4K7hVSSRtg&usqp=CAU"
    ];

    function LoadCategories(){
        for(var items of categories)
        {
            var options = document.createElement("option");
            options.text = items;
            options.value = items;
            $("#dropdown1").append(options)
        }
    };

    function LoadsubCategories(){
        $("#dynimg").attr("src","")
        $("#dropdown3").html("");
        $("#dropdown2").html("");
        for(items of subcategories)
        {
            var options = document.createElement("option");
            options.text = items;
            options.value = items;
            $(options).appendTo("#dropdown2");
        }
    };

   function LoadProducts(){
        $("#dynimg").attr("src","")
        $("#dropdown3").html("");
        for(items of products)
        {
            var options = document.createElement("option");
            options.text = items;
            options.value = items;
            $(options).appendTo("#dropdown3");
        }
    };
    
    LoadCategories();
    LoadsubCategories();
    LoadProducts();

    $("#dropdown1").on("change",()=>{
        var categoryname = $("#dropdown1").val();
        switch(categoryname)
        {
            case "Footwear":
                subcategories = footwear;
                LoadsubCategories();
                break;
            case "Electronics":
                subcategories = electronics;
                LoadsubCategories();
                break;
            case "Clothes":
                subcategories = clothes;
                LoadsubCategories();
                break;
            }
    });

    $("#dropdown2").on("change",()=>{
        var product = $("#dropdown2").val();
        switch(product)
        {
            case "Shoes":
                products = shoes;
                LoadProducts();
                break;
            case "Slippers":
                products = slippers;
                LoadProducts();
                break;
            case "Mobiles":
                products = mobiles;
                LoadProducts();
                break;
            case "Laptops":
                products = laptops;
                LoadProducts();
                break;
            case "Men's Clothes":
                products = mensclothes;
                LoadProducts();
                break;
            case "Women's Clothes":
                products = womensclothes;
                LoadProducts();
                break;
        }
    });
    $("#dropdown3").on("change",()=>{
        var productname = $("#dropdown3").val();
        switch(productname.toLowerCase())
        {
            case "lee boot":
                $("#dynimg").attr("src",`${productimg[0]}`)
                break;
            case "nike casuals":
                $("#dynimg").attr("src",`${productimg[1]}`)
                break;
            case "levi's":
                $("#dynimg").attr("src",`${productimg[2]}`)
                break;
            case "paragon":
                $("#dynimg").attr("src",`${productimg[3]}`)
                break;
            case "sparks":
                $("#dynimg").attr("src",`${productimg[4]}`)
                break;
            case "woodland":
                $("#dynimg").attr("src",`${productimg[5]}`)
                break;
            case "samsung":
                $("#dynimg").attr("src",`${productimg[6]}`)
                break;
            case "realme":
                $("#dynimg").attr("src",`${productimg[7]}`)
                break;
            case "redmi":
                $("#dynimg").attr("src",`${productimg[8]}`)
                break;
            case "oneplus":
                $("#dynimg").attr("src",`${productimg[9]}`)
                break;
            case "dell":
                $("#dynimg").attr("src",`${productimg[10]}`)
                break;
            case "hp":
                $("#dynimg").attr("src",`${productimg[11]}`)
                break;
            case "acer":
                $("#dynimg").attr("src",`${productimg[12]}`)
                break;
            case "macbook":
                $("#dynimg").attr("src",`${productimg[13]}`)
                break;
            case "jeans":
                $("#dynimg").attr("src",`${productimg[14]}`)
                break;
            case "suite":
                $("#dynimg").attr("src",`${productimg[15]}`)
                break;
            case "shirts":
                $("#dynimg").attr("src",`${productimg[16]}`)
                break;
            case "t-shirts":
                $("#dynimg").attr("src",`${productimg[17]}`)
                break;
            case "saries":
                $("#dynimg").attr("src",`${productimg[18]}`)
                break;
            case "chudidhar":
                $("#dynimg").attr("src",`${productimg[19]}`)
                break;
            case "panjabi":
                $("#dynimg").attr("src",`${productimg[20]}`)
                break;
        }
          
        
    });


    /**-------------- Cascading Dropdown End ---------------------------*/

    /**---------------------Date And Time  Starts--------------------*/
    var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
            var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; 

            function LoadTime(){
                var now = new Date();
                document.getElementById("time").innerHTML=now.toLocaleTimeString();
            }
            function LoadSalute(){
                var username = prompt("Enter Name");
                if(username==undefined){
                    var now = new Date();
                    var hrs = now.getHours();
                    if(hrs<12){
                        document.getElementById("icon").className="bi bi-brightness-high";
                        document.getElementById("salute").innerHTML=`Hello! Good Morning`;
                    } else if( hrs>12 && hrs<=17) {
                        document.getElementById("icon").className="bi bi-sun-fill";
                        document.getElementById("salute").innerHTML=`Hello! Good AfterNoon`;
                    }else if ( hrs>17 && hrs<=23){
                        document.getElementById("icon").className="bi bi-sun-set";
                        document.getElementById("salute").innerHTML=`Hello! Good Evening`;
                    }
                } else {
                    var now = new Date();
                    var hrs = now.getHours();
                    if(hrs<12){
                        document.getElementById("icon").className="bi bi-brightness-high";
                        document.getElementById("salute").innerHTML=`Hello! ${username} Good Morning`;
                    } else if( hrs>=12 && hrs<=17) {
                        document.getElementById("icon").className="bi bi-sun-fill";
                        document.getElementById("salute").innerHTML=`Hello! ${username} Good AfterNoon`;
                    }else if ( hrs>17 && hrs<=23){
                        document.getElementById("icon").className="bi bi-sun-set";
                        document.getElementById("salute").innerHTML=`Hello! ${username} Good Evening`;
                    }
                }
                
            }
            function LoadDate(){
                var now = new Date();
                document.getElementById("date").innerHTML=` ${now.getDate()}- ${months[now.getMonth()]}-${now.getFullYear()}`;

            };
            setInterval(LoadTime,1000);
            LoadSalute();
            LoadDate();
        /**---------------Date And Time End-------------------------*/

        /**---------------TitleCase  Starts-------------------------*/
        $("#Txt").on("blur",()=>{
            var str=document.getElementById("Txt").value;
            var arrStr=str.split(" ");
            var String=""
            for( var i=0;i<arrStr.length;i++)
            {
                String += arrStr[i].charAt(0).toUpperCase() + arrStr[i].substring(1).toLowerCase() + " ";
                document.getElementById("Txt").value=String;
            };
        });
        $("#Txt").on("keyup",()=>{
            var str=document.getElementById("Txt").value;
            var arrStr=str.split(" ");
            var String=""
            for( var i=0;i<arrStr.length;i++)
            {
                String += arrStr[i].charAt(0).toUpperCase() + arrStr[i].substring(1).toLowerCase() + " ";
                $("#TitleCase-Para").html(String);
            };
        });
        /**---------------TitleCase  End-------------------------*/


        /**---------------EMI Calculator  Starts-------------------------*/

            $("#rangeAmount").on("change",()=>{
                document.getElementById("txtAmount").value=document.getElementById("rangeAmount").value;
            });
            $("#rangeYear").on("change",()=>{
                document.getElementById("txtYear").value=document.getElementById("rangeYear").value;
            });
            $("#rangeRate").on("change",()=>{
                document.getElementById("txtRate").value= document.getElementById("rangeRate").value;
            });
            $("#CalculateEmi").on("click",()=>{
                if($("#txtAmount").val()=="" && $("#txtYear").val()=="")
                {
                    $("#result").html("Enter required feilds").css("color","red");   
                } else{
                    if($("#txtRate").val()!="")
                    {
                        var p = parseInt(document.getElementById("txtAmount").value);
                        var n = parseInt(document.getElementById("txtYear").value)*12;
                        var r = parseFloat(document.getElementById("txtRate").value)/100/12;
                        var EMI = p*r/(1-(Math.pow(1/(1+r),n)));
                        $("#result").html(`EMI: ${Math.round(EMI)}`).css("color","black")
                    }else{
                        $("#result").html("Enter rate of interest").css("color","red");
                    }
                }
            });
        /**---------------EMI Calculator  End-------------------------*/

        /**---------------Mouse Event Starts-------------------------*/
        redColor=()=>document.getElementById("msg").innerHTML=`Sample Text`.fontcolor("red");
        blueColor=()=>document.getElementById("msg").innerHTML=("Sample Text").fontcolor("blue");
        greenColor=()=>document.getElementById("msg").innerHTML=`Sample Text`.fontcolor("green");
        emptyText=()=>document.getElementById("msg").innerHTML="";
        /**---------------Mouse Event  End-------------------------*/

            
                
                
            
    

 

});