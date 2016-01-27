
      // Define an extended mixed-mode that understands vbscript and
      // leaves mustache/handlebars embedded templates in html mode
     var mixedMode = {
        name: "htmlmixed",
        scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                       mode: null},
                      {matches: /(text|application)\/(x-)?vb(a|script)/i,
                       mode: "vbscript"}]
      };

codeEditorTextArea = document.getElementById("txtArea");
       
      CodeMirror.commands.autocomplete = function(cm) {
        cm.showHint({hint: CodeMirror.hint.anyword});
      }
//<!-- type your HTML code here ! -->
  var editor = CodeMirror(codeEditorTextArea, {
    value: "",
    lineNumbers: true,
    mode: mixedMode,
    selectionPointer: true,
    keyMap: "sublime",
    autoCloseBrackets: true,
    matchBrackets: true,
    showCursorWhenSelecting: true,
    theme: "monokai",
     extraKeys: {"Ctrl-Space": "autocomplete",
     "Ctrl-S": function(){call_saveIt();} }
  });