//overlay ruler grid onto PDF doc
//Copyright 2014 djulien17@thejuliens.net.  All rights reserved.
//to use: copy to Adobe scripts folder, then open PDF in Adobe Reader or Acrobat and click the XY grid button
//

//
//<AcroButtons name="showXY" version="2.0" "modified="7/18/2014 11:25:27" id="7:18:2014:11:25:27">
// This script was created by AcroButtons from Windjack Solutions, www.windjack.com
// Do not modify the code inbetween the AcroButtons Tags
// Moving or changing tag positions can compromise AcroButtons' ability to handle
// this file
// Place Extra-AcroButton Code in the following "Code Above" Section
//

//<CodeAbove>
function showXY()
{try{
//	app.alert("show x,y");
	var rect = this.getPageBox("Crop", this.pageNum); //visible portion
	app.alert("rect = " + rect[0] + ", " + rect[1] + ", " + rect[2] + ", " + rect[3] + ", zoom " + this.zoom);
	var w = rect[2] - rect[0], h = rect[1] - rect[3];
/*
	var xy = this.getField("myXY");
	if (!xy)
	{
		/ *var* / xy = this.addField("myXY", "text", this.pageNum, [0, h - 72, 0 + 72/2, h - 0]); //left, top, right, bottom (rel to bottom of page)
		xy.borderStyle = border.d; //dashed
		xy.display = display.visible;
		xy.fillColor = ["RGB", 1, 0.9, 0.9]; //color.red;
	}
	xy.value = this.zoom + "%"; //"x, y"; //this.mouseX + "," + this.mouseY;
*/
	var annos = this.getAnnots({ nPage: this.pageNum});
	if (annos)
		for (var i = 0; i < annos.length; ++i)
			if ((annos[i].type == "Line") && annos[i].name.match(/^xygrid/)) annos[i].destroy(); //remove previous grid
	var delta = 72; //1"
	if (this.zoom > 500) delta /= 10;
//	else if (this.zoom > 1000) delta /= 100;
//	w * 100 / this.zoom;
	var numcre = 0;
	for (var x = 0; x < w; x += delta)
	{
		this.addAnnot({type: "Line", name: "xygridx" + x, page: this.pageNum, points: [[x, 0], [x, h]], contents: "x=" + round(x/72) + "\"", strokeColor: color.red});
		++numcre;
	}
	for (var y = 0; y < h; y += delta)
	{
		this.addAnnot({type: "Line", name: "xygridy" + y, page: this.pageNum, points: [[0, h - y], [w, h - y]], contents: "y=" + round(y/72) + "\"", strokeColor: color.red});
		++numcre;
	}
	app.alert(numcre + " lines drawn: w " + w + ", h " + h);
}catch (exc) { app.alert("EXC@" + exc.fileName + "." + exc.lineNumber + ": " + exc.message); }}

function round(val)
{	
	return Math.round(1000 * val)/1000;
}
//</CodeAbove>

//<JSCodeSnippet name="ImageData6">
var strData6showXY = 
"FFFDFDFDFFFDFDFDFF797979FFF7F7F7FFFFFFFFFFBCBCBCFFF1F1F1FFC0C0C0FFFBFBFBFFFCFCFC" +
"FFFBFBFBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFDFDFDFFFDFDFDFF797979" +
"FFF7F7F7FFFFFFFFFFBCBCBCFFF1F1F1FFC0C0C0FFFBFBFBFFFCFCFCFFFBFBFBFFFFFFFFFFFFFFFF" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFDFDFDFFFDFDFDFF010101FFFDFDFDFFFFFFFFFF7F7F7F" +
"FFFFFFFFFF7E7E7EFFFFFFFFFFF9F9F9FFFDFDFDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFC0C0C0FFFAFAFAFFFAFAFAFFF3F3F3FF7F7F7FFF7F7F7FFFFCFCFCFFF7F7F7FF828282FFF7F7F7" +
"FFFFFFFFFFFBFBFBFFFBFBFBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFF3F3F3FFF3F3F3" +
"FFFFFFFFFF7C7C7CFF080808FFF4F4F4FFFFFFFFFF7F7F7FFFF9F9F9FFFFFFFFFFFCFCFCFFFFFFFF" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFF8F8F8FFF8F8F8FF040404FFF7F7F7FFFFFFFF" +
"FF7E7E7EFFFCFCFCFF808080FFFBFBFBFFFCFCFCFFFAFAFAFFFCFCFCFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFFFFFFFFC0C0C0FFF1F1F1FFF1F1F1FFFFFFFFFFF7F7F7FFFFFFFFFFFCFCFCFFFFFFFFFF7F7F7F" +
"FFF9F9F9FFFFFFFFFFF6F6F6FFFFFFFFFFFAFAFAFFFFFFFFFFFBFBFBFFFBFBFBFFC0C0C0FFC0C0C0" +
"FFC0C0C0FF7E7E7EFF828282FF7F7F7FFF808080FF7F7F7FFF434343FF7F7F7FFF818181FF838383" +
"FF7F7F7FFF7E7E7EFF7F7F7FFFFCFCFCFFFCFCFCFFC0C0C0FFFBFBFBFFFBFBFBFFFFFFFFFFF7F7F7" +
"FFF9F9F9FFFBFBFBFFF9F9F9FF868686FFECECECFF000000FFF3F3F3FFFFFFFFFF797979FFFFFFFF" +
"FFF8F8F8FFF8F8F8FFC0C0C0FFFCFCFCFFFCFCFCFFF9F9F9FFFFFFFFFFFFFFFFFFFCFCFCFFFCFCFC" +
"FF808080FFFFFFFFFF000000FFFFFFFFFFFFFFFFFF7F7F7FFFFFFFFFFFFCFCFCFFFCFCFCFFC0C0C0" +
"FFFBFBFBFFFBFBFBFFFDFDFDFFFBFBFBFFFCFCFCFFFAFAFAFFFAFAFAFF7D7D7DFFF7F7F7FFFFFFFF" +
"FF7E7E7EFF7F7F7FFFFCFCFCFFF9F9F9FFFDFDFDFFFDFDFDFFC0C0C0FFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFBFBFBFFFFFFFFFFFCFCFCFFFFFFFFFF7F7F7FFFFDFDFDFFF9F9F9FF7F7F7FFFFFFFFFFFF9F9F9" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFDFDFDFF7E7E7EFFF8F8F8FFFEFEFEFF7E7E7EFFFCFCFCFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFC0C0C0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7F7F7FFFFFFFFF" +
"FFFFFFFFFFF7F7F7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFFFFFFFFFFFFFF" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFAFAFAFFFBFBFBFFFAFAFAFFFFFFFFFFFBFBFBFFFAFAFA" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFFFFFFFFFAFAFAFFFBFBFBFFFAFAFAFFFFFFFFFFFBFBFBFFFAFAFAFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFFFFFFFFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0" +
"FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0";
//</JSCodeSnippet>

//<JSCodeSnippet name="ImageData7">
var strData7showXY = 
"FFFDFDFDFFFDFDFDFF797979FFF7F7F7FFFFFFFFFFBCBCBCFFF1F1F1FFC0C0C0FFFBFBFBFFFCFCFC" +
"FFFBFBFBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFDFDFDFFFDFDFDFF797979" +
"FFF7F7F7FFFFFFFFFFBCBCBCFFF1F1F1FFC0C0C0FFFBFBFBFFFCFCFCFFFBFBFBFFFFFFFFFFFFFFFF" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFDFDFDFFFDFDFDFF010101FFFDFDFDFFFFFFFFFF7F7F7F" +
"FFFFFFFFFF7E7E7EFFFFFFFFFFF9F9F9FFFDFDFDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFC0C0C0FFFAFAFAFFFAFAFAFFF3F3F3FF7F7F7FFF7F7F7FFFFCFCFCFFF7F7F7FF828282FFF7F7F7" +
"FFFFFFFFFFFBFBFBFFFBFBFBFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFF3F3F3FFF3F3F3" +
"FFFFFFFFFF7C7C7CFF080808FFF4F4F4FFFFFFFFFF7F7F7FFFF9F9F9FFFFFFFFFFFCFCFCFFFFFFFF" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFF8F8F8FFF8F8F8FF040404FFF7F7F7FFFFFFFF" +
"FF7E7E7EFFFCFCFCFF808080FFFBFBFBFFFCFCFCFFFAFAFAFFFCFCFCFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFFFFFFFFC0C0C0FFF1F1F1FFF1F1F1FFFFFFFFFFF7F7F7FFFFFFFFFFFCFCFCFFFFFFFFFF7F7F7F" +
"FFF9F9F9FFFFFFFFFFF6F6F6FFFFFFFFFFFAFAFAFFFFFFFFFFFBFBFBFFFBFBFBFFC0C0C0FFC0C0C0" +
"FFC0C0C0FF7E7E7EFF828282FF7F7F7FFF808080FF7F7F7FFF434343FF7F7F7FFF818181FF838383" +
"FF7F7F7FFF7E7E7EFF7F7F7FFFFCFCFCFFFCFCFCFFC0C0C0FFFBFBFBFFFBFBFBFFFFFFFFFFF7F7F7" +
"FFF9F9F9FFFBFBFBFFF9F9F9FF868686FFECECECFF000000FFF3F3F3FFFFFFFFFF797979FFFFFFFF" +
"FFF8F8F8FFF8F8F8FFC0C0C0FFFCFCFCFFFCFCFCFFF9F9F9FFFFFFFFFFFFFFFFFFFCFCFCFFFCFCFC" +
"FF808080FFFFFFFFFF000000FFFFFFFFFFFFFFFFFF7F7F7FFFFFFFFFFFFCFCFCFFFCFCFCFFC0C0C0" +
"FFFBFBFBFFFBFBFBFFFDFDFDFFFBFBFBFFFCFCFCFFFAFAFAFFFAFAFAFF7D7D7DFFF7F7F7FFFFFFFF" +
"FF7E7E7EFF7F7F7FFFFCFCFCFFF9F9F9FFFDFDFDFFFDFDFDFFC0C0C0FFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFBFBFBFFFFFFFFFFFCFCFCFFFFFFFFFF7F7F7FFFFDFDFDFFF9F9F9FF7F7F7FFFFFFFFFFFF9F9F9" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFDFDFDFF7E7E7EFFF8F8F8FFFEFEFEFF7E7E7EFFFCFCFCFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFC0C0C0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7F7F7FFFFFFFFF" +
"FFFFFFFFFFF7F7F7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFFFFFFFFFFFFFF" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFAFAFAFFFBFBFBFFFAFAFAFFFFFFFFFFFBFBFBFFFAFAFA" +
"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0C0C0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFFFFFFFFFAFAFAFFFBFBFBFFFAFAFAFFFFFFFFFFFBFBFBFFFAFAFAFFFFFFFFFFFFFFFFFFFFFFFF" +
"FFFFFFFFFFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0" +
"FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0FFC0C0C0";
//</JSCodeSnippet>


// Icon Generic Stream Object
//<JSCodeSnippet name="ButtonIconDef">
var oIconshowXY = null;
if(app.viewerVersion < 7){
oIconshowXY = {count: 0, width: 17, height: 17,
read: function(nBytes){return strData6showXY.slice(this.count, this.count += nBytes);}};
}else{
oIconshowXY = {count: 0, width: 17, height: 17,
read: function(nBytes){return strData7showXY.slice(this.count, this.count += nBytes);}};
}
//</JSCodeSnippet>

//<JSCodeSnippet name="EventCode">
var DoCmdshowXY = 
"// Enter your JavaScript code here\n" +
"// Or select one or more JavaScrippets\n" +
"showXY();"
//</JSCodeSnippet>

//<JSCodeSnippet name="ButtonObjDef">
var oButObjshowXY = 
{cName: "showXY",
cExec: DoCmdshowXY,
cEnable: "event.rc = (app.doc != null)",
cMarked: "event.rc = false",
cTooltext: "show X,Y",
nPos: -1,
cLabel: "show X,Y"};
//</JSCodeSnippet>
if(oIconshowXY != null)
    oButObjshowXY.oIcon = oIconshowXY;

try{app.removeToolButton("showXY");}catch(e){}

//<JSCodeSnippet name="TryAddBut">
try
{
//</JSCodeSnippet>
//<JSCodeSnippet name="AddButtonfn">
    app.addToolButton(oButObjshowXY);
//</JSCodeSnippet>
if((event.type == "Doc") && (app.viewerVersion >= 7))
    global["showXY_InDoc"] = "7:18:2014:11:25:27";
else
    global["showXY"] = "7:18:2014:11:25:27";
//<JSCodeSnippet name="CatchAddBut">
}catch(e)
{
   if((global.bReportNameCollision != null) && (global.bReportNameCollision == true))
   {
    var strError = 'Cannot Install AcroButton "oButObjshowXY"\n';
    strError += ':' + e.fileName + '\n';
    strError += 'Error: ' + e.name + '\n';
    strError += e.message + '\n';
    strError += 'Possible Name conflict';
    app.alert(strError,0,0,'AcroButton Error');
   }
}
//</JSCodeSnippet>
 
//</AcroButtons>
