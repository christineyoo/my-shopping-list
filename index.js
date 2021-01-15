function addItemOnClick() {
    $('form').on('click', 'button', function(e) {
        e.preventDefault();

        $('#shopping-list-entry').empty();

        const inputValue = $(this).siblings('input').val();
        
        let addedItem = [];
        addedItem.push($(
            `<li><span class="shopping-item">${inputValue}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`));

        $('.shopping-list').append(addedItem);
        $('input:text').val('');
    });
};

function checkItem() {
    $('ul').on('click', 'li', function(e) {
        e.preventDefault();

        $(this).children('.shopping-item').toggleClass('shopping-item__checked');
    });
};

function deleteItem() {
    $('ul').on('click', '.shopping-item-delete', function(e) {
        e.preventDefault();
        $(this).closest('li').remove();
    });
};


$(addItemOnClick);
$(checkItem);
$(deleteItem);