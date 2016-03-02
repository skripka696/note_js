var notes = [
    {
        id: 1,
        title: 'title 2',
        text:'note 1',
        date: ''
    },
    {
        id: 2,
        title: 'title 2',
        text: 'note 2',
        date: ''
    }

];

var list_of_notes = $('#list_of_notes');

var form = $('#form_note');

var get_notes = function () {
    notes = JSON.parse(localStorage.getItem('notes'));
    if (!notes){
       notes = [];
    }
    return notes;

};

var set_notes = function (notes_l) {
    return localStorage.setItem('notes', JSON.stringify(notes_l));
};

var add_notes = function (notes_l) {
    var new_note = $('#add_note').val();
    notes_l.push({text: new_note});
    return notes_l;
};

var del_notes = function () {

};

var edit_note = function () {

};

var display_notes = function (item) {
    var list_n = list_of_notes.append('<h3>' + item.text + item.date + item.title+'</h3><br>');
    return list_n
};

var notes_l = get_notes();
notes_l.forEach(function(item){
        display_notes(item);
    });


form.submit(function(event){
    event.preventDefault();
    add_notes(notes_l);
    set_notes(notes_l);
    $('#list_of_notes').empty();
    notes_l.forEach(function(item){
        display_notes(item)
    });

});





