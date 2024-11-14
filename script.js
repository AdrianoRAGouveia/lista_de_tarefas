$(document).ready(function() {
$('#task-form').submit(function(event) {
    event.preventDefault(); 
    const taskName = $('#task-input').val();
    if (taskName) {
        const newTask = $('<li>')
        .text(taskName)
        .append(' <button class="delete-task">Excluir</button>'); 
        $('#task-list').append(newTask);
        $('#task-input').val('');
    }
});

    $('#task-list').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

    $('#task-list').on('click', '.delete-task', function(event) {
        event.stopPropagation(); 
        $(this).parent().remove();
    });
});
