<script>
var date = new Date();
var month = date.getMonth() + 1;
var strDate = date.getDate();
if (month >= 1 && month <= 9) {
    month = "0" + month;
}
if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
}
var url ="https://img.owspace.com/Public/uploads/Download/"+ date.getFullYear() + "/" + month + strDate+".jpg"
document.getElementById("onewaycal").setAttribute('src',url)
</scirpt>