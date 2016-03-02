$(function(){
    var id = localStorage.getItem('id');
    if (!id){
        localStorage.setItem('id', 0);
    }
});

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

var form = $('#form_note');

var get_id = function () {
    return localStorage.getItem('id')
};

var get_notes = function () {
    notes = JSON.parse(localStorage.getItem('notes'));
    if (!notes){
       notes = [];
    }
    return notes;

};
 var new_id = function () {
     var id = parseInt(get_id()) + 1;
     localStorage.setItem('id', id);
     return id
 };

var set_notes = function (notes_l) {

    return localStorage.setItem('notes', JSON.stringify(notes_l));
};

var add_notes = function (notes_l) {
    var new_text = $('#add_text').val();
    var new_title = $('#add_title').val();
    notes_l.push({id: new_id(), title: new_title, text: new_text, date: new Date()});


    return notes_l;
};

var del_notes = function () {

};

var edit_note = function () {

};

var display_notes = function () {

    return $('#table_list').html($('#list').tmpl(notes_l));

};

var notes_l = get_notes();
notes_l.forEach(function(item){
        display_notes(item);
    });


form.submit(function(event){
    event.preventDefault();
    add_notes(notes_l);
    set_notes(notes_l);
    $('#table_list').empty();
    display_notes();

});





