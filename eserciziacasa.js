let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.addEventListener("load", function(){
    const cards = JSON.parse(xhr.responseText);
    const tbody = document.querySelector("div");
    cards.forEach(function(card){
        tbody.innerHTML = tbody.innerHTML.concat(
            '<div class="data-card="',card.id,'">',
                '<div class="card text-bg-secondary col-3">',
                    '<div class="card-body">',
                        '<h5 class="card-title">',card.title,'</h5>',
                        '<p class="card-text">',card.body,'</p>',
                    '</div>',
                '</div>',
            '</div>'
        )
    });
});

xhr.send();