// Object for answer the player can choise.
function Answer () {
    this.target = "break";
    this.text = "";
    this.action = [];
}
Answer.prototype.set = function fn0 (tar,txt,actions) {
    this.target = tar;
    this.text = txt;
    this.action = actions;
}
Answer.prototype.addAction = function fn1 (act) {
    this.action.push(act);
}

// Object that contains one dialog part(a dialog is an question with different answers).
function Dialog () {
    this.id = 0;
    this.text = "";
    this.answers = [];
    this.action = [];
}
Dialog.prototype.set = function fn2 (i,txt) {
    this.id = i;
    this.text = txt;
}
Dialog.prototype.addAnswer = function fn3 (answer) {
    this.answers.push(answer);
}
Dialog.prototype.addAction = function fn4 (act) {
    this.action.push(act);
}
// Quests contain all dialogs for one quest
function Quests () {
    this.id = 0;
    this.name = "";
    this.dialogs = []
}
Quests.prototype.set = function fn5 (i,nam) {
    this.id = i;
    this.name = nam;
}
Quests.prototype.addDialog = function fn6 (dialog) {
    this.dialogs.push(dialog);
}
// QuestChain contains all quests with questions, answers and actions of the hole quest chain.
// the key is used for encode all in clear text readable parts.
function QuestChain () {
    this.name = "";
    this.key = "";
    this.quests = [];
}
QuestChain.prototype.set = function fn7 (nam,ke) {
    this.name = nam;
    this.key = ke;
}
QuestChain.prototype.addQuest = function fn8 (quest) {
    this.quests.push(quest);
}