document.querySelector('button').addEventListener('click', myClick)
function myClick() {
    let tower = document.querySelector('.main-form__tower').value;
    let floor = document.querySelector('.main-form__floor').value;
    let partition = document.querySelector('.main-form__partition').value;
   let date = document.querySelector('.main-form__date').value;
    let intervalstart = document.querySelector('.main-form-start__date').value;
    let intervalend = document.querySelector('.main-form-end__date').value;
    let comment = document.querySelector('.main-form-textarea').value;
   const data = {
        tower: tower,
        floor: floor,
        partition: partition,
        date: date,
        comment: comment,
        interval: [intervalstart, intervalend],
    };
   /*переводим обьект в форма json*/
    let json = JSON.stringify(data);
   console.log(json);
}
