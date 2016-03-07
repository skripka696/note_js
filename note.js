$(function () {
    var id = localStorage.getItem('id');
    if (!id) {
        localStorage.setItem('id', 0);
    }
});

$(function () {
    var notes = {
        1: {
            title: 'title',
            text: 'text',
            date: 'new Date()',
        },
        2: {
            title: 'title',
            text: 'text',
            date: 'new Date()',
        }
    };


    var form = $('#form_note');
    var title = $('#add_title');
    var text = $('#add_text');
    var button_id = $('#add_id');

    var get_id = function () {
        return localStorage.getItem('id')
    };

    var get_notes = function () {
        notes_l = JSON.parse(localStorage.getItem('notes'));
        if (!notes_l) {
            notes_l = {};
        }
        return notes_l;

    };
    var new_id = function () {
        var id = parseInt(get_id()) + 1;
        localStorage.setItem('id', id);
        return id
    };

    var set_notes = function (notes_l) {

        return localStorage.setItem('notes', JSON.stringify(notes_l));
    };

    var add_notes = function (notes_l, id) {
        var new_text = $('#add_text').val();
        var new_title = $('#add_title').val();
        id = new_id();
        notes_l[id] = {
            id_l: id,
            title: new_title,
            text: new_text,
            date: new Date()
        };
        return notes_l;
    };

    var del_notes = function (note) {
        var id = $(note).attr('data-id');

        console.log(id, notes_l[id])
        delete notes_l[id];
        set_notes(notes_l);
        $('#table_list').empty();
        $.each(notes_l, function (key, value) {
            display_notes(value)
        });
    };

    var edit_note = function (id_edit) {

        notes_l[id_edit]['text'] = text.val();
        notes_l[id_edit]['title'] = $('#add_title').val();
        notes_l[id_edit]['date'] = new Date();
        set_notes(notes_l);
        console.log(notes_l);
        $('#table_list').empty();
        $.each(notes_l, function (key, value) {
            display_notes(value)
        });
        $('#form_note')[0].reset();


    };

    var display_notes = function (item) {

        return $('#table_list').append($('#list').tmpl(item));

    };

    var notes_l = get_notes();

    $.each(notes_l, function (key, value) {
        console.log(key);
        display_notes(value)
    });

    $('#table_list').on('click', '.remove-button', function () {
        del_notes(this)
    });


    $(document).on('click', '.edit_button', function () {
        var id_edit = $(this).data('id');
        button_id.val(id_edit);
        console.log(id_edit);

        title.val(notes_l[id_edit]['title']);
        text.val(notes_l[id_edit]['text']);

    });


    form.submit(function (event) {
        event.preventDefault();
        console.log('sdfdssdf');
        console.log(button_id.val());
        if (!button_id.val()) {
            add_notes(notes_l);
            set_notes(notes_l);
            $('#table_list').empty();
            $.each(notes_l, function (key, value) {
                display_notes(value)
            });
        }
        else {
            edit_note(button_id.val())
        }

    });

});












