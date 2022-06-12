class calculationModel {  
  n1  = 0;
  n2 = 0;
  result = 0;
  add(){
   this.result = this.n1 + this.n2;
  }
  subtract(){
   this.result = this.n1 - this.n2;
  }
  multiply(){
   this.result = this.n1 * this.n2;
  }
  divide(){
   this.result = this.n1 / this.n2;
  }
 }
 const model = new calculationModel();
 const onaddadavalChange = (evt) => {
  model.n1 = evt.target.valueAsNumber;
 };
 const onaddaddovomChange = (evt) => {
  model.n2 = evt.target.valueAsNumber;
 };
 const displayResult = () => {
  document.getElementById('result')
   .innerText = model.result;
 };
 const onBtnAddClick = () => {
  model.add();
  displayresult();
 };
 const onBtnSubtractClick = () => {
  model.subtract();
  displayresult();
 }
 const onBtnMultiplyClick = () => {
  model.multiply();
  displayresult();
 }
 const onBtnDivideClick = () => {
  model.divide();
  displayresult();
 }
 window.addEventListener('load', () => {
  let addadaval = document.getElementById('addad aval');
  addadaval.addEventListener('change', onaddadavalChange);
  let addaddovom = document.getElementById('addad dovom');
  addaddovom.addEventListener('change', onaddaddovomChange);
  document.getElementById('btnAdd')
   .addEventListener('click', onBtnAddClick);
  document.getElementById('btnSubtract')
   .addEventListener('click', onBtnSubtractClick);
  document.getElementById('btnMultiply')
   .addEventListener('click', onBtnMultiplyClick);
  document.getElementById('btnDivide')
   .addEventListener('click', onBtnDivideClick);
 });
