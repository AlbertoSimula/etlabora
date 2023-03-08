const xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:3000/post/");

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
const prr = new XMLHttpRequest();
prr.open("GET", "http://localhost:3000/comments/");
prr.addEventListener("load", function(){
    const blocks = JSON.parse(prr.responseText);
    console.log(blocks.length);
    const comm = document.querySelector(".comments");
    blocks.forEach(function(block){
        comm.innerHTML = comm.innerHTML.concat(
            '<div class="data-card="',block.id,'">',
                    '<div class="card-body">',
                        '<p class="card-text">',block.body,'</p>',
                    '</div>',
            '</div>'
        )
    });
});

prr.send();