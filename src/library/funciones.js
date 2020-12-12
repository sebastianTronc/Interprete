import codeMirror from 'codemirror-minified';
import 'codemirror-minified/lib/codemirror.css';
import 'codemirror-minified/theme/moxer.css';
import 'codemirror-minified/mode/javascript/javascript';
import 'codemirror-minified/addon/edit/closebrackets';

export const instanciaEditor = () => {
    var text = codeMirror.fromTextArea(document.getElementById("codigo"),{
        mode: "javascript",
        theme: "moxer",
        lineNumbers: true,
        indentUnit: 3,
        tabSize: 3,
        indentWithTabs: true,
        cursorHeight: .9,
        autoCloseBrackets: true
    });
    return text;
}