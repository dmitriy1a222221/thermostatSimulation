
let cooler = document.querySelector('.cooler');

let flag = true;
let collerActive = () => {
    if(!flag) {
        cooler.classList.remove('cooler-active');
        flag = !flag
        return
    } else{
        cooler.classList.add('cooler-active');
        flag = !flag
        return
    }

};
//collerActive();
let flag1 = true;
let spiral = document.querySelector('.spiral');
let rele1 = document.querySelector('.rele1');
let rele2 = document.querySelector('.rele2');


let spiralAcitve = () => {
    if(!flag1) {
        spiral.style.cssText = 'visibility: hidden; opacity: 0; z-index: -1';
        flag1 = !flag1;
        return
    } else {
        spiral.style.cssText = 'visibility: visible; opacity: 1; z-index: 2';
        flag1 = !flag1;
        return
    }
}

let range = document.querySelectorAll('.nav-item-input');
let spanCurrTemp = document.getElementById('currTemp');
range.forEach(item => {
    item.addEventListener('change', (e) => {
        let currTemp = e.target.value
        switch(item.dataset.id) {
            case 'temp':
                spanCurrTemp.innerText = `${currTemp} deg`
                console.log(currTemp)
                break
            case 'rele1':
                rele1.innerText = `${currTemp} deg`
                console.log(currTemp)
                break
            case 'rele2':
                rele2.innerText = `${currTemp} deg`
                console.log(currTemp)
                break
        }

    })
})


let thermostatLogic = () => {
    let tempInputList = document.querySelectorAll('.nav-item-input')
    let indicatorList = document.querySelectorAll('.indicator')
    let rele1State = document.querySelector('.rele1State')
    let rele2State = document.querySelector('.rele2State')

    tempInputList[1].setAttribute("disabled", "disabled")
    tempInputList[2].setAttribute("disabled", "disabled")

    if (tempInputList[0].value >= tempInputList[1].value && tempInputList[0].value >= tempInputList[2].value) {
        indicatorList[0].style.cssText = 'background-color: #ff0300'
        rele1State.innerText = 'On'
        collerActive()
        indicatorList[1].style.cssText = 'background-color: #ff0300'
        rele2State.innerText = 'On'
        spiralAcitve()
    } else {
        indicatorList[0].style.cssText = 'background-color: #000000'
        rele1State.innerText = 'Off'
        collerActive()
        indicatorList[1].style.cssText = 'background-color: #000000'
        rele2State.innerText = 'Off'
        spiralAcitve()
    }

}