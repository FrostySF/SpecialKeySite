//editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/spk");
editor.getSession().setUseSoftTabs(true);
//output
var output = ace.edit("output");
output.setTheme("ace/theme/twilight");
output.renderer.setShowGutter(false);
output.setReadOnly(true);
document.getElementById("runrun").onclick = function(){
    output.setValue("@--\'"+editor.getValue()+"\'\n@твой код говно!!!");
}