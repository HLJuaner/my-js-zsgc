window.onload=function(){
    //顶部日期
    function time(){
        var nowDate=new Date().toLocaleString() ;
        var today=document.getElementById("today");
        today.innerHTML=nowDate;
    }
    setInterval(time,1000);

    var nav=document.getElementById("nav_list")
    var sMan=document.getElementById("sMan")
    var addS=document.getElementById("addS")
    var s1=document.getElementById("s1")
    var s2=document.getElementById("s2")
    var section= document.getElementById("wrap").getElementsByTagName("section");
    /*切换nav>li的active,显示对应的模块*/
    var li=nav.children;
    for(var i=0;i<li.length;i++){
        li[i].onclick=function(){
            for(var i=0;i<li.length && i<section.length;i++) {
                if (this == li[i]) {
                    li[i].className = "active";
                    section[i].style.display = "block";
                } else {
                    li[i].className = "";
                    section[i].style.display = "none";
                }
            }
        }
    }
    
    var alterBtn=document.getElementById("alterBtn");
    var delBtn=document.getElementById("delBtn");
    var submit=document.getElementById("submit");
    var addNum=document.getElementById("addNum");
    var addName=document.getElementById("addName");
    var addUsername=document.getElementById("addUsername");
    var addBranch=document.getElementById("addBranch");
    var addPhone=document.getElementById("addPhone");
    var addDate=document.getElementById("addDate");
    var addSalary=document.getElementById("addSalary");

    var table_kehu=document.getElementById("table_kehu");
    var tbody=table_kehu.createTBody();
    var numId=table_kehu.tBodies[0].rows.length;/*编号变量*/

    //向表格中插入数据
    var data=[
        {"num":1,"name":"何丽娟","userNmae":"admin","branch":"技术部","phone":15110051976,"date":2014-1-1,"salary":20000},
        {"num":2,"name":"赵佳妮","userNmae":"user12","branch":"人事部","phone":15154655455,"date":2014-1-2,"salary":8000},
        {"num":3,"name":"于致远","userNmae":"nihao","branch":"财务部","phone":13512345555,"date":2015-1-1,"salary":9000},
        {"num":4,"name":"朱棣","userNmae":"hello","branch":"销售部","phone":13822525636,"date":2017-1-1,"salary":10000},
        {"num":5,"name":"赵志","userNmae":"word","branch":"技术部","phone":18755585888,"date":2017-2-1,"salary":8500},
        {"num":6,"name":"何晓敏","userNmae":"nihao3","branch":"人事部","phone":17454545454,"date":2015-1-1,"salary":9500},
        {"num":7,"name":"李思其","userNmae":"wind","branch":"财务部","phone":13758585455,"date":2012-1-1,"salary":15000},
        {"num":8,"name":"王宝强","userNmae":"fool","branch":"销售部","phone":78958586685,"date":2012-1-1,"salary":17000}
    ];

    //添加
    var form=document.getElementById("form");
    var input=form.getElementsByTagName("input");
    var span=form.getElementsByTagName("span");
    


    for(var i=0;i<input.length;i++){

        input[i].onblur=function(){
            if(this.value === ""){
                this.parentElement.children[0].style.visibility = "visible";
                 submit.onclick=function(){
                    alert("请输入");
                 }
            }else{
               submit.onclick=add();
            }
        }
    }


    function add() {
        var tr=document.createElement('tr');
        var td=document.createElement('td');
        td.innerHTML=addNum.value;//将编号自增插入td
        tr.appendChild(td);
        var td=document.createElement('td');
        td.innerHTML = addName.value;//姓名
        tr.appendChild(td);
        var td=document.createElement('td');
        td.innerHTML=addUsername.value;//用户名
        tr.appendChild(td);
        var td=document.createElement("td");
        td.innerHTML=addBranch.value;//部门
        tr.appendChild(td);
        var td=document.createElement("td");
        td.innerHTML=addPhone.value;//电话
        tr.appendChild(td);
        var td=document.createElement("td");
        td.innerHTML=addDate.value;//日期
        tr.appendChild(td);
        var td=document.createElement("td");
        td.innerHTML=addSalary.value;//薪资
        tr.appendChild(td);
        //删除、更改
        var td=document.createElement("td");
        var delBtn=document.createElement("button");
        delBtn.innerHTML="删除";
        delBtn.className="delBtn";
        delBtn.onclick=function(){
            var tr=this.parentNode.parentNode;
            var pname=tr.cells[1].innerHTML;
            if(confirm("确定要删除 "+pname+" 的信息吗?")){
                table_kehu.deleteRow(tr.rowIndex);
            }
        }//删除
        td.appendChild(delBtn);
        var alterBtn=document.createElement("button");
        td.appendChild(alterBtn);
        alterBtn.innerHTML="更改";
        alterBtn.className="alterBtn";
        alterBtn.onclick=function() {
            var ce = this.parentNode.parentNode.cells;
            if (/.*更改.*/.test(this.innerHTML)) {
                for (var i = 0; i < ce.length - 1; i++) {
                    var txt = document.createElement('input');
                    txt.type = 'text';
                    txt.style.height=27+"px";
                    var ci = ce[i];
                    txt.value = ci.innerHTML;
                    ci.innerHTML = ' ';
                    ci.appendChild(txt);
                }
                this.innerHTML= '保存';
            } else {
                for (var i = 0; i < ce.length - 1; i++) {
                    var ci = ce[i];
                    ci.innerHTML = ci.children[0].value;
                }
                this.innerHTML = '更改';
            }
        }//更改
        tr.appendChild(td);

        tbody.appendChild(tr);
        alert("您已添加"+ addName.value+"成功");
    }//添加

    //删除
    for(var i=0;i<data.length;i++){
        var tr=tbody.insertRow();
        for(var key in data[i]){
            tr.insertCell().innerHTML=data[i][key];
        }
        //删除
        var td=tr.insertCell();
        var delBtn=document.createElement("button");
        delBtn.innerHTML="删除";
        delBtn.className="delBtn";
        delBtn.onclick=function(){
            var tr=this.parentNode.parentNode;
            var pname=tr.cells[1].innerHTML;
            if(confirm("确定要删除 "+pname+" 的信息吗?")){
                table_kehu.deleteRow(tr.rowIndex);
            }
        }//删除
        td.appendChild(delBtn);

        //更改
        var alterBtn=document.createElement("button");
        td.appendChild(alterBtn);
        alterBtn.innerHTML="更改";
        alterBtn.className="alterBtn";
        alterBtn.onclick=function() {
            var ce = this.parentNode.parentNode.cells;
            if (/.*更改.*/.test(this.innerHTML)) {
                for (var i = 0; i < ce.length - 1; i++) {
                    var txt = document.createElement('input');
                    txt.type = 'text';
                    txt.style.height=27+"px";
                    var ci = ce[i];
                    txt.value = ci.innerHTML;
                    ci.innerHTML = ' ';
                    ci.appendChild(txt);
                }
                this.innerHTML= '保存';
            } else {
                for (var i = 0; i < ce.length - 1; i++) {
                    var ci = ce[i];
                    ci.innerHTML = ci.children[0].value;
                }
                this.innerHTML = '更改';
            }
        }//更改
    }
    table_kehu.appendChild(tbody);

    //查询
    var select_btn=document.getElementById("select_btn");
    select_btn.onclick=function(){
        for(var i=0;i<table_kehu.tBodies[0].rows.length;i++){
            var sTable=table_kehu.tBodies[0].rows[i].cells[1].innerHTML.toLowerCase();
            var sName=document.getElementById("sName");
            var sNameTxt=sName.value.toLowerCase();
            var attr=sNameTxt.split(" ");
            table_kehu.tBodies[0].rows[i].style.background="";
            if(sNameTxt==""){
                table_kehu.tBodies[0].rows[i].style.background="";
            }else{
                for(var j=0;j<attr.length;j++){
                    if(sTable.search(attr[j])!==-1){
                        table_kehu.tBodies[0].rows[i].style.background="#a1809a";
                    }
                }
            }
        }
    }//查询
}







