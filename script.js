const getData = () => {
    $.ajax({
        url: "./assets/lista.json",
        data: "",
        success: (data) => {
            processData(data);
        },
        dataType: "html"
    });
}

const processData = (data) => {
    const myData = JSON.parse(data);
    const myTable = $('.myTable');

    $(myData).each((index, value) => {
        let content = `
        <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showModal('${value.model}','${value.type}','${value.img}','${value.link}')">
            <th scope="row">${value.id}</th>
            <td>${value.model}</td>
            <td>${value.type}</td>
            <td><img class="images" src="${value.img}" alt=""></td>
        </tr>
        `;
        myTable.append(content);
    });
}

const showModal = (model, type, img, link) => {
    let content = `
    <div class="col-md-12">
        <div class="card" >
            <img src="${img}" class="card-img-top" alt="text">
            <div class="card-body">
                <h5 class="card-title">${model}</h5>
                <p class="card-text">${type}</p>
            </div>
        </div>
    </div>`;

    const cardFooter = $('.modal-footer');
    let myButtons = `
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <a href="${link}" target="_blank" class="btn btn-primary">More info</a>
        `;
    cardFooter.html(myButtons);

    $('.detail').html(content);
    $('#exampleModal').modal('show');
}

$(() => {
    getData();
})