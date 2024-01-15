$('#addButton').click(function(){
    $('form').slideToggle();
});

$('#finished-button').click(function(){
    $('#itens-concluidos').slideToggle();
})

$('body').on('submit', function(e){
    e.preventDefault();

    const novaatividade = $('#newtask').val();
    const taskstodo = $(`<li> ${novaatividade} </li>`);

    $(taskstodo).appendTo('.listadeafazeres');

    $('#newtask').val('');


})

$('.listadeafazeres').on('click', function(d){

    $(d.target).appendTo('.finished-list');

})

$('.finished-list').on('click', function(g){

    $(g.target).appendTo('.listadeafazeres');

})
