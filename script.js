const tipe = document.getElementById('type')
const produk = document.getElementById('product')
const paket = document.getElementById('package')
const ukuran = document.getElementById('size')
const query = document.getElementById('AddProd')


query.addEventListener('submit',error => {
    var x = 0

    if(produk.value !== 'Doughnut' && produk.value !== 'Cake' && produk.value !== 'Indonesian Cake' && produk.value !== 'Cookie'){
        alert('Wrong product name!')
        x = 1
    }

    if(tipe.value === 'Glazed Dognut' || tipe.value === 'Choco Sprinkled Dognut' || tipe.value === 'Oreo Dognut' || tipe.value === 'MonMon Dognut' || tipe.value === 'Red Velvet Cake' || tipe.value === 'Cheese Cake' || tipe.value === 'Chocolate Cake' || tipe.value === 'Nastar' || tipe.value === 'Kastengel' || tipe.value === 'Putri Salju' || tipe.value === 'MnMs Dognut Cookie' || tipe.value === 'Choco Chip Dognut Cookie' || tipe.value === 'Red Velvet Dognut Cookie'){
        alert('Type Name already exist!')
        x = 1
    }

    if(paket.value !== 'A' &&  paket.value !== 'B' && paket.value !== 'C'){
        alert('Wrong Product Package!')
        x = 1
    }
    
    if(ukuran.value !== 'Small' && ukuran.value !== 'Reguler' && ukuran.value!== 'Deluxe'){
        alert('Wrong Product Size!')
        x = 1
    }

    if(x === 1){
        error.preventDefault();
        alert('Please re-input the correct one')
    }else{
        alert('Product is added!')
    }
})

    



