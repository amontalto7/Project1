const calendar1 = document.querySelector('.datepicker-start');
M.Datepicker.init(calendar1,{
    showClearBtn: true,
    autoClose: true,
});
 
const calendar2 = document.querySelector('.datepicker-end');
M.Datepicker.init(calendar2,{
    showClearBtn: true,
    autoClose: true,
});