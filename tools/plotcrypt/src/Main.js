function main () {
    this.HSize = 5;
}
main.prototype.createNewDialog = function fn0 () {
    var _fh = new FormHandler();
    var dialog = _fh.getH("New QuestChain",this.HSize);
    dialog += _fh.getInput({
            id:"dia_qc_name",
            type:"text",
            value:"QuestChain name"
        });
    dialog += _fh.getInput({
            id:"dia_qc_key",
            type:"text",
            value:"QuestChain Key"
        });
    dialog = _fh.getDiv({
            id:"dialog_new_questchain",
            class:"ui-div ui-corner-all"
        },dialog);
    return dialog;
}
