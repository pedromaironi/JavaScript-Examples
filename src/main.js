console.log('\tWELCOME');
/* Map functions */
/* Buscando un objetivo*/

nums = [2, 7, 11, 15], target = 9;
function buscandoObjetivo(nums, target){
let map = new Map();
    for(var i = 0; i<nums.length ; i++){
        let encontrado = target - nums[i];
        if(map.has(encontrado)){
            return [map.get(nums[i]),i];
        }else{
            return map.set(nums[i],i);
        }
    }
}

console.log(buscandoObjetivo(nums,target));



    













/* function getUsuario(){
    var login = {
        user: "Pedro",
        pass: "1234"
    };
    return {user, pass} = login;
}

getUsuario(user)
.then(function (user){
    this.user = login.user
    console.log(user);
})
 */